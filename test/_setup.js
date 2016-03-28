/*
global.document = require('jsdom').jsdom('<html></html>');
global.window = document.defaultView;
global.$ = require('jquery')(window);
*/

// REFERENCE:
// http://stackoverflow.com/questions/24283460/how-to-test-jquery-plugin-from-command-line-using-jasmine-and-node
var jsdom = require("jsdom").jsdom;
global.window = jsdom().defaultView;
global.jQuery = global.$ = require("jquery"); 