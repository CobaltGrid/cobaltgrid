import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => {
  return (
    <Layout>
      <SEO title="Privacy Policy" />
      <div className="container pt-4">
        <h1 className="text-cobalt-mud">Privacy Policy</h1>
        <p>
          It is our policy to respect your privacy regarding any information we
          may collect during the use of this website and other Cobalt Grid
          Services provided for general consumption. Accordingly, we have
          developed this privacy policy to help you to understand how we
          collect, use, communicate, disclose and otherwise make use of personal
          information when using our Services. This policy sets out how we will
          process any personal data we collect from you, or which you provide to
          us, in the course of using our Services.
        </p>
        <section>
          <h2 className="text-cobalt-bright">Summary</h2>
          <p>
            Although we recommend you read this policy in full, here is a
            summary of the key points:
          </p>
          <ul className="list-disc pl-4 space-y-2">
            <li>
              We will collect personal information by lawful and fair means and,
              where appropriate, with the knowledge or consent of the individual
              concerned.
            </li>
            <li>
              Before or at the time of collecting personal information, we will
              identify the purposes for which information is being collected.
            </li>
            <li>
              We will collect and use personal information solely for fulfilling
              those purposes specified by us and for other ancillary purposes,
              unless we obtain the consent of the individual concerned or as
              required by law.
            </li>
            <li>
              Personal data should be relevant to the purposes for which it is
              to be used, and, to the extent necessary for those purposes,
              should be accurate, complete, and up-to-date.
            </li>
            <li>
              We will protect personal information by using reasonable security
              safeguards against loss or theft, as well as unauthorized access,
              disclosure, copying, use or modification.
            </li>
            <li>
              We will make readily available to customers information about our
              policies and practices relating to the management of personal
              information.
            </li>
            <li>
              We will only retain personal information for as long as necessary
              for the fulfilment of those purposes.
            </li>
            <li>
              Our application is not addressed to anyone under the age of 13
              (“children”). As such, we do not knowingly collect any personal
              information of children.
            </li>
            <li>
              Personal data collected may be used for aggregated, anonymised
              digital analytics.
            </li>
          </ul>
        </section>
        <section className="mt-4">
          <h2 className="text-cobalt-bright">Types of Data Collected</h2>
          <p>
            When you visit or use our services we may automatically collect data
            from you, or you might voluntarily provide us with data. Typically,
            we might collect:
          </p>
          <ul className="list-disc pl-4 space-y-2">
            <li>
              Your name, email or other personal data when you provide it in a
              contact form
            </li>
            <li>
              Your connection information (such as your ISP, your IP Address and
              your browser / hardware information)
            </li>
            <li>
              Any referring or exit pages when arriving / leaving our services
            </li>
            <li>Your login information</li>
            <li>The timestamp of your interaction</li>
            <li>
              Information on when you open emails from us using "clear pixel"
              images
            </li>
          </ul>
        </section>
        <section className="mt-4">
          <h2 className="text-cobalt-bright">How we use your data</h2>
          <p>We might use your data and information to:</p>
          <ul className="list-disc pl-4 space-y-2">
            <li>Get in-touch about a contact form submission</li>
            <li>
              To personalise your experience (such as optimising content for you
              and your device)
            </li>
            <li>To diagnose or fix issues you may encounter</li>
            <li>To fulfil contractual obligations with you</li>
            <li>
              Analyse trends and traffic to our services using large, anonymised
              datasets
            </li>
            <li>Help improve our services</li>
          </ul>
        </section>
        <section className="mt-4">
          <h2 className="text-cobalt-bright">How we store your data</h2>
          <p>
            Data storage methods will vary between our services, but personal
            data may be stored locally on your device (such as via a cookie) or
            on a Cobalt Grid operated server machine. At all times we seek to
            take the necessary precautions to safeguard your data. This includes
            encrypting data sent from us to you and vice versa through methods
            such as Secure Socket Layer (SSL) end-to-end encryption, as well as
            encrypting information such as passwords at a storage level.
          </p>
          <p>
            Typically, any information or data your provide to us it stored on a
            UK-based server. However, it is possible that data we collect may be
            transferred to, processed and/or stored at a destination outside the
            European Economic Area. By providing us with personal data, you
            understand and agree too this.
          </p>
          <p>
            No services covered by this privacy policy are intended for use by
            anyone under the age of 13. Additionally, Cobalt Grid does not
            knowingly collect or solicit personally identifiable information
            from anyone under the age of 13. If you are under this age, you must
            not attempt to send any information about yourself to us.
          </p>
          <p>
            In the event of a data breach, we will ascertain which users,
            services and data were compromised. Where we hold contact
            information for an affected user, we will seek to make direct,
            two-way contact with the user within 7 days of discovery detailing
            how the breach might affect them and where possible which data was
            compromised.
          </p>
        </section>
        <section className="mt-4">
          <h2 className="text-cobalt-bright">Third Party Access</h2>
          <p>
            Cobalt Grid understands it's obligations to keep it's users data
            safe and secure. As such, we limit third party access to our data as
            much as possible.
          </p>
          <p>
            Our services may contain links to other third party websites. This
            policy only applies to information collected by Cobalt Grid, and we
            are not responsible for the privacy or data collection practices of
            any other website or service.
          </p>
          <p>
            To accomplish our legitimate interest with data we collect as
            defined above, we may utilise third party services to process data
            on our behalf. This is currently limited to the use of Google
            Analytics, who provide anonymised internet traffic data analytics
            services.
          </p>
          <p>Cobalt Grid does not, and never will, sell any personal data.</p>
        </section>
        <section className="mt-4">
          <h2 className="text-cobalt-bright">Access to personal data</h2>
          <p>
            Under GDPR, you have the right to access and amend any of your
            personal data that Cobalt Grid holds. For example, this could be
            data relating to your blog subscription or photos you may have
            uploaded to our Services. Some of this may be able to be done by
            utilising a “profile” page, account configuration page or an email
            opt-out link. You are entitled to view, amend or delete such
            personal information. You can send your request to us by filling out
            the contact form on our{" "}
            <Link to="/contact" className="text-cobalt-primary font-semibold">
              Contact Us
            </Link>{" "}
            page or by emailing
            &#115;upport&#64;cobalt&#103;r&#105;d&#46;c&#111;m.
          </p>
        </section>
        <section className="mt-4">
          <h2 className="text-cobalt-bright">Changes to this policy</h2>
          <p>
            We aim to review this policy in-detail each year to ensure it is fit
            for purpose. Occasionally, we may need to add or subtract
            information to/from it to represent changes to Services and/or
            regulations. These changes will be included here in this digital
            privacy policy, and where necessary a notice of changes will be
            circulated via any available digital communication method (i.e web
            notification or email). Any queries or concerns regarding this
            policy can be made in confidence through our{" "}
            <Link to="/contact" className="text-cobalt-primary font-semibold">
              Contact Us
            </Link>{" "}
            page or by emailing
            &#115;upport&#64;cobalt&#103;r&#105;d&#46;c&#111;m. We aim to
            respond within 7 working days to all communications.
          </p>
        </section>
      </div>
    </Layout>
  )
}
