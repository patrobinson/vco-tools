var inParameterValues = [ database, documentName ];
var restOutput = System.getModule("org.nemski.vco-tools").invokeRestOperation(restOperation, inParameterValues, documentContent, "application/json");

if(restOutput.statusCode == 200) {
  return true;
} else {
  return false;
}