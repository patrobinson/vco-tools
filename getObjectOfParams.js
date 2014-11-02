var paramObject = new Object();
// self.paramsArray - returns an array of our parameters. Change this line if cloning for other RIM server roles
var parameters = System.getModule("org.didata.library.basic").paramsArray("org.didata.puppet.configData", "getCdmDataAsJson");

// Create a JavaScript Object contianing our parameters
function loadObject(value, index, array) {
  if(eval(value.name) != null) {
    paramObject[value.name] = eval(value.name);
  }
}

parameters.forEach(loadObject);

return paramObject;