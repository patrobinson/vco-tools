vco-tools
=========

A collection of generic vCenter Orchestrator tools.

Predomintantly these are used to integrate vCO with Puppet (Open Source, but Enterprise will work too), but are generic enough to be used for any kind of integration that leveriges JSON.

Because vCO executes JavaScript inside a Java environment, pure JavaScript Objects are sometimes trampled (i.e. when passing them from one workflow to another workflow) and become vCO "Properties" objects instead which can't be deserialised into JSON.

Also you cannot easily convert user input into JSON, as the input fields can't create standard JavaScript Objects.
