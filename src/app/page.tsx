import type { Metadata } from 'next'
import SiteLayout from '@/components/layout/SiteLayout'
import HomeHero from '@/components/home/HomeHero'
import ProofBar from '@/components/home/ProofBar'
import ServicesGrid from '@/components/home/ServicesGrid'
import WhyUs from '@/components/home/WhyUs'
import FounderIntro from '@/components/home/FounderIntro'
import PartnersStrip from '@/components/home/PartnersStrip'
import FAQ, { FAQS } from '@/components/home/FAQ'
import { SITE } from '@/config/site'

export const metadata: Metadata = {
  title: 'BuildFlow | Contractor Websites & Automation',
  description: 'Contractor websites with automated lead follow-up, business phone number, and review funnel to capture leads from marketing.',
  openGraph: {
    title: 'BuildFlow | Contractor Websites & Automation',
    description: 'Contractor websites with automated lead follow-up, business phone number, and review funnel to capture leads from marketing.',
    url: 'https://yourdomain.com',
    type: 'website',
  },
}

export default function Home() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE.name,
      url: SITE.domain,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: SITE.name,
      description: `${SITE.name} builds professional websites and AI automation systems for US contractors, including automated lead follow-up, dedicated business phone, 5-star review funnel, missed-call text-back, and all-in-one inbox.`,
      url: SITE.domain,
      telephone: '+15551234567',
      email: SITE.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Main Street, Suite 100',
        addressLocality: 'Anytown',
        addressRegion: 'ST',
        postalCode: '12345',
        addressCountry: 'US',
      },
      areaServed: 'United States',
      priceRange: '$$',
      sameAs: [SITE.instagramUrl, SITE.facebookUrl, SITE.tiktokUrl, SITE.youtubeUrl],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteLayout>
        <HomeHero />
        <ProofBar />
        <ServicesGrid />
        <WhyUs />
        <FounderIntro />
        <PartnersStrip />
        <FAQ />
      </SiteLayout>
    </>
  )
}
