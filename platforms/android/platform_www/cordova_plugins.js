cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-camera.Camera",
      "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "Camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverOptions",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverOptions"
      ]
    },
    {
      "id": "cordova-plugin-camera.camera",
      "file": "plugins/cordova-plugin-camera/www/Camera.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "navigator.camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverHandle",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverHandle"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-progressdialog.XYDialog",
      "file": "plugins/cordova-plugin-progressdialog/www/plugins.XYDialog.js",
      "pluginId": "cordova-plugin-progressdialog",
      "clobbers": [
        "cordova.plugin.progressDialog"
      ]
    },
    {
      "id": "cordova-plugin-restful.RESTful",
      "file": "plugins/cordova-plugin-restful/www/RESTful.js",
      "pluginId": "cordova-plugin-restful",
      "clobbers": [
        "cordova.plugins.RESTful"
      ]
    },
    {
      "id": "cordova-plugin-camera-preview.CameraPreview",
      "file": "plugins/cordova-plugin-camera-preview/www/CameraPreview.js",
      "pluginId": "cordova-plugin-camera-preview",
      "clobbers": [
        "CameraPreview"
      ]
    },
    {
      "id": "cordova-plugin-simplelogin.SimpleLogin",
      "file": "plugins/cordova-plugin-simplelogin/www/simplelogin.js",
      "pluginId": "cordova-plugin-simplelogin",
      "clobbers": [
        "SimpleLogin"
      ],
      "runs": true
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-camera": "4.1.0",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-progressdialog": "2.0.1",
    "cordova-plugin-restful": "0.0.3",
    "cordova-plugin-camera-preview": "0.11.0",
    "cordova-plugin-simplelogin": "1.0.0"
  };
});