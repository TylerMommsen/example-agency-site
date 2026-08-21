import type { Metadata } from 'next'
import { SITE } from '@/config/site'
import TradesPage from '@/views/TradesPage'

export const metadata: Metadata = {
  title: 'Trades We Serve | BuildFlow',
  description: 'BuildFlow builds websites and AI automation for US contractors in plumbing, HVAC, roofing, electrical, remodeling, landscaping, concrete, painting, pest control, and more.',
  openGraph: {
    title: 'Trades We Serve | BuildFlow',
    description: 'BuildFlow builds websites and AI automation for US contractors across all major trades.',
    url: `${SITE.domain}/about/trades`,
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Trades BuildFlow Serves',
    description: 'BuildFlow builds websites and AI automation systems for US contractors and local service businesses across these trades.',
    itemListElement: [
      'Plumbing', 'HVAC', 'Roofing', 'Electrical',
      'Remodeling', 'Landscaping', 'Concrete', 'Painting',
      'Pest Control', 'Pressure Washing',
    ].map((trade, i) => ({ '@type': 'ListItem', position: i + 1, name: trade })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <TradesPage />
    </>
  )
}
