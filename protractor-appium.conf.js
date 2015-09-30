var path = require("path");
//var appium = require('appium');
var protractor = require('protractor');

exports.config = {
  // Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.
  //framework: 'jasmine2',

  seleniumAddress: 'http://localhost:4723/wd/hub',

  specs: [
    'protractor-spec.js'
  ],

  // Reference: https://github.com/appium/sample-code/blob/master/sample-code/examples/node/helpers/caps.js
  capabilities: {
    //autoWebview: true, // timeout: timed out after 30000 msec waiting for spec to complete
    autoWebview: true, // WEBVIEW_1
    //autoWebviewTimeout: 10,
    browserName: '', // Must be blank (or non-existent?) to use 'app'
    "appium-version": '1.4.1',
    platformName: 'iOS',
    platformVersion: '9.0',
    //deviceName: 'iPhone Simulator',
    deviceName: 'iPhone 6s',
    app: path.resolve("platforms/ios/build/emulator/appiumone.app")
  },

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    //defaultTimeoutInterval: 60000 // 30000 (30 seconds)
  },

  baseUrl: 'http://localhost:8100',

  // Configuring wd in onPrepare
  // wdBridge helps to bridge wd driver with other selenium clients
  // See https://github.com/sebv/wd-bridge/blob/master/README.md
  onPrepare: function () {
    console.log("onPrepare()");
    var wd = require('wd'),
        protractor = require('protractor'),
        wdBridge = require('wd-bridge')(protractor, wd);
    wdBridge.initFromProtractor(exports.config);
    console.log("onPrepare() done");
  }
};
