export default function Privacy() {
  return (
    <div className="min-h-screen bg-brutal-bg text-brutal-text">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <a 
          href="/" 
          className="text-mint text-sm mb-8 inline-block hover:underline"
          data-testid="link-back-home"
        >
          ← Back to Home
        </a>
        
        <h1 className="text-4xl font-bold mb-8" data-testid="text-privacy-title">Privacy Policy</h1>
        
        <p className="text-brutal-text-secondary mb-8">
          Last Updated: December 18, 2025
        </p>

        <div className="space-y-8 text-brutal-text-secondary">
          <section>
            <h2 className="text-2xl font-semibold text-brutal-text mb-4">Introduction</h2>
            <p>
              Harp and Quill LLC ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brutal-text mb-4">Information We Collect</h2>
            <p className="mb-4">We may collect information about you in a variety of ways, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact information you voluntarily provide when contacting us or signing up for our services.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, operating system, pages viewed, and the dates/times of your visits.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> We may use cookies, web beacons, and similar technologies to collect information about your browsing activities.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brutal-text mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain our website and services</li>
              <li>Respond to your inquiries and fulfill your requests</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brutal-text mb-4">California Privacy Rights (CCPA/CPRA)</h2>
            <p className="mb-4">
              If you are a California resident, you have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA):
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to Know:</strong> You have the right to request information about the categories and specific pieces of personal information we have collected about you, as well as the categories of sources from which such information is collected, the purpose for collecting such information, and the categories of third parties with whom we share such information.</li>
              <li><strong>Right to Delete:</strong> You have the right to request the deletion of your personal information, subject to certain exceptions.</li>
              <li><strong>Right to Correct:</strong> You have the right to request that we correct inaccurate personal information that we maintain about you.</li>
              <li><strong>Right to Opt-Out of Sale/Sharing:</strong> You have the right to opt-out of the sale or sharing of your personal information. We do not sell your personal information.</li>
              <li><strong>Right to Limit Use of Sensitive Personal Information:</strong> You have the right to limit the use and disclosure of sensitive personal information.</li>
              <li><strong>Right to Non-Discrimination:</strong> You have the right not to be discriminated against for exercising any of your privacy rights.</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at the information provided below. We will respond to your request within 45 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brutal-text mb-4">Do Not Track Signals</h2>
            <p>
              Some browsers have a "Do Not Track" feature that signals to websites that you do not want to have your online activity tracked. We currently do not respond to "Do Not Track" signals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brutal-text mb-4">Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brutal-text mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brutal-text mb-4">Third-Party Services</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brutal-text mb-4">Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16, we will take steps to delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brutal-text mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brutal-text mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us at:
            </p>
            <div className="mt-4">
              <p><strong>Harp and Quill LLC</strong></p>
              <p>Email: privacy@harpandquill.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
