var hosts = VcPlugin.getAllHostSystems();
var hostSystemNetworks = new Array();

// Workaround for vCO not properly passing in Regexp objects
var regexp = new RegExp(label);

for(var i in hosts){
  var host = hosts[i];
  hostSystemNetworks = hostSystemNetworks.concat(host.network);
}

var networks = new Array();
for (var j in hostSystemNetworks) {
  if (hostSystemNetworks[j].name.match(regexp)) {
    if (networks.indexOf(hostSystemNetworks[j]) == -1) {
      networks.push(hostSystemNetworks[j]);
    }
  }
}
return networks;