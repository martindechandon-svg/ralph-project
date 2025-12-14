/**
 * Vercel Web Analytics & Speed Insights Client-side Initialization
 * 
 * This file initializes both Vercel Web Analytics and Speed Insights on the client side.
 * 
 * Vercel Web Analytics:
 * - Loaded via the script tag in HTML files: /_vercel/insights/script.js
 * - The inject() function is automatically called when deployed on Vercel
 * 
 * Speed Insights:
 * - Imported from @vercel/speed-insights package
 * - Tracks Core Web Vitals and performance metrics
 * - Must run on client side only
 */

(async function() {
  'use strict';

  // Initialize Vercel Web Analytics and Speed Insights
  if (typeof window !== 'undefined') {
    // Mark that analytics initialization has been attempted
    window.__vercelAnalyticsInitialized = true;

    // Initialize Speed Insights for performance monitoring
    try {
      // Dynamically import Speed Insights
      const { injectSpeedInsights } = await import('@vercel/speed-insights');
      injectSpeedInsights();
      console.debug('[Vercel Speed Insights] Initialized successfully');
    } catch (error) {
      console.error('[Vercel Speed Insights] Initialization failed:', error);
    }

    // Log initialization in development mode
    if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development') {
      console.debug('[Vercel Analytics] Client-side analytics initialized');
    }
  }
})();
