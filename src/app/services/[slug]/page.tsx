import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SERVICE_DETAILS } from '@/config/service-details'
import { SERVICES, SITE } from '@/config/site'
import ServicePage from '@/views/ServicePage'

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const detail = SERVICE_DETAILS[slug]
  if (!detail) return { title: 'Service Not Found | BuildFlow' }
  return {
    title: detail.metaTitle,
    description: detail.metaDescription,
    openGraph: {
      title: detail.metaTitle,
      description: detail.metaDescription,
      url: `${SITE.domain}/services/${slug}`,
    },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const detail = SERVICE_DETAILS[slug]
  if (!detail) notFound()

  const jsonLd: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: detail.h1,
      serviceType: detail.eyebrow,
      provider: { '@type': 'LocalBusiness', name: SITE.name, url: SITE.domain },
      areaServed: 'United States',
      description: detail.schemaDescription,
      url: `${SITE.domain}/services/${detail.slug}`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: detail.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ]

  if (detail.problemSolutionVideo) {
    const v = detail.problemSolutionVideo
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: v.name ?? detail.h1,
      description: v.description ?? detail.schemaDescription,
      thumbnailUrl: [`${SITE.domain}${v.poster}`],
      uploadDate: v.uploadDate ?? '2026-01-01',
      duration: v.duration,
      contentUrl: `${SITE.domain}${v.src}`,
    })
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage slug={slug} />
    </>
  )
}
