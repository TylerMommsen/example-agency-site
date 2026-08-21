import type { Metadata } from 'next'
import { SITE } from '@/config/site'
import OurWorkPage from '@/views/OurWorkPage'

export const metadata: Metadata = {
  title: 'Our Work | BuildFlow',
  description: 'Browse real contractor websites built by BuildFlow for plumbers, HVAC technicians, roofers, concrete contractors, pet groomers, and pressure washing companies across the US.',
  openGraph: {
    title: 'Our Work | BuildFlow',
    description: 'Browse real contractor websites built by BuildFlow.',
    url: `${SITE.domain}/our-work`,
  },
}

export default function Page() {
  return <OurWorkPage />
}
