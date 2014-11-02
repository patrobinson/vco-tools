function propertyToObject (property) {
  var object = new Object();

  if(System.getObjectType(property) != "Properties") {
    return property;
  }

  for(var key in property) {
    switch(System.getObjectType(property.get(key))) {
      case "Properties":
        object[key] = propertyToObject(property.get(key));
        break;
      case "Array":
        var array = new Array();
        property.get(key).forEach(function(v, i, a) {
          array.push(propertyToObject(v));
        })
        object[key] = array;
        break;
      default:
        object[key] = property.get(key);
    }
  }
  
  return object;
}

return propertyToObject(prop);