import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SEO } from './SEO';

export default function NotFound() {
  return <main className="max-w-4xl mx-auto px-6 py-24">
    <SEO title="Page Not Found | Quartz International" description="Find quartz countertops, kitchen cabinets and contact details for Quartz International." />
    <Helmet><meta name="robots" content="noindex, follow" /></Helmet>
    <h1 className="text-4xl font-bold mb-6">Page not found</h1>
    <p className="mb-6">This page may have moved. Browse our countertops or contact us for help.</p>
    <Link className="btn-primary inline-flex" to="/quartz-kitchen-countertops">Browse countertops</Link>
  </main>;
}
