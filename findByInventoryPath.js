var sdkConnections = VcPlugin.allSdkConnections;
for (var i in sdkConnections) {
  var host = sdkConnections[i];
  var mo = host.searchIndex.findByInventoryPath(path);
}

return mo;