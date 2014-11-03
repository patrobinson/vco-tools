var transform = null;
if (thinProvisioned == true) {
  transform = VcVirtualMachineRelocateTransformation.sparse;
} else if (thinProvisioned == false) {
  transform = VcVirtualMachineRelocateTransformation.flat;
}

relocateSpec = System.getModule("com.vmware.library.vc.vm.spec").getRelocateSpec(null,null,host,pool,transform);
cloneSpec = System.getModule("com.vmware.library.vc.vm.spec").getCloneSpec(null,null,relocateSpec,powerOn,template);

var podSpec = new VcStorageDrsPodSelectionSpec() ;
podSpec.StoragePod = datastore.reference;

var storageSpec = new VcStoragePlacementSpec() ;
storageSpec.type = 'clone';
storageSpec.cloneName  = name;
storageSpec.folder = vmFolder.reference;
storageSpec.podSelectionSpec = podSpec;
storageSpec.cloneSpec = cloneSpec;
storageSpec.vm = cloneVM.reference;

var storageMgr = datastore.sdkConnection.storageResourceManager;

var clusterRecommendation = storageMgr.recommendDatastores(storageSpec);

var recommendationKey = clusterRecommendation.recommendations[0].key;

if(!recommendationKey) {
  System.log(clusterRecommendation.drsFault.reason);
  throw("recommendDatastores didn't return a recommendation");
}

task = storageMgr.applyStorageDrsRecommendation_Task( [ recommendationKey.toString() ] );

// Wait for the task to end.
var taskEnd = false;
var error;
var pollRate = 30;
var progress = true;

while (task != null) {
  if (task.info == null) {
    throw "VIM Task info is null";
  }
  if (task.info.state == null) {
    throw "VIM Task state is null";
  } 

  var state = task.info.state.value;
  if (state == "success") {
    break;
  }
  else if (state == "error") {
    if (task.info.error.localizedMessage == null) {
      throw "Task '" + task.info.name + "' has encountered an unknown error";
    }
    else {
      throw "Task '" + task.info.name + "' error: "+task.info.error.localizedMessage;
    }
  }
  else if ((progress) && (state == "running")) {
    if (task.info.progress == null) {
      System.log(task.info.name+" Queued or In Progress...");
      }
    else {
      System.log(task.info.name+" "+task.info.progress+" %");
    }
  }
  System.sleep(pollRate*1000);
}

if (task == null) {
  throw "VIM Task is null";
}
else if (progress) {
  System.log(task.info.name+" end");
}

// Return the Task Result
if (task != null && task.info != null && task.info.result != null) {
  return VcPlugin.convertToVimManagedObject(task , task.info.result.vm);
}
else {
  return null;
}