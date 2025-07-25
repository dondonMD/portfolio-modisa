import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import '../styles/globals.css';

// Performance monitoring
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Performance monitoring
    if (typeof window !== 'undefined') {
      // Log Core Web Vitals
      const logWebVitals = (metric: any) => {
        console.log(metric);
        // You can send this data to your analytics service
        if (window.gtag) {
          window.gtag('event', metric.name, {
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            event_category: 'Web Vitals',
            event_label: metric.id,
            non_interaction: true,
          });
        }
      };

      // Import web-vitals dynamically (for v5.x)
      import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
        onCLS(logWebVitals);
        onFID(logWebVitals);
        onFCP(logWebVitals);
        onLCP(logWebVitals);
        onTTFB(logWebVitals);
      });
    }

    // Preload critical resources
    const preloadResources = () => {
      const criticalImages = [
        '/assets/profile-pic.png',
        '/assets/projects/ecommerce.jpg',
        '/assets/projects/network-monitor.jpg'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    preloadResources();

    // Service Worker registration for PWA capabilities
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(err => {
        console.log('Service Worker registration failed:', err);
      });
    }

    // Intersection Observer polyfill for older browsers
    if (!window.IntersectionObserver) {
      import('intersection-observer');
    }

    // Add smooth scrolling support for older browsers
    if (!CSS.supports('scroll-behavior', 'smooth')) {
      import('smoothscroll-polyfill').then(smoothscroll => {
        smoothscroll.polyfill();
      });
    }
  }, []);

  return (
    <>
      <Head>
        {/* Global Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Security Headers */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:;" />
        
        {/* Robots */}
        <meta name="robots" content="index, follow" />
        
        {/* Language */}
        <meta httpEquiv="content-language" content="en-US" />
        
        {/* Cache Control */}
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
      </Head>
      
      {/* Loading Screen */}
      <div id="loading-screen" className="fixed inset-0 z-50 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-dark-900 dark:via-dark-800 dark:to-slate-900 flex items-center justify-center transition-opacity duration-500">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center shadow-2xl mb-4 animate-pulse">
            <span className="text-white font-bold text-2xl">M</span>
          </div>
          <div className="w-8 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse"></div>
          <p className="text-sm text-dark-500 dark:text-dark-400 mt-4">Loading...</p>
        </div>
      </div>

      {/* Main App */}
      <div id="app-root">
        <Component {...pageProps} />
      </div>

      {/* Hide loading screen after app loads */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('load', function() {
              const loadingScreen = document.getElementById('loading-screen');
              if (loadingScreen) {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                  loadingScreen.style.display = 'none';
                }, 500);
              }
            });
          `,
        }}
      />

      {/* Analytics (replace with your tracking ID) */}
      {process.env.NODE_ENV === 'production' && (
        <>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'GA_MEASUREMENT_ID', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `,
            }}
          />
        </>
      )}
    </>
  );
}

// Export function to report web vitals
export function reportWebVitals(metric: any) {
  console.log(metric);
  
  // Send to analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }
}