var request = restOperation.createRequest(inParameterValues, content);
//set the request content type
request["contentType"] = contentType;
System.log("Request: " + request);
System.log("Request URL: " + request.fullUrl);
var response = request.execute();
System.log("Response: " + response);
var statusCode = response.statusCode;
var statusCodeAttribute = statusCode;
System.log("Status code: " + statusCode);
var contentLength = response.contentLength;
var headers = response.getAllHeaders();
var contentAsString = response.contentAsString;
System.log("Content as string: " + contentAsString);

if (statusCode >= 400) {
  throw "HTTPError: status code: " + statusCodeAttribute;
}

return {"statusCode": statusCode, "contentLength": contentLength, "headers": headers, "content": contentAsString}
