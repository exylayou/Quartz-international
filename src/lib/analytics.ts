export type AnalyticEventType =
  | 'session_start'
  | 'page_view'
  | 'estimator_started'
  | 'estimator_completed'
  | 'estimator_abandoned_no_email'
  | 'estimate_pdf_downloaded'
  | 'lead_submitted_with_email';

export function getSessionId(): string {
  let sessionId = sessionStorage.getItem('qi_session_id');
  if (!sessionId) {
    sessionId = 'session-' + Math.random().toString(36).substring(2, 11) + '-' + Date.now();
    sessionStorage.setItem('qi_session_id', sessionId);
  }
  return sessionId;
}

export async function trackEvent(type: AnalyticEventType, meta?: Record<string, any>) {
  try {
    const sessionId = getSessionId();
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source') || undefined;
    const utmMedium = urlParams.get('utm_medium') || undefined;
    const utmCampaign = urlParams.get('utm_campaign') || undefined;

    await fetch('/api/analytics/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId,
        type,
        path: window.location.pathname,
        utmSource,
        utmMedium,
        utmCampaign,
        referrer: document.referrer || undefined,
        meta
      })
    });
  } catch (err) {
    console.warn('Analytics tracking error:', err);
  }
}
