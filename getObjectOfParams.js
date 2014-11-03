var paramObject = new Object();
// self.paramsArray - returns an array of our parameters. Change this line if cloning
var parameters = System.getModule("org.nemski.vco-tools").paramsArray("org.nemski.vco-tools", "getObjectOfParams");

// Create a JavaScript Object contianing our parameters
function loadObject(value, index, array) {
  if(eval(value.name) != null) {
    paramObject[value.name] = eval(value.name);
  }
}

parameters.forEach(loadObject);

return paramObject;
