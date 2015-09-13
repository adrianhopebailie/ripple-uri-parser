# Ripple URI Parser

A simple HTML page demonstrating the use of uri-js and a custom scheme definition for Ripple URIs.

The interesting bit is the custom scheme definition in:

`ripple-uri-parser.js`

You can either test it in-browser or run `node server.js` to expose an endpoint that will test the 
functionality in Node.

## Dependencies

* uri-js - https://github.com/garycourt/uri-js

Browser: uri-js is not available via Bower so just downloaded it and include the content of the `dist` folder.
Node: `npm install uri-js`

* ripple-lib (optional) - https://github.com/ripple/ripple-lib

Browser: `bower install ripple`
Node: `npm install ripple-lib`


##Install

Browser:
```html
    <script type="application/javascript" src="lib/uri-js/uri.min.js"></script>
    <script type="application/javascript" src="lib/uri-js/schemes/mailto.min.js"></script>
    <script type="application/javascript" src="lib/uri-js/schemes/urn.min.js"></script>
    <script type="application/javascript" src="bower_components/ripple/ripple.js"></script>
    <script type="application/javascript" src="ripple-uri-parser.js"></script>
```
### Auto-expanding transaction blob

The parser will attempt to deserialize transaction blobs using the ripple-lib SerializedObject. In the browser this 
requires you to add a line of Javascript after all of the includes:

```javascript
    var SerializedObject = ripple.SerializedObject;
```
Node:
```javascript
    var URI = require("uri-js");
    var SerializedObject = require('ripple-lib').SerializedObject;
    require("./ripple-uri-parser");
```

##Usage
Open index.html in a browser to test.

In your own project install and then use:
```javascript
    var uri_object = URI.parse(uri);
```


