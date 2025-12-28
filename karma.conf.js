// This configuration forces Karma to use ChromeHeadless for CI environments like GitHub Actions.
module.exports = function (config) {
  config.set({
    browsers: ["ChromeHeadless"],
    customLaunchers: {
      ChromeHeadless: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"],
      },
    },
  });
};
