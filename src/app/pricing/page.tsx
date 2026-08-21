import type { Metadata } from 'next'
import { SITE } from '@/config/site'
import { PRICING_FAQS } from '@/config/page-content'
import PricingPage from '@/views/PricingPage'

export const metadata: Metadata = {
  title: 'Pricing | BuildFlow',
  description: 'BuildFlow offers two plans for US contractors. Essentials at $97/mo includes a professional website. Complete at $297/mo adds AI lead follow-up, review funnel, missed-call text-back, and all-in-one inbox.',
  openGraph: {
    title: 'Pricing | BuildFlow',
    description: 'Two simple plans for US contractors: $97/mo website-only or $297/mo with the full AI automation system.',
    url: `${SITE.domain}/pricing`,
  },
}

export default function Page() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'BuildFlow Contractor Packages',
      provider: { '@type': 'LocalBusiness', name: SITE.name, url: SITE.domain },
      areaServed: 'United States',
      description: 'Two simple monthly packages for US contractors. Essentials at $97/mo for a professional website, or Complete at $297/mo for the website plus the full AI automation system.',
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '97',
        highPrice: '297',
        offerCount: 2,
        url: `${SITE.domain}/pricing`,
        offers: [
          { '@type': 'Offer', name: 'Essentials', price: '97', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
          { '@type': 'Offer', name: 'Complete', price: '297', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: PRICING_FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PricingPage />
    </>
  )
}
