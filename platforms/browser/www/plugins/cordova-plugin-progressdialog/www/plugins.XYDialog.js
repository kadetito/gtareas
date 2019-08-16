cordova.define("cordova-plugin-progressdialog.XYDialog", function(require, exports, module) { /*jslint browser: true, devel: true, node: true, sloppy: true, plusplus: true*/
/*global require, cordova */
/*
The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED ""AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
var exec = require('cordova/exec');

function XYDialog() {}

/**
 * Initializing the progress dialog and set various parameters
 * @param {Object} args
 * These are the valid options:
 *
 * "theme": can be one of the following:
 * "TRADITIONAL", "DEVICE_DARK", "DEVICE_LIGHT" (default), "HOLO_DARK", "HOLO_LIGHT"
 *
 * "progressStyle": can be one of the following:
 * "SPINNER" (default), HORIZONTAL"
 *
 *  "cancelable" : true (default) or false
 *
 *  "title": title of the progress dialog (defaults to empty)
 *
 *  "message": contents of the progress dialog (defaults to empty)
 *
 *  @example
 *  cordova.plugin.XYDialog.init({
 *      theme : 'HOLO_DARK',
 *      progressStyle: 'SPINNER',
 *      cancelable : false,
 *      title: 'Please Wait...',
 *      message: 'Contacting server ...'
        autoHide:3000
 *  });
 *
 */
XYDialog.prototype.init = function (args) {
    args = args || {};
    exec(null, null, 'XYDialog', 'init', args);
    return this;
};

/**
 * Dismiss the progress dialog
 */
XYDialog.prototype.dismiss = function () {
    exec(null, null, 'XYDialog', 'dismiss', '');
    return this;
};

/**
 * Set the value of the progress bar when progress style is "HORIZONTAL"
 * @param {Int} value
 */
XYDialog.prototype.setProgress = function (value) {
    exec(null, null, 'XYDialog', 'setProgress', value);
    return this;
};

/**
 * Set the title of the progress dialog
 * @param {String} title
 */
XYDialog.prototype.setTitle = function (title) {
    exec(null, null, 'XYDialog', 'setTitle', title);
    return this;
};

/**
 * Set the message of the progress dialog
 * @param {String} message
 */
XYDialog.prototype.setMessage = function (message) {
    exec(null, null, 'XYDialog', 'setMessage', message);
    return this;
};

/**
 * Set the progress max of the progress dialog
 * @param {Int} max
 */
XYDialog.prototype.setMax = function (max) {
    exec(null, null, 'XYDialog', 'setMax', max);
    return this;
};

/**
 * Set whether the progress dialog is calncelable or not
 * @param {Boolean} flag
 */
XYDialog.prototype.setCancelable = function (flag) {
    exec(null, null, 'XYDialog', 'setCancelable', flag);
    return this;
};

module.exports = new XYDialog();
});
