module.exports = function (wallaby) {
  return {
    files: [
      "src/**/*.ts?(x)",
      "!src/**/*_Spec.ts?(x)"
    ],
    tests: [
      "src/**/*_Spec.ts?(x)"
    ],
    env: {
      type: "node"
    },
    debug: true,
    compilers: {
      "**/*.ts?(x)": wallaby.compilers.typeScript({ module: "commonjs", jsx: "react" })
    },
    setup: function () {

      if (!global._testEnvInitilized) {
        var chai = require("chai");
        var sinonChai = require("sinon-chai");
        var chaiEnzyMe = require("chai-enzyme");
        var chaiImmutable = require("chai-immutable");
        var chaiSubset = require("chai-subset");

        chai.use(sinonChai);
        chai.use(chaiImmutable);
        chai.use(chaiEnzyMe());
        chai.use(chaiSubset);

        global._testEnvInitilized = true;
      }

      var jsdom = require("jsdom").jsdom;
      var doc = jsdom(`<html><body></body></html>`);
      global.window = doc.defaultView;
      global.document = doc;

      require("mutationobserver-shim");
      global.MutationObserver = window.MutationObserver;
      global.SVGElement = function () { };
      global.getComputedStyle = window.getComputedStyle;

      // Ignore any styles (react-datepicker loads css)
      require('ignore-styles');


      // For radium & jsdom
      global.navigator = { userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2454.85 Safari/537.36' };
    }
  };
}