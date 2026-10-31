import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function trackLeadConversion(value?: number, currency: string = 'CAD') {
  if (typeof window !== 'undefined') {
    const gtag = (window as any).gtag || function() {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push(arguments);
    };
    const conversionValue = (value && value > 0) ? value : 1.0;
    gtag('event', 'conversion', {
      'send_to': 'AW-18126008027/HSM0CLmOr6QcENvdk8ND',
      'value': conversionValue,
      'currency': currency
    });
    // Separate Google Ads account: count one saved quote request as a lead.
    gtag('event', 'conversion', {
      'send_to': 'AW-18273241262/qLaMCJH1n60dEK6RrolE',
      'value': 1.0,
      'currency': 'CAD'
    });
  }
}
