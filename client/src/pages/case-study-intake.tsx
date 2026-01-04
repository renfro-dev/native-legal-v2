import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle, Target, Zap, BarChart3, Building2 } from "lucide-react";
import AnimatedLogo from "@/components/animated-logo";
import { ContactFormDialog } from "@/components/contact-form-dialog";

export default function CaseStudyIntake() {
  const [contactOpen, setContactOpen] = useState(false);

  const results = [
    { metric: ">200%", label: "Revenue per intake specialist" },
    { metric: "+42%", label: "Conversion rate on direct traffic" },
    { metric: ">300%", label: "Paid ads ROI improvement" },
  ];

  const deliverables = [
    "Automated lead creation from calls, voicemails, and web forms",
    "Voicemail transcription logged directly to the CRM",
    "Dynamic form routing based on matter type",
    "Automated conflict checks to remove intake bottlenecks",
    "Compliant call recording with centralized access",
    "Automated follow-up tasks for staff and prospects",
    "Consult confirmation workflows via email automation",
    "Personalized follow-ups based on why a prospect didn't move forward",
    "Marketing attribution tied directly to retained revenue",
  ];

  return (
    <div className="min-h-screen bg-futura-bg overflow-x-hidden">
      <div className="glow-mint" aria-hidden="true" />
      <div className="glow-blue" aria-hidden="true" />

      <header className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <Link 
              href="/" 
              className="flex items-center gap-2"
              data-testid="link-logo"
            >
              <AnimatedLogo size="sm" />
              <span className="text-white text-xl font-bold tracking-wide" style={{ fontFamily: 'var(--font-karl)' }}>NaTiVE lEgal</span>
            </Link>
            <nav className="flex items-center gap-6 flex-wrap" data-testid="nav-main">
              <Link 
                href="/" 
                className="text-futura-text-secondary text-sm transition-colors hover:text-white"
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

      <section className="relative z-10 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Link 
              href="/" 
              className="inline-flex items-center text-futura-text-secondary text-sm mb-8 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>

            <div className="flex items-center gap-3 mb-8">
              <div className="w-16 h-16 bg-futura-border rounded-sm flex items-center justify-center">
                <Target className="w-8 h-8 text-parchment" />
              </div>
              <div>
                <p className="text-parchment text-xs font-medium uppercase tracking-widest">Case Study</p>
                <span className="text-futura-text text-sm">High-Volume Law Firm</span>
              </div>
            </div>

            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8 text-white"
              style={{ fontFamily: 'var(--font-karl)' }}
              data-testid="text-headline"
            >
              FIxIng InTakE{' '}
              <span className="relative inline-block text-parchment">
                <span className="absolute inset-0 bg-parchment/20 -skew-x-3 -rotate-1 scale-x-105 rounded-sm" aria-hidden="true" />
                <span className="relative">BlInd spoTs</span>
              </span>
            </h1>
            
            <p 
              className="text-lg leading-relaxed mb-10 max-w-xl text-futura-text"
              data-testid="text-hero-description"
            >
              How we transformed intake from a cost center into a predictable revenue engine for a large California law firm.
            </p>

            <Button 
              size="lg"
              className="bg-parchment text-futura-bg font-semibold rounded-sm px-8"
              data-testid="button-hero-cta"
              onClick={() => setContactOpen(true)}
            >
              Get Similar Results
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-testid="grid-hero-metrics">
            {results.map((result, index) => (
              <div key={index} className="bg-futura-card border border-futura-border rounded-sm p-6 text-center">
                <p className="text-4xl md:text-5xl font-bold text-parchment mb-2" style={{ fontFamily: 'var(--font-karl)' }}>{result.metric}</p>
                <p className="text-futura-text-secondary text-sm">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 lg:py-24 border-t border-futura-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-futura-card border border-futura-border rounded-sm p-6 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-5 h-5 text-parchment" />
              <p className="text-white font-semibold">Client Profile</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-futura-text-secondary text-sm">
              <div><span className="text-futura-text">Firm Type:</span> Large, multi-office California law firm</div>
              <div><span className="text-futura-text">Practice Area:</span> Litigation</div>
              <div><span className="text-futura-text">Role:</span> Director of Revenue Operations & Growth</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-parchment" />
                The Problem
              </h2>
              <p className="text-futura-text leading-relaxed mb-6">
                Despite strong brand demand and steady inbound traffic, leadership lacked clear answers to fundamental questions:
              </p>
              <ul className="space-y-3 text-futura-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-parchment mt-1">•</span>
                  How many inquiries are we actually receiving?
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-parchment mt-1">•</span>
                  Where are we losing potential clients — and why?
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-parchment mt-1">•</span>
                  Which marketing channels generate retainers, not just leads?
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-parchment mt-1">•</span>
                  Are intake specialists converting at similar rates?
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-parchment mt-1">•</span>
                  Are we scaling staff… or masking broken systems?
                </li>
              </ul>
              <p className="text-futura-text leading-relaxed mt-6">
                Intake data lived across voicemail systems, inboxes, forms, calendars, and spreadsheets — creating blind spots that made optimization impossible.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-parchment" />
                The Approach
              </h2>
              <p className="text-futura-text leading-relaxed mb-6">
                Native Legal redesigned intake as a <span className="text-white font-medium">measurable revenue system</span>, not a call center.
              </p>
              <p className="text-futura-text leading-relaxed mb-4">The strategy focused on:</p>
              <ul className="space-y-3 text-futura-text-secondary">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-parchment flex-shrink-0 mt-0.5" />
                  Eliminating manual data entry
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-parchment flex-shrink-0 mt-0.5" />
                  Capturing every inquiry automatically
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-parchment flex-shrink-0 mt-0.5" />
                  Creating visibility into both lead volume and lead quality
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-parchment flex-shrink-0 mt-0.5" />
                  Instrumenting the intake funnel end-to-end
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 lg:py-24 border-t border-futura-border/50 bg-gradient-to-b from-futura-bg to-futura-card/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-8">What We Built</h2>
          <p className="text-futura-text mb-8">A fully systemized intake infrastructure with:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {deliverables.map((item, index) => (
              <div key={index} className="bg-futura-card border border-futura-border rounded-sm p-4 flex items-start gap-3" data-testid={`text-deliverable-${index}`}>
                <CheckCircle className="w-5 h-5 text-parchment flex-shrink-0 mt-0.5" />
                <span className="text-futura-text-secondary text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-parchment/10 border border-parchment/30 rounded-sm p-6">
            <p className="text-white font-medium text-lg">
              Critically, intake specialists never had to manually enter data to measure performance.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 lg:py-24 border-t border-futura-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-8">Results</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {results.map((result, index) => (
              <div key={index} className="bg-parchment/10 border border-parchment/30 rounded-sm p-8 text-center" data-testid={`text-result-${index}`}>
                <p className="text-4xl md:text-5xl font-bold text-parchment mb-3" style={{ fontFamily: 'var(--font-karl)' }}>{result.metric}</p>
                <p className="text-futura-text">{result.label}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-futura-card border border-futura-border rounded-sm p-6">
              <p className="text-futura-text-secondary">Clear visibility into when to scale staff vs. cut spend</p>
            </div>
            <div className="bg-futura-card border border-futura-border rounded-sm p-6">
              <p className="text-futura-text-secondary">Actionable insight into why prospects drop off at each stage</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 lg:py-24 border-t border-futura-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-parchment/5 to-transparent border-l-4 border-parchment p-8 mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">Why It Matters</h2>
            <p className="text-futura-text leading-relaxed mb-4 text-lg">
              Most firms try to grow by hiring faster or spending more on ads. This firm grew by <span className="text-white font-medium">seeing the truth in their data</span> — and fixing the system underneath it.
            </p>
            <p className="text-white font-semibold text-xl">
              Native Legal turned intake from a cost center into a predictable revenue engine.
            </p>
          </div>

          <div className="bg-futura-card border border-futura-border rounded-sm p-8 md:p-12">
            <div className="max-w-2xl">
              <p className="text-futura-text text-xs font-medium uppercase tracking-widest mb-4" data-testid="text-cta-label">
                Your Turn
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: 'var(--font-karl)' }} data-testid="text-cta-headline">
                rEady To FIx yoUr InTakE?
              </h2>
              <p className="text-futura-text text-lg mb-4" data-testid="text-cta-body">
                Let us help you uncover the blind spots in your intake process and build a system that actually converts.
              </p>
              <p className="text-futura-text-secondary mb-8" data-testid="text-cta-sub">
                Start with a free intake assessment.
                <br />
                <span className="text-white">No pressure. No sales pitch. Just clarity.</span>
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <Button 
                  size="lg"
                  className="bg-parchment text-futura-bg font-semibold rounded-sm px-8"
                  data-testid="button-cta-final"
                  onClick={() => setContactOpen(true)}
                >
                  Schedule Your Assessment
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Link href="/case-study/recruiting">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-futura-border text-white rounded-sm"
                    data-testid="button-next-case-study"
                  >
                    Next: Recruiting Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-futura-border py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <Link href="/" className="text-white font-bold text-xl tracking-tight" style={{ fontFamily: 'var(--font-karl)' }}>
              NaTiVE lEgal
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

      <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
}
