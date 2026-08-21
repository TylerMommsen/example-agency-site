import type { Metadata } from 'next'
import { SITE } from '@/config/site'
import AboutPage from '@/views/AboutPage'

export const metadata: Metadata = {
  title: 'About | BuildFlow',
  description: 'BuildFlow is the AI automation and website partner built exclusively for US contractors. One team, one connected system, built only for the trades.',
  openGraph: {
    title: 'About | BuildFlow',
    description: 'BuildFlow is the AI automation and website partner built exclusively for US contractors.',
    url: `${SITE.domain}/about`,
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.domain,
    description: 'BuildFlow is the done-for-you website and AI automation partner built exclusively for US contractors in plumbing, HVAC, roofing, electrical, remodeling, landscaping, and other trades.',
    email: SITE.email,
    telephone: '+15551234567',
    areaServed: 'United States',
    sameAs: [SITE.instagramUrl, SITE.facebookUrl, SITE.tiktokUrl, SITE.youtubeUrl],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AboutPage />
    </>
  )
}
