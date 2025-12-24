import { Link } from "wouter";
import { Database, Users, ArrowRight, Scale, Briefcase, UserCog, Code, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedLogo from "@/components/animated-logo";

// Customize the logo text here (adjust capitalization as needed)
const LOGO_TEXT = "NaTiVE lEgal";

export default function Home() {
  return (
    <div className="min-h-screen bg-futura-bg">
      {/* Subtle background glow */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full glow-amber opacity-20" />
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full glow-copper opacity-15" />
      </div>

      {/* ========================================
          HEADER
      ======================================== */}
      <header className="relative z-10 border-b border-futura-border">
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
                href="/legal-admin-revops" 
                className="text-futura-text-secondary text-sm transition-colors hover:text-white"
                data-testid="link-legal-admin-revops"
              >
                Legal Admin & Intake
              </Link>
              <Link 
                href="/executive-assistants" 
                className="text-futura-text-secondary text-sm transition-colors hover:text-white"
                data-testid="link-executive-assistants"
              >
                Executive Assistants
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
      <section className="relative z-10 py-20 lg:py-24 border-t border-futura-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-left mb-16">
            <p className="text-parchment text-xs font-medium uppercase tracking-widest mb-4" data-testid="text-services-label">
              What We Do
            </p>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
              data-testid="text-services-headline"
            >
              Scale Revenues<br />
              <span className="relative inline-block text-parchment">
                <span className="absolute inset-0 bg-parchment/20 -skew-x-3 -rotate-1 scale-x-105 rounded-sm" aria-hidden="true" />
                <span className="relative">Not Overhead</span>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="grid-services-showcase">
            {/* Service 1: Legal Admin & RevOps */}
            <Link 
              href="/legal-admin-revops"
              className="p-6 bg-parchment shadow-lg hover:shadow-xl transition-all group block rotate-1 hover:rotate-0"
              style={{ fontFamily: 'Caveat, cursive' }}
              data-testid="card-service-showcase-0"
            >
              <div className="w-10 h-10 bg-futura-bg/10 rounded-full flex items-center justify-center mb-3">
                <Briefcase className="w-5 h-5 text-futura-bg" />
              </div>
              <h3 className="text-2xl font-semibold text-futura-bg mb-2">Revenue Operations</h3>
              <p className="text-futura-bg/80 text-lg leading-relaxed">Evolve your intake and service strategy with a modern CRM that understands and streamlines your business.</p>
              <div className="mt-4 flex items-center text-futura-bg text-lg font-medium">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Service 2: Executive Assistants */}
            <Link 
              href="/executive-assistants"
              className="p-6 bg-parchment shadow-lg hover:shadow-xl transition-all group block -rotate-1 hover:rotate-0"
              style={{ fontFamily: 'Caveat, cursive' }}
              data-testid="card-service-showcase-1"
            >
              <div className="w-10 h-10 bg-futura-bg/10 rounded-full flex items-center justify-center mb-3">
                <UserCog className="w-5 h-5 text-futura-bg" />
              </div>
              <h3 className="text-2xl font-semibold text-futura-bg mb-2">Strategic Initiatives</h3>
              <p className="text-futura-bg/80 text-lg leading-relaxed">Drive strategic initiatives forward without losing focus. We own discovery with minimal business intervention.</p>
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
              <p className="text-futura-bg/80 text-lg leading-relaxed">Bring your IP to life with our inexpensive rapid prototyping. Build software for your practice that you own outright.</p>
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

            {/* Service 5: Growth Marketing */}
            <div 
              className="p-6 bg-parchment shadow-lg hover:shadow-xl transition-all group block rotate-1 hover:rotate-0"
              style={{ fontFamily: 'Caveat, cursive' }}
              data-testid="card-service-showcase-4"
            >
              <div className="w-10 h-10 bg-futura-bg/10 rounded-full flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5 text-futura-bg" />
              </div>
              <h3 className="text-2xl font-semibold text-futura-bg mb-2">Growth Marketing</h3>
              <p className="text-futura-bg/80 text-lg leading-relaxed">Future-proof your growth with a cost effective local and LLM search strategy. Pay for ads when you need to buy momentum.</p>
            </div>

            {/* Service 6: Recruiting */}
            <div 
              className="p-6 bg-parchment shadow-lg hover:shadow-xl transition-all group block -rotate-1 hover:rotate-0"
              style={{ fontFamily: 'Caveat, cursive' }}
              data-testid="card-service-showcase-5"
            >
              <div className="w-10 h-10 bg-futura-bg/10 rounded-full flex items-center justify-center mb-3">
                <Users className="w-5 h-5 text-futura-bg" />
              </div>
              <h3 className="text-2xl font-semibold text-futura-bg mb-2">Recruiting</h3>
              <p className="text-futura-bg/80 text-lg leading-relaxed">Put your recruiting on auto-pilot and start growing where you need it most.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          CASE STUDIES SECTION
      ======================================== */}
      <section id="case-studies" className="relative z-10 py-20 lg:py-24 border-t border-futura-border/50 bg-gradient-to-b from-futura-bg to-futura-card/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-left mb-12">
            <p className="text-parchment text-xs font-medium uppercase tracking-widest mb-4" data-testid="text-case-studies-label">
              Case Studies
            </p>
            <h2 
              className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4"
              data-testid="text-case-studies-headline"
            >
              Real results<br />
              <span className="relative inline-block text-parchment">
                <span className="absolute inset-0 bg-parchment/20 -skew-x-3 -rotate-1 scale-x-105 rounded-sm" aria-hidden="true" />
                <span className="relative">from real firms</span>
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
                Improved lead converion by 42%
              </h3>
              <p className="text-futura-text-secondary text-sm leading-relaxed">
                Built a custom CRM that automates conflict checks, client communications, streamlines admin tasks, simplifies retainer agreements, and gives full visibility into business health
              </p>
            </div>

            {/* Case Study 2 */}
            <div
              className="bg-futura-card border border-futura-border rounded-sm p-6 hover-elevate transition-all group"
              data-testid="card-case-study-1"
            >
              <p className="text-xs font-medium uppercase tracking-widest mb-3 text-parchment">
                Rapid Prototyping
              </p>
              <h3 className="text-lg font-semibold text-white mb-3">
                Rethink resource guides
              </h3>
              <p className="text-futura-text-secondary text-sm leading-relaxed">
                A family law firm with four offices and over 100 staff transformed a 40+ slide powerpoint into one interactive asset
              </p>
            </div>

            {/* Case Study 3 */}
            <div
              className="bg-futura-card border border-futura-border rounded-sm p-6 hover-elevate transition-all group"
              data-testid="card-case-study-2"
            >
              <p className="text-xs font-medium uppercase tracking-widest mb-3 text-parchment">
                Reporting Dashboards
              </p>
              <h3 className="text-lg font-semibold text-white mb-3">
                A birds eye view of your business
              </h3>
              <p className="text-futura-text-secondary text-sm leading-relaxed">
                Eliminated manual data entry and created business intelligence to enable strategic decision making and resource allocation
              </p>
            </div>

            {/* Case Study 4 */}
            <div
              className="bg-futura-card border border-futura-border rounded-sm p-6 hover-elevate transition-all group"
              data-testid="card-case-study-3"
            >
              <p className="text-xs font-medium uppercase tracking-widest mb-3 text-parchment">
                Software Development
              </p>
              <h3 className="text-lg font-semibold text-white mb-3">
                Automated Prenuptial Agreements
              </h3>
              <p className="text-futura-text-secondary text-sm leading-relaxed">
                Built a custom tool that allows consumers to draft their own prenuptial agreements, providing attorneys with lower cost leads with intake already completed
              </p>
            </div>

            {/* Case Study 5 */}
            <div
              className="bg-futura-card border border-futura-border rounded-sm p-6 hover-elevate transition-all group"
              data-testid="card-case-study-4"
            >
              <p className="text-xs font-medium uppercase tracking-widest mb-3 text-parchment">
                Simplify Document Collection
              </p>
              <h3 className="text-lg font-semibold text-white mb-3">
                Scale your paralegal team
              </h3>
              <p className="text-futura-text-secondary text-sm leading-relaxed">
                Make document collection an afterthought so your paralegals can spend their time on value generating activities
              </p>
            </div>

            {/* Case Study 6 */}
            <div
              className="bg-futura-card border border-futura-border rounded-sm p-6 hover-elevate transition-all group"
              data-testid="card-case-study-5"
            >
              <p className="text-xs font-medium uppercase tracking-widest mb-3 text-parchment">
                Recruiting
              </p>
              <h3 className="text-lg font-semibold text-white mb-3">
                Transform your recruiting department
              </h3>
              <p className="text-futura-text-secondary text-sm leading-relaxed">
                Leverage deep industry expertise and the right tools to help you make right hires for an AI-forward future
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          FOOTER
      ======================================== */}
      <footer className="relative z-10 border-t border-futura-border py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <Link href="/" className="text-white font-bold text-xl tracking-tight">
              Native Legal
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
