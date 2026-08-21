import type { Metadata } from 'next'
import { SITE } from '@/config/site'
import BookCallPage from '@/views/BookCallPage'

export const metadata: Metadata = {
  title: `Book a Call | ${SITE.name}`,
  description: 'Book a free call to find the right plan for your contracting business. Get a professional website and full automation system live in 7-10 days.',
  openGraph: {
    title: `Book a Call | ${SITE.name}`,
    description: 'Book a free call to find the right plan for your contracting business.',
    url: `${SITE.domain}/book-a-call`,
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Book a Call with ${SITE.name}`,
    url: `${SITE.domain}/book-a-call`,
    description: 'Book a free call to find the right plan for your contracting business.',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BookCallPage />
    </>
  )
}
