// Use Angular CLI's default Karma config, but override browsers for CI environments
module.exports = function (config) {
  const isCI =
    process.env.CI === "true" || process.env.GITHUB_ACTIONS === "true";
  const baseConfig = require("./node_modules/@angular-devkit/build-angular/plugins/karma");
  baseConfig(config);
  config.browsers = ["ChromeHeadless"];
  config.customLaunchers = {
    ChromeHeadless: {
      base: "ChromeHeadless",
      flags: ["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"],
    },
  };
  config.singleRun = true;
};
