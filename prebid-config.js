// Prebid.js configuration for Homebrew Coffee Guide
// See index.html for the page integration.

var pbjsConfig = {
  debug: false,
  enableSendAllBids: true,
  bidderTimeout: 2500,
  priceGranularity: 'medium'
};

if (typeof pbjs !== 'undefined' && pbjs.setConfig) {
  pbjs.setConfig(pbjsConfig);
}
