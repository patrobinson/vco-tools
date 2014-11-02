var actions = System.getModule(path).actionDescriptions;
var parameters = new Array();

function findAction(value, index, array) {
  if(value.name == actionName) {
    parameters = value.parameters;
  }
}

actions.forEach(findAction);

return parameters;
