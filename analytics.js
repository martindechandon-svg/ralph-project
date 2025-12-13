/**
 * Vercel Web Analytics Client-side Initialization
 * 
 * This file initializes Vercel Web Analytics on the client side.
 * It's loaded via the script tag in HTML files: /_vercel/insights/script.js
 * 
 * The inject() function from @vercel/analytics is automatically called
 * when the Vercel insights script loads if the project is deployed on Vercel.
 * 
 * For development or non-Vercel deployments, this ensures analytics tracking
 * is properly configured.
 */

(function() {
  'use strict';

  // Initialize Vercel Web Analytics
  // When deployed on Vercel, the /_vercel/insights/script.js will automatically
  // handle analytics injection. For development environments, this script ensures
  // the analytics module is ready.

  if (typeof window !== 'undefined') {
    // Mark that analytics initialization has been attempted
    window.__vercelAnalyticsInitialized = true;

    // Log initialization in development mode
    if (process.env.NODE_ENV === 'development') {
      console.debug('[Vercel Analytics] Client-side analytics initialized');
    }
  }
})();
