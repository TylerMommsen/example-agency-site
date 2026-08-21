import SiteLayout from "@/components/layout/SiteLayout";
import { SITE } from "@/config/site";

const LAST_UPDATED = "May 13, 2026";

const TermsPage = () => {
  return (
    <SiteLayout hideUniversalSections>

      {/* HERO */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-wide py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Legal</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold">Terms &amp; Conditions</h1>
          <p className="mt-3 text-sm text-primary-foreground/75">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* BODY */}
      <section className="section-y bg-background">
        <div className="container-tight">
          <article className="space-y-8 text-base md:text-lg text-foreground">
            <p className="text-muted-foreground">
              These Terms &amp; Conditions ("Terms") govern your access to and use of the website, content, products, and services (the "Services") offered by {SITE.name} ("BuildFlow," "we," "us," or "our"). By accessing the Services or signing up for any BuildFlow offering, you agree to these Terms. If you do not agree, do not use the Services.
            </p>

            <Section title="1. Acceptance of Terms">
              <p>
                By using the Services, you represent that you are at least 18 years old, have the authority to bind your business to these Terms, and agree to comply with all applicable laws.
              </p>
            </Section>

            <Section title="2. Description of Services">
              <p>
                BuildFlow provides website development, AI-powered lead automation, business phone setup, local SEO, review management, and related services for US contractors. Specific deliverables and pricing are described during onboarding and on individual order documents.
              </p>
            </Section>

            <Section title="3. SMS Messaging Program">
              <p>
                The BuildFlow SMS messaging program provides appointment reminders, service updates, lead follow-up, account notifications, and customer support messages related to our website, automation, phone, SEO, and contractor growth services.
              </p>
              <p>
                You can cancel the SMS service at any time. Just text "STOP" to {SITE.phoneDisplay}. After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again.
              </p>
              <p>
                If you are experiencing issues with the messaging program, you can reply with the keyword HELP for more assistance, or you can get help directly at{" "}
                <a className="text-accent underline" href="mailto:legal@yourdomain.com">legal@yourdomain.com</a>
                {" "}or {SITE.phoneDisplay}.
              </p>
              <p>Carriers are not liable for delayed or undelivered messages.</p>
              <p>
                As always, message and data rates may apply for any messages sent to you from us and to us from you. Message frequency varies. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.
              </p>
              <p>
                If you have any questions regarding privacy, please read our privacy policy:{" "}
                <a className="text-accent underline" href={`${SITE.domain}/privacy`}>{SITE.domain}/privacy</a>.
              </p>
              <p>
                We follow applicable industry standards for commercial text messaging, including consent, opt-out, help, and sender identification requirements. You agree to use the Services in compliance with applicable laws, carrier rules, and messaging program requirements.
              </p>
            </Section>

            <Section title="4. Eligibility &amp; Accounts">
              <p>
                You agree to provide accurate, current, and complete information when contacting us or signing up. You are responsible for maintaining the confidentiality of any account credentials and for all activity under your account.
              </p>
            </Section>

            <Section title="5. Fees, Billing &amp; Renewal">
              <p>
                {SITE.name} offers two month-to-month subscription plans: the Essentials plan, currently listed at $97 per month, and the Complete plan, currently listed at $297 per month. Different pricing, scope, or billing schedules may apply if stated in an accepted order, proposal, invoice, or written agreement.
              </p>
              <p>
                The Essentials plan generally includes a custom contractor website, mobile-optimized pages, on-page SEO basics, hosting, SSL, ongoing edits, and a contact form delivering leads to your email. The Complete plan includes everything in Essentials plus a dedicated tracked business phone number, automated AI lead follow-up by SMS, a review funnel system, missed-call text-back automation, re-marketing email and SMS campaigns, an all-in-one inbox, and dashboard access. Specific deliverables may vary based on your order, onboarding requirements, and the services we agree to provide.
              </p>
              <p>
                Subscription fees are billed in advance for the upcoming service period and automatically renew month to month until canceled. By subscribing, approving an order, or providing a payment method, you authorize {SITE.name} and its payment processor to charge your debit or credit card on a recurring basis for all applicable subscription fees, taxes, and approved charges.
              </p>
              <p>
                Payment is collected by debit or credit card through Stripe or another approved payment processor. You are responsible for keeping an active payment method on file and for promptly updating billing information if your card expires, is declined, or can no longer be charged.
              </p>
              <p>
                We may change pricing for future renewal periods with at least 14 days' notice, unless a different notice period is required by law or stated in your written agreement.
              </p>
            </Section>

            <Section title="6. Refunds, Chargebacks &amp; Cancellation">
              <p>
                All payments are final once made. Subscription fees, setup fees, and other amounts paid to {SITE.name} are non-refundable and non-creditable except where required by law or expressly agreed in writing by {SITE.name}. We do not provide prorated refunds for partial months, unused services, onboarding work, strategy work, platform setup, creative work, or completed deliverables.
              </p>
              <p>
                Chargebacks are not permitted for valid charges. If you believe a billing error occurred, you agree to contact us first at{" "}
                <a className="text-accent underline" href="mailto:legal@yourdomain.com">legal@yourdomain.com</a>
                {" "}so we can review and resolve the concern. You remain responsible for valid charges, collection costs, payment processor fees, and other costs we incur because of an improper chargeback or payment dispute.
              </p>
              <p>
                You may cancel your subscription at any time by giving written notice before your next billing date. Cancellation becomes effective on the next billing cycle, and no future subscription charges will be made beyond that point. Unless otherwise stated in writing, your access to active services may continue through the end of the service period already paid for.
              </p>
            </Section>

            <Section title="7. Failed Payments &amp; Suspension">
              <p>
                If a payment fails, we may attempt to process the payment up to four (4) times over a three-week period. If the balance remains unpaid within 48 hours after the first failed payment attempt, your account, platform access, automations, hosting, phone services, and related Services may be suspended until the outstanding balance is paid.
              </p>
              <p>
                Suspension does not waive any amounts owed and does not cancel your subscription unless {SITE.name} confirms cancellation in writing. You remain responsible for all unpaid balances, approved charges, and fees incurred before cancellation or suspension.
              </p>
            </Section>

            <Section title="8. Acceptable Use">
              <p>You agree not to:</p>
              <ul>
                <li>Use the Services for unlawful, harmful, fraudulent, or deceptive purposes.</li>
                <li>Send spam, unsolicited communications, or content that violates the Telephone Consumer Protection Act, CAN-SPAM, or similar laws.</li>
                <li>Reverse engineer, copy, or commercially redistribute the Services.</li>
                <li>Interfere with the security or integrity of the Services or any related systems.</li>
                <li>Upload content that infringes the rights of others.</li>
              </ul>
            </Section>

            <Section title="9. Intellectual Property">
              <p>
                We retain all right, title, and interest in the Services, including software, templates, designs, automations, and underlying technology. Subject to your payment of fees and compliance with these Terms, you receive a limited, non-exclusive, non-transferable license to use the deliverables for your own business. Content you provide remains yours; you grant us a license to use it solely to deliver the Services.
              </p>
            </Section>

            <Section title="10. No Guarantee of Results">
              <p>
                Marketing and lead-generation outcomes depend on many factors outside our control. We make no guarantee regarding rankings, lead volume, conversion rates, revenue, or any specific business outcome. Examples and case studies on our website reflect prior results that may not be typical.
              </p>
            </Section>

            <Section title="11. Provider Services">
              <p>
                The Services may rely on outside technology providers for hosting, communications, analytics, payments, calendar booking, automation, and related operations. Their availability, terms, and pricing may change. We are not responsible for outages, errors, interruptions, or changes in those platforms.
              </p>
            </Section>

            <Section title="12. Disclaimers">
              <p>
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR UNINTERRUPTED OPERATION. WE DO NOT WARRANT THAT THE SERVICES WILL BE ERROR-FREE OR SECURE.
              </p>
            </Section>

            <Section title="13. Limitation of Liability">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, {SITE.name.toUpperCase()} AND ITS OFFICERS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING FROM OR RELATED TO THE SERVICES. OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATED TO THESE TERMS WILL NOT EXCEED THE FEES YOU PAID TO US IN THE THREE (3) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
              </p>
            </Section>

            <Section title="14. Indemnification">
              <p>
                You agree to indemnify, defend, and hold harmless {SITE.name} from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or related to your use of the Services, your content, your violation of these Terms, or your violation of any law or rights of others.
              </p>
            </Section>

            <Section title="15. Termination">
              <p>
                We may suspend or terminate your access to the Services at any time for any reason, including non-payment, breach of these Terms, or harm to our business or other customers. Upon termination, your right to use the Services ends, but provisions intended to survive (including IP, disclaimers, limitation of liability, and indemnification) will continue in effect.
              </p>
            </Section>

            <Section title="16. Governing Law &amp; Venue">
              <p>
                These Terms are governed by the laws of the United States and the State in which {SITE.name} is headquartered, without regard to conflict-of-law principles. You agree to the exclusive jurisdiction and venue of the state and federal courts located in that State for any dispute.
              </p>
            </Section>

            <Section title="17. Dispute Resolution">
              <p>
                The parties will first attempt to resolve any dispute informally by contacting each other. If unresolved within 14 days, disputes will be resolved by binding arbitration on an individual basis (no class actions), except that either party may seek injunctive relief in court for intellectual property or confidentiality matters.
              </p>
            </Section>

            <Section title="18. Changes to These Terms">
              <p>
                We may update these Terms from time to time. The "Last updated" date reflects the most recent revision. Continued use of the Services after changes constitutes acceptance of the updated Terms.
              </p>
            </Section>

            <Section title="19. Entire Agreement">
              <p>
                These Terms, together with any order documents and our Privacy Policy, constitute the entire agreement between you and {SITE.name} regarding the Services and supersede all prior or contemporaneous agreements.
              </p>
            </Section>

            <Section title="20. Contact">
              <p>
                Questions about these Terms? Email us at{" "}
                <a className="text-accent underline" href="mailto:legal@yourdomain.com">legal@yourdomain.com</a>.
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
    <div className="mt-3 space-y-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_strong]:text-primary">
      {children}
    </div>
  </section>
);

export default TermsPage;
