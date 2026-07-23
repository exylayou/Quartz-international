import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: string;
  keywords?: string;
}

export function SEO({ 
  title, 
  description, 
  canonical, 
  image = '/images/hero8.jpeg', // Default Open Graph image
  type = 'website',
  keywords = 'quartz countertops, kitchen cabinets, toronto, gta, custom kitchens'
}: SEOProps) {
  const siteUrl = 'https://quartzinternational.ca';
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeGoodsStore", "ProfessionalService"],
    "name": "Quartz International",
    "image": imageUrl,
    "@id": siteUrl,
    "url": siteUrl,
    "telephone": "(647) 370-6938",
    "priceRange": "$$",
    "email": "info@quartzinternational.ca",
    "description": description || "Leading supplier and installer of turnkey kitchen cabinet packages and quartz countertops across Toronto and the Greater Toronto Area.",
    "sameAs": [
      "https://share.google/kkKyItFobaGVXcr12"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.6532,
      "longitude": -79.3832
    },
    "areaServed": [
      { "@type": "City", "name": "Toronto" },
      { "@type": "City", "name": "Vaughan" },
      { "@type": "City", "name": "Markham" },
      { "@type": "City", "name": "Richmond Hill" },
      { "@type": "City", "name": "Mississauga" },
      { "@type": "City", "name": "Brampton" },
      { "@type": "City", "name": "Oakville" },
      { "@type": "City", "name": "Milton" },
      { "@type": "City", "name": "Aurora" },
      { "@type": "City", "name": "Newmarket" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ]
  };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* LocalBusiness JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
}
