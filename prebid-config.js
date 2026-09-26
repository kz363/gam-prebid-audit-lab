// :  Flaws for Demo/Lab
// 1. [FLAW] Excessive bidder timeout - Set to 2500ms (too high, causes latency)
//     REALISTIC: Publishers often set high timeouts hoping to get more bids, not realizing impact on UX
//     FIX: Reduce to 1000-1500ms range
// 
// 2. [FLAW] Coarse priceGranularity - Set to 'medium' (loses revenue precision)
//     REALISTIC: Default configs or copied examples often use 'medium' without understanding impact
//     FIX: Use 'dense' or custom granularity for better price resolution
// 
// 3. [FLAW] Missing consent management configuration - No GDPR/CCPA handling
//     REALISTIC: Many publishers forget consent management or assume it's handled elsewhere
//     FIX: Add proper consentManagement configuration with CMP integration
// 
// 4. [FLAW] No server-to-server (S2S) configuration
//     REALISTIC: S2S setup requires additional work, often omitted in initial implementation
//     FIX: Add s2sConfig for bidders that support it (e.g., AppNexus, Rubicon)
// 
// 5. [FLAW] Missing sizeMapping for responsive ad units
//     REALISTIC: Simple size arrays don't adapt to different viewports, wasting impressions
//     FIX: Add sizeMapping for different breakpoint ranges

// Prebid.js Configuration for Homebrew Coffee Guide
// This file demonstrates a realistic configuration with  flaws for audit purposes

var pbjsConfig = {
  debug: false,
  enableSendAllBids: true,
  
  // FLAW #1: Excessive bidder timeout
  // Setting timeout too high increases page latency without proportional bid gain
  // REALISTIC PLausibility: Publishers mistakenly believe longer = more bids
  bidderTimeout: 2500, // Should be 1000-1500ms
  
  // FLAW #2: Coarse priceGranularity
  // Reduces price precision, potentially losing revenue on fractional bids
  // REALISTIC PLausibility: Default or copied config without optimization
  priceGranularity: 'medium', // Should be 'dense' or custom
  
  // FLAW #3: Missing/incomplete consent management
  // No GDPR/CCPA compliance - risky for EU/CA traffic
  // REALISTIC PLausibility: Often overlooked or assumed handled by CMP elsewhere
  consentManagement: {
    gdpr: {
      cmpApi: 'iab',
      // Missing timeout and other required fields
    },
    usp: {
      cmpApi: 'iab'
      // Missing timeout
    }
  },
  
  // FLAW #4: No S2S configuration
  // Missing opportunity to reduce browser load and improve matching
  // REALISTIC PLausibility: Requires extra setup, often deferred
  // [VERIFY] S2S setup varies by bidder and requires account-level configuration
  
  // FLAW #5: No userSync configuration
  // Missing user synchronization reduces match rates
  // REALISTIC PLausibility: Advanced feature often omitted initially
  
  // [VERIFY] Price granularity options: 'low', 'medium', 'high', 'auto', 'dense', or custom
};

// Apply the configuration
if (typeof pbjs !== 'undefined' && pbjs.setConfig) {
  pbjs.setConfig(pbjsConfig);
}