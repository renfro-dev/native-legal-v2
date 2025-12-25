import { Link } from "wouter";
import AnimatedLogo from "@/components/animated-logo";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-futura-bg">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full glow-amber opacity-20" />
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full glow-copper opacity-15" />
      </div>

      <header className="relative z-10 border-b border-futura-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <Link 
              href="/" 
              className="flex items-center gap-2"
              data-testid="link-logo"
            >
              <AnimatedLogo size="sm" />
              <span className="text-white text-xl font-bold tracking-wide" style={{ fontFamily: 'var(--font-karl)' }}>Native Legal</span>
            </Link>
            <nav className="flex items-center gap-6 flex-wrap">
              <Link 
                href="/" 
                className="text-futura-text-secondary text-sm transition-colors hover:text-white"
                data-testid="link-home"
              >
                Home
              </Link>
              <Link 
                href="/custom-software" 
                className="text-futura-text-secondary text-sm transition-colors hover:text-white"
                data-testid="link-custom-software"
              >
                Custom Software
              </Link>
              <Link 
                href="/ai-readiness" 
                className="text-futura-text-secondary text-sm transition-colors hover:text-white"
                data-testid="link-ai-readiness"
              >
                AI Readiness
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <h1 
          className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight"
          style={{ fontFamily: 'var(--font-karl)' }}
          data-testid="text-privacy-title"
        >
          Privacy Policy
        </h1>
        
        <p className="text-futura-text-secondary mb-8">
          Last Updated: December 18, 2025
        </p>

        <div className="space-y-8 text-futura-text-secondary">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: 'var(--font-karl)' }}>Introduction</h2>
            <p>
              Native Legal LLC ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: 'var(--font-karl)' }}>Information We Collect</h2>
            <p className="mb-4">We may collect information about you in a variety of ways, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Personal Data:</strong> Name, email address, phone number, and other contact information you voluntarily provide when contacting us or signing up for our services.</li>
              <li><strong className="text-white">Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, operating system, pages viewed, and the dates/times of your visits.</li>
              <li><strong className="text-white">Cookies and Tracking Technologies:</strong> We may use cookies, web beacons, and similar technologies to collect information about your browsing activities.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: 'var(--font-karl)' }}>How We Use Your Information</h2>
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
            <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: 'var(--font-karl)' }}>California Privacy Rights (CCPA/CPRA)</h2>
            <p className="mb-4">
              If you are a California resident, you have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA):
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Right to Know:</strong> You have the right to request information about the categories and specific pieces of personal information we have collected about you, as well as the categories of sources from which such information is collected, the purpose for collecting such information, and the categories of third parties with whom we share such information.</li>
              <li><strong className="text-white">Right to Delete:</strong> You have the right to request the deletion of your personal information, subject to certain exceptions.</li>
              <li><strong className="text-white">Right to Correct:</strong> You have the right to request that we correct inaccurate personal information that we maintain about you.</li>
              <li><strong className="text-white">Right to Opt-Out of Sale/Sharing:</strong> You have the right to opt-out of the sale or sharing of your personal information. We do not sell your personal information.</li>
              <li><strong className="text-white">Right to Limit Use of Sensitive Personal Information:</strong> You have the right to limit the use and disclosure of sensitive personal information.</li>
              <li><strong className="text-white">Right to Non-Discrimination:</strong> You have the right not to be discriminated against for exercising any of your privacy rights.</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at the information provided below. We will respond to your request within 45 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: 'var(--font-karl)' }}>Do Not Track Signals</h2>
            <p>
              Some browsers have a "Do Not Track" feature that signals to websites that you do not want to have your online activity tracked. We currently do not respond to "Do Not Track" signals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: 'var(--font-karl)' }}>Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: 'var(--font-karl)' }}>Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: 'var(--font-karl)' }}>Third-Party Services</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: 'var(--font-karl)' }}>Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16, we will take steps to delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: 'var(--font-karl)' }}>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: 'var(--font-karl)' }}>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us at:
            </p>
            <div className="mt-4">
              <p><strong className="text-white">Native Legal LLC</strong></p>
              <p>Email: privacy@nativelegal.io</p>
            </div>
          </section>
        </div>
      </div>

      <footer className="relative z-10 border-t border-futura-border py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-2" data-testid="link-footer-logo">
              <AnimatedLogo size="sm" />
              <span className="text-white text-xl font-bold tracking-wide" style={{ fontFamily: 'var(--font-karl)' }}>Native Legal</span>
            </Link>
            <div className="flex items-center gap-6 flex-wrap">
              <Link href="/privacy" className="text-white text-sm transition-colors">Privacy Policy</Link>
              <p className="text-futura-text-secondary text-sm" data-testid="text-copyright">
                © 2025 Native Legal LLC. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
