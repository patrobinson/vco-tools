var cProp = new Properties({c: "c"});
var aProp = new Properties({a: "a"});
var aArr = new Array(aProp);
var bArr = new Array("b");
var prop = new Properties({a: aArr, b: bArr, c: cProp});

var obj = System.getModule("org.nemski.vco-tools").propertyToObject(prop);
if(obj.c.c != "c") return false;
if(obj.a[0].a != "a") return false;
if(obj.b[0] != "b") return false;