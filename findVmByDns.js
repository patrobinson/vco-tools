var sdkConnections = VcPlugin.allSdkConnections;
for (var i in sdkConnections) {
  var host = sdkConnections[i];
  var vm = host.searchIndex.findByDnsName(Datacenter, Fqdn, true);
}

return vm;