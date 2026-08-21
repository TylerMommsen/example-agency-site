import type { Metadata } from 'next'
import { SITE } from '@/config/site'
import { PROCESS_DEEP } from '@/config/page-content'
import ProcessPage from '@/views/ProcessPage'

export const metadata: Metadata = {
  title: 'Our Process | BuildFlow',
  description: 'BuildFlow builds your contractor website and automation system in days 1–7, then completes your launch call and handover in days 7–10. Fully done for you from kickoff to live.',
  openGraph: {
    title: 'Our Process | BuildFlow',
    description: 'BuildFlow builds your contractor website and automation system, fully done for you from kickoff to live.',
    url: `${SITE.domain}/about/process`,
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How BuildFlow builds your contractor lead engine',
    step: PROCESS_DEEP.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.body,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProcessPage />
    </>
  )
}
