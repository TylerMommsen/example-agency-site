import type { Metadata } from 'next'
import { SITE } from '@/config/site'
import TermsPage from '@/views/TermsPage'

export const metadata: Metadata = {
  title: 'Terms & Conditions | BuildFlow',
  description: 'The terms and conditions that govern your use of BuildFlow\'s website and automation services for contractors.',
  openGraph: {
    title: 'Terms & Conditions | BuildFlow',
    url: `${SITE.domain}/terms`,
  },
}

export default function Page() {
  return <TermsPage />
}
