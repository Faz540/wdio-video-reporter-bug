const video = require('wdio-video-reporter');
const fs = require('fs-extra');

exports.config = {
    baseUrl: "https://www.gear4music.com",
    runner: "local",
    // Override default path ("/wd/hub") for chromedriver service.
    path: "/",
    specs: [
        "./tests/*.spec.js"
    ],
    maxInstances: 1,
    capabilities: [{
        browserName: "chrome",
    }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: "error",
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn"t send response
    connectionRetryTimeout: 90000,
    // Default request retries count
    connectionRetryCount: 3,
    services: ["chromedriver"],
    framework: "mocha",
    reporters: [
        "spec",
        [video, {
          saveAllVideos: true,       // If true, also saves videos for successful test cases
          videoSlowdownMultiplier: 50, // Higher to get slower videos, lower for faster videos [Value 1-100]
          outputDir: "./videos"
        }],
      ],
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: "bdd",
        timeout: 60000
    },
    // WDIO Test Runner Hooks:
    onPrepare: function (config, capabilities) {
        // Delete/clear the videos directory before every test run.
        fs.emptyDirSync("./videos");
    },
}
