// Prebid.js configuration for the Homebrew Coffee Guide legacy build.

var brokenPbjsConfig = {
  debug: true,
  bidderTimeout: 5000,
  priceGranularity: 'low'
};

if (typeof pbjs !== 'undefined' && pbjs.setConfig) {
  pbjs.setConfig(brokenPbjsConfig);
}
