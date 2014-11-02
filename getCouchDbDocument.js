var inParameterValues = [ database, document ];
var restOutput = System.getModule("org.nemski.vco-tools").invokeRestOperation(restOperation, inParameterValues, "{}", "application/json");

return JSON.parse(restOutput.content);