// : Severe Flaws for Broken Demo
// 1. [FLAW] Extremely excessive bidder timeout - Set to 5000ms (severe latency impact)
//     REALISTIC: Misconfiguration or copied bad example
// 
// 2. [FLAW] Very coarse priceGranularity - Set to 'low' (severe revenue loss)
//     REALISTIC: Lack of understanding of price granularity impact
// 
// 3. [FLAW] Complete lack of consent management (GDPR/CCPA)
//     REALISTIC: Oversight or assumption it's not needed
// 
// 4. [FLAW] Duplicate pbjs.requestBids calls
//     REALISTIC: Copy-paste error or misunderstanding of queuing system
// 
// 5. [FLAW] Conflicting/ad duplicate ad unit IDs in comments (conceptual)
//     REALISTIC: Complex sites might accidentally reuse codes
// 
// 6. [FLAW] Missing critical adapters referenced in adUnits
//     REALISTIC: Forgetting to include adapter files when using certain bidders

// Severely broken Prebid.js Configuration
// Demonstrates critical issues that would severely impact performance and compliance

var brokenPbjsConfig = {
  debug: true, // Should be false in production
  
  // FLAW #1: Extremely excessive bidder timeout
  // 5 seconds is catastrophic for user experience and viewability
  bidderTimeout: 5000, // Industry max recommendation: 1500ms
  
  // FLAW #2: Very coarse priceGranularity
  // 'low' granularity loses significant revenue on fractional bids
  priceGranularity: 'low', // Should be 'dense' for header bidding
  
  // FLAW #3: Missing consent management entirely
  // No GDPR/CCPA compliance - illegal for EU/CA traffic
  // consentManagement: {} // Completely missing or empty
  
  // Missing critical configurations:
  // - enableSendAllBids: false (default, reduces competition)
  // - userSync: {} // Missing user synchronization
  // - s2sConfig: {} // Missing server-to-server
  // - priceFloor: {} // Missing price floors
  
  // [VERIFY] Ad unit codes must be unique - duplicate codes cause targeting conflicts
  // [VERIFY] All bidders in adUnits must have corresponding adapters loaded
};

// Apply the broken configuration
if (typeof pbjs !== 'undefined' && pbjs.setConfig) {
  pbjs.setConfig(brokenPbjsConfig);
}

// Note: In a real broken scenario, some adapters might be missing
// but we're showing the config issues here