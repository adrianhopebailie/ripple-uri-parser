# Ripple URI Parser

A simple HTML page demonstrating the use of uri-js and a custom scheme definition for Ripple URIs.

The interesting bit is the custom scheme definition in:

`js/schemes/ripple.js`


## Dependencies

Unfortunately uri-js is not available via Bower so its just been downloaded and it's dist folder put in the 
`lib/uri-js` folder.

- uri-js - https://github.com/garycourt/uri-js

## TODO

Implement a Node.js test that pulls in the object deserialization logic from ripple-lib to deserialize blobs 
when parsing a blob from a URI