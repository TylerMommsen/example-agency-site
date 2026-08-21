import SiteLayout from "@/components/layout/SiteLayout";
import { SITE } from "@/config/site";

const LAST_UPDATED = "May 1, 2026";

const PrivacyPolicyPage = () => {
  return (
    <SiteLayout hideUniversalSections>

      {/* HERO */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-wide py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Legal</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="mt-3 text-sm text-primary-foreground/75">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* BODY */}
      <section className="section-y bg-background">
        <div className="container-tight">
          <article className="prose-style space-y-8 text-base md:text-lg text-foreground">
            <p className="text-muted-foreground">
              This Privacy Policy explains how {SITE.name} ("BuildFlow," "we," "us," or "our") collects, uses, handles, and safeguards information when you visit our website, contact us, or use any of our services (collectively, the "Services"). By accessing or using the Services, you agree to this Privacy Policy.
            </p>

            <Section title="1. Information We Collect">
              <p>We collect information you voluntarily provide and information collected automatically:</p>
              <ul>
                <li><strong>Contact information</strong> you submit through forms, including name, email address, phone number, business details, and any message content.</li>
                <li><strong>Communication records</strong> when you call, text, or email us, including call recordings and transcripts where permitted by law.</li>
                <li><strong>Usage and device data</strong> such as IP address, browser type, operating system, referring URLs, pages viewed, and timestamps, collected via cookies and similar technologies.</li>
                <li><strong>Marketing data</strong> such as the source that referred you to our site and your interactions with our emails.</li>
              </ul>
            </Section>

            <Section title="2. How We Use Information">
              <ul>
                <li>To respond to inquiries, schedule demo calls, and provide our Services.</li>
                <li>To send transactional and marketing communications via email, SMS, and phone, including automated messages.</li>
                <li>To operate, maintain, secure, and improve the Services and our website.</li>
                <li>To comply with legal obligations and enforce our agreements.</li>
                <li>To prevent fraud, abuse, and unauthorized access.</li>
              </ul>
            </Section>

            <Section title="3. SMS &amp; Call Consent (TCPA)">
              <p>
                By providing your phone number and submitting a form on our website, you consent to receive calls and text messages from {SITE.name} and its automated systems at the number provided, including for marketing purposes. Consent is not a condition of purchase. Message and data rates may apply. You can opt out of SMS at any time by replying STOP and opt out of calls by asking us to remove your number. We may continue to contact you for transactional or service-related purposes as permitted by law.
              </p>
              <p>
                No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
              </p>
            </Section>

            <Section title="4. Cookies &amp; Tracking">
              <p>
                We use cookies, pixels, and similar technologies to operate the site, remember preferences, measure traffic, and run analytics and advertising. You can disable cookies through your browser settings, though some features may not function properly without them.
              </p>
            </Section>

            <Section title="5. How We Work With Service Providers">
              <p>
                We do not sell, rent, or trade personal information or leads. We allow information to be used only as needed to operate our Services, fulfill your requests, support customer communications, meet legal obligations, and protect rights, property, or safety.
              </p>
              <ul>
                <li><strong>Service providers</strong> that operate on our behalf, including hosting, analytics, CRM, email, SMS, calendar booking, call routing, and customer support providers.</li>
                <li><strong>Legal and safety requests</strong> when required by law, subpoena, court order, or to protect rights, property, or safety.</li>
                <li><strong>With your direction</strong> for another purpose explained when the information is collected.</li>
              </ul>
              <p>
                All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and providers of the Text Message services.
              </p>
            </Section>

            <Section title="6. Data Retention">
              <p>
                We retain personal information for as long as necessary to provide the Services, comply with legal obligations, resolve disputes, and enforce our agreements. Retention periods vary based on the nature of the data and applicable law.
              </p>
            </Section>

            <Section title="7. Your Rights">
              <p>
                Depending on where you live, you may have rights to access, correct, delete, or restrict use of your personal information, and to opt out of certain uses. To exercise these rights, contact us using the information below. We will verify your identity before fulfilling any request.
              </p>
            </Section>

            <Section title="8. Security">
              <p>
                We use reasonable administrative, technical, and physical safeguards to protect personal information. No method of transmission or storage is fully secure, however, and we cannot guarantee absolute security.
              </p>
            </Section>

            <Section title="9. Children's Privacy">
              <p>
                The Services are not directed to children under 16, and we do not knowingly collect personal information from children. If you believe a child has provided us information, contact us so we can delete it.
              </p>
            </Section>

            <Section title="10. International Users">
              <p>
                Our Services are operated from the United States. If you access them from outside the U.S., your information may be transferred to and processed in the U.S., which may have different data protection laws than your country.
              </p>
            </Section>

            <Section title="11. External Links">
              <p>
                Our website may contain links to external websites. We are not responsible for the privacy practices of those websites. Review their policies before providing any information.
              </p>
            </Section>

            <Section title="12. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. The "Last updated" date at the top reflects the most recent revision. Material changes will be communicated through the Services or by email where appropriate.
              </p>
            </Section>

            <Section title="13. Contact Us">
              <p>
                Questions about this Privacy Policy or our data practices? Contact us at{" "}
                <a className="text-accent underline" href={SITE.emailHref}>{SITE.email}</a>
                .
              </p>
              <p>
                You can also contact us by mail at {SITE.address}.
              </p>
            </Section>
          </article>
        </div>
      </section>
    </SiteLayout>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section>
    <h2 className="font-display text-xl md:text-2xl font-bold text-primary">{title}</h2>
    <div className="mt-3 space-y-3 text-base text-foreground [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul_li]:text-foreground [&_p]:text-foreground [&_strong]:text-primary">
      {children}
    </div>
  </section>
);

export default PrivacyPolicyPage;
