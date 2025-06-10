'use client'

export const useAnalytics = () => {
  const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', eventName, eventParams)
    }
  }

  return { trackEvent }
} 