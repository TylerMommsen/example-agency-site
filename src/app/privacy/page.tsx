import type { Metadata } from 'next'
import { SITE } from '@/config/site'
import PrivacyPolicyPage from '@/views/PrivacyPolicyPage'

export const metadata: Metadata = {
  title: 'Privacy Policy | BuildFlow',
  description: 'How BuildFlow collects, uses, and protects information from contractors and visitors who interact with our website and automation services.',
  openGraph: {
    title: 'Privacy Policy | BuildFlow',
    url: `${SITE.domain}/privacy`,
  },
}

export default function Page() {
  return <PrivacyPolicyPage />
}
