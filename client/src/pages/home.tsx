import { useState } from "react";
import { Link } from "wouter";
import { Database, Users, ArrowRight, Scale, Briefcase, UserCog, Code, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedLogo from "@/components/animated-logo";
import { ContactFormDialog } from "@/components/contact-form-dialog";

// Customize the logo text here (adjust capitalization as needed)
const LOGO_TEXT = "NaTiVE lEgal";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-futura-bg">
      {/* Subtle background glow */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full glow-mint" />
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full glow-blue" />
      </div>

      {/* ========================================
          HEADER
      ======================================== */}
      <header className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <Link 
              href="/" 
              className="flex items-center gap-2"
              data-testid="link-logo"
            >
              <AnimatedLogo size="sm" />
              <span className="text-white text-xl font-bold tracking-wide" style={{ fontFamily: 'var(--font-karl)' }}>{LOGO_TEXT}</span>
            </Link>
            <nav className="flex items-center gap-6 flex-wrap">
              <Link 
                href="/" 
                className="text-white text-sm transition-colors"
                data-testid="link-home"
              >
                Home
              </Link>
              <Link 
                href="/revenue-operations" 
                className="text-futura-text-secondary text-sm transition-colors hover:text-white"
                data-testid="link-revenue-operations"
              >
                RevOps
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

      {/* ========================================
          HERO SECTION
      ======================================== */}
      <section className="relative z-10 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              {/* Accent Line */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-1 bg-parchment rounded-full" />
                <span className="text-futura-text text-sm font-medium uppercase tracking-widest">Revenue Optimization & AI Readiness</span>
              </div>

              {/* Main Headline */}
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8 text-white text-left"
                style={{ fontFamily: 'var(--font-karl)' }}
                data-testid="text-headline"
              >
                modErn Tools<br />
                <span className="relative inline-block text-parchment">
                  <span className="absolute inset-0 bg-parchment/20 -skew-x-3 -rotate-1 scale-x-105 rounded-sm" aria-hidden="true" />
                  <span className="relative">For laW fIrms</span>
                </span>
              </h1>
              
              <p 
                className="text-base leading-relaxed mb-10 max-w-xl"
                data-testid="text-hero-description"
              >
                <span className="text-futura-text-secondary">Future-proof your business with thoughtful change management. Evolve your practice with </span>
                <span className="text-white font-semibold">powerful data and intelligent automation.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex items-center gap-4 flex-wrap">
                <Button 
                  size="lg"
                  className="bg-parchment text-futura-bg font-semibold rounded-sm px-8"
                  data-testid="button-cta-primary"
                  onClick={() => setContactOpen(true)}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-futura-border text-white rounded-sm"
                  data-testid="button-cta-secondary"
                >
                  Learn More
                </Button>
              </div>
              
              <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />
            </div>

            {/* Right Visual Element */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                {/* Abstract visual representation - scales of justice theme */}
                <div className="flex gap-6">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-24 h-32 border-2 border-futura-border rounded-sm flex items-end justify-center pb-4 bg-futura-card">
                      <Scale className="w-8 h-8 text-parchment" />
                    </div>
                    <span className="text-futura-text text-xs font-medium uppercase tracking-wider">Systems</span>
                  </div>
                  <div className="flex flex-col items-center gap-4 -mt-8">
                    <div className="w-24 h-40 border-2 border-futura-border rounded-sm flex items-end justify-center pb-4 bg-futura-card">
                      <Users className="w-8 h-8 text-parchment" />
                    </div>
                    <span className="text-futura-text text-xs font-medium uppercase tracking-wider">People</span>
                  </div>
                  <div className="flex flex-col items-center gap-4 -mt-4">
                    <div className="w-24 h-36 border-2 border-futura-border rounded-sm flex items-end justify-center pb-4 bg-futura-card">
                      <Database className="w-8 h-8 text-parchment" />
                    </div>
                    <span className="text-futura-text text-xs font-medium uppercase tracking-wider">Data</span>
                  </div>
                </div>
                {/* Connecting lines */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-futura-border to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          SERVICES SHOWCASE SECTION
      ======================================== */}
      <section className="relative z-10 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-left mb-16">
            <p className="text-parchment text-xs font-medium uppercase tracking-widest mb-4" data-testid="text-services-label">
              What We Do
            </p>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
              style={{ fontFamily: 'var(--font-karl)' }}
              data-testid="text-services-headline"
            >
              scalE rEVEnUE<br />
              <span className="relative inline-block text-parchment">
                <span className="absolute inset-0 bg-parchment/20 -skew-x-3 -rotate-1 scale-x-105 rounded-sm" aria-hidden="true" />
                <span className="relative">noT oVErhEad</span>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="grid-services-showcase">
            {/* Service 1: Revenue Operations */}
            <Link 
              href="/revenue-operations"
              className="p-6 bg-parchment shadow-lg hover:shadow-xl transition-all group block rotate-1 hover:rotate-0"
              style={{ fontFamily: 'Caveat, cursive' }}
              data-testid="card-service-showcase-0"
            >
              <div className="w-10 h-10 bg-futura-bg/10 rounded-full flex items-center justify-center mb-3">
                <Briefcase className="w-5 h-5 text-futura-bg" />
              </div>
              <h3 className="text-2xl font-semibold text-futura-bg mb-2">Revenue Operations</h3>
              <p className="text-futura-bg/80 text-lg leading-relaxed">Evolve your intake, marketing, recruiting, and service strategy with a modern CRM that understands and streamlines your business.</p>
              <div className="mt-4 flex items-center text-futura-bg text-lg font-medium">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Service 3: Custom Software */}
            <Link 
              href="/custom-software"
              className="p-6 bg-parchment shadow-lg hover:shadow-xl transition-all group block rotate-2 hover:rotate-0"
              style={{ fontFamily: 'Caveat, cursive' }}
              data-testid="card-service-showcase-2"
            >
              <div className="w-10 h-10 bg-futura-bg/10 rounded-full flex items-center justify-center mb-3">
                <Code className="w-5 h-5 text-futura-bg" />
              </div>
              <h3 className="text-2xl font-semibold text-futura-bg mb-2">Custom Software</h3>
              <p className="text-futura-bg/80 text-lg leading-relaxed">Bring your IP and ideas to life with our rapid prototyping. Build software for your practice that you own outright.</p>
              <div className="mt-4 flex items-center text-futura-bg text-lg font-medium">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Service 4: AI Readiness */}
            <Link 
              href="/ai-readiness"
              className="p-6 bg-parchment shadow-lg hover:shadow-xl transition-all group block -rotate-2 hover:rotate-0"
              style={{ fontFamily: 'Caveat, cursive' }}
              data-testid="card-service-showcase-3"
            >
              <div className="w-10 h-10 bg-futura-bg/10 rounded-full flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5 text-futura-bg" />
              </div>
              <h3 className="text-2xl font-semibold text-futura-bg mb-2">AI Readiness</h3>
              <p className="text-futura-bg/80 text-lg leading-relaxed">Secure your competitive edge with strong foundations and alignment at the nexus of people, data, and systems.</p>
              <div className="mt-4 flex items-center text-futura-bg text-lg font-medium">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          CASE STUDIES SECTION
      ======================================== */}
      <section id="case-studies" className="relative z-10 py-20 lg:py-24 bg-gradient-to-b from-futura-bg to-futura-card/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-left mb-12">
            <p className="text-parchment text-xs font-medium uppercase tracking-widest mb-4" data-testid="text-case-studies-label">
              Case Studies
            </p>
            <h2 
              className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-karl)' }}
              data-testid="text-case-studies-headline"
            >
              rEAl rEsUlTs<br />
              <span className="relative inline-block text-parchment">
                <span className="absolute inset-0 bg-parchment/20 -skew-x-3 -rotate-1 scale-x-105 rounded-sm" aria-hidden="true" />
                <span className="relative">From rEAl FIrms</span>
              </span>
            </h2>
            <p className="text-futura-text-secondary text-lg max-w-2xl">
              See how family law firms are transforming their practice with AI-native tools.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="grid-case-studies">
            {/* Case Study 1 */}
            <div
              className="bg-futura-card border border-futura-border rounded-sm p-6 hover-elevate transition-all group"
              data-testid="card-case-study-0"
            >
              <p className="text-xs font-medium uppercase tracking-widest mb-3 text-parchment">
                Streamline Intake
              </p>
              <h3 className="text-lg font-semibold text-white mb-3">
                Improved lead conversion by 42%
              </h3>
              <p className="text-futura-text-secondary text-sm leading-relaxed">
                Get to your leads quicker and always follow through by automating the boring stuff; conflict checks, email notifications, reminders, and lead creation.
              </p>
            </div>

            {/* Case Study 2 */}
            <div
              className="bg-futura-card border border-futura-border rounded-sm p-6 hover-elevate transition-all group"
              data-testid="card-case-study-1"
            >
              <p className="text-xs font-medium uppercase tracking-widest mb-3 text-parchment">
                Revenue Optimization
              </p>
              <h3 className="text-lg font-semibold text-white mb-3">
                Increased topline revenue by 96%
              </h3>
              <p className="text-futura-text-secondary text-sm leading-relaxed">
                Transformed the revenue engine of a prominent CA law firm, increasing year over year retainer values by 95.6% and a seven figure increase in topline revenue.
              </p>
            </div>

            {/* Case Study 3 */}
            <div
              className="bg-futura-card border border-futura-border rounded-sm p-6 hover-elevate transition-all group"
              data-testid="card-case-study-2"
            >
              <p className="text-xs font-medium uppercase tracking-widest mb-3 text-parchment">
                Performance Marketing
              </p>
              <h3 className="text-lg font-semibold text-white mb-3">
                Transformed ROI by over 300%
              </h3>
              <p className="text-futura-text-secondary text-sm leading-relaxed">
                Our team has managed millions in advertising spend in the legal category, transforming ROI for clients by over 300%
              </p>
            </div>

            {/* Case Study 4 */}
            <div
              className="bg-futura-card border border-futura-border rounded-sm p-6 hover-elevate transition-all group"
              data-testid="card-case-study-5"
            >
              <p className="text-xs font-medium uppercase tracking-widest mb-3 text-parchment">
                Recruiting
              </p>
              <h3 className="text-lg font-semibold text-white mb-3">
                Hired over 1,000 attorneys for {"<"}25% of industry standard
              </h3>
              <p className="text-futura-text-secondary text-sm leading-relaxed">
                Leverage deep industry expertise and the right tools to help you make right hires for the right price. Never pay 20% of their salary again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          CALL TO ACTION
      ======================================== */}
      <section className="relative z-10 py-24" data-testid="section-cta">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-karl)' }}>
            rEady To FUTUrE-proof yoUr FIrm?
          </h2>
          <p className="text-futura-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Let's talk about how we can help you build the operational foundations that AI depends on.
          </p>
          <Button 
            size="lg" 
            className="bg-parchment text-futura-bg font-semibold" 
            data-testid="button-cta-contact"
            onClick={() => setContactOpen(true)}
          >
            Schedule a Conversation
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* ========================================
          FOOTER
      ======================================== */}
      <footer className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-2" data-testid="link-footer-logo">
              <AnimatedLogo size="sm" />
              <span className="text-white text-xl font-bold tracking-wide" style={{ fontFamily: 'var(--font-karl)' }}>{LOGO_TEXT}</span>
            </Link>
            <div className="flex items-center gap-6 flex-wrap">
              <Link href="/privacy" className="text-futura-text-secondary text-sm transition-colors hover:text-white">Privacy Policy</Link>
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
