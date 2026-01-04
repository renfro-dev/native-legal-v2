import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle, Users, Zap, BarChart3, Building2 } from "lucide-react";
import AnimatedLogo from "@/components/animated-logo";
import { ContactFormDialog } from "@/components/contact-form-dialog";

export default function CaseStudyRecruiting() {
  const [contactOpen, setContactOpen] = useState(false);

  const results = [
    { metric: "1,000+", label: "Legal hires supported" },
    { metric: "20+", label: "States covered" },
    { metric: "<25%", label: "Cost vs. external recruiters" },
  ];

  const deliverables = [
    "Structured candidate pipelines with defined stages",
    "Hiring manager workflows to reduce interview drag",
    "Out-of-state talent sourcing for cost efficiency",
    "Role clarity frameworks to reduce mis-hires",
    "Onboarding systems aligned with real job success",
    "Headcount justification models (hire vs. automate vs. defer)",
    "Post-hire performance tracking tied to business outcomes",
  ];

  return (
    <div className="min-h-screen bg-futura-bg overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full glow-mint" />
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full glow-blue" />
      </div>

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
                <Users className="w-8 h-8 text-parchment" />
              </div>
              <div>
                <p className="text-parchment text-xs font-medium uppercase tracking-widest">Case Study</p>
                <span className="text-futura-text text-sm">Multi-State Law Firms</span>
              </div>
            </div>

            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8 text-white"
              style={{ fontFamily: 'var(--font-karl)' }}
              data-testid="text-headline"
            >
              bUIldIng A scAlAblE{' '}
              <span className="relative inline-block text-parchment">
                <span className="absolute inset-0 bg-parchment/20 -skew-x-3 -rotate-1 scale-x-105 rounded-sm" aria-hidden="true" />
                <span className="relative">rEcrUITIng EngInE</span>
              </span>
            </h1>
            
            <p 
              className="text-lg leading-relaxed mb-10 max-w-xl text-futura-text"
              data-testid="text-hero-description"
            >
              How we helped law firms build in-house recruiting systems that reduced dependency on external recruiters and improved hiring ROI.
            </p>

            <Button 
              size="lg"
              className="bg-parchment text-futura-bg font-semibold rounded-sm px-8"
              data-testid="button-hero-cta"
              onClick={() => setContactOpen(true)}
            >
              Build Your Recruiting Engine
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
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
              <div><span className="text-futura-text">Firm Type:</span> Multi-state law firms</div>
              <div><span className="text-futura-text">Practice Areas:</span> Litigation, corporate law, support staff</div>
              <div><span className="text-futura-text">Role:</span> In-house recruiting leadership</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-parchment" />
                The Problem
              </h2>
              <p className="text-futura-text leading-relaxed mb-6">
                Law firms routinely face the same hiring dilemmas:
              </p>
              <ul className="space-y-3 text-futura-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-parchment mt-1">•</span>
                  Should we pay 20% of year-one salary to recruiters?
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-parchment mt-1">•</span>
                  Why are qualified paralegals so hard to find?
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-parchment mt-1">•</span>
                  Can we hire strong talent outside our home state?
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-parchment mt-1">•</span>
                  Are we hiring because we need capacity — or because systems are broken?
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-parchment mt-1">•</span>
                  How do we know if new hires are actually paying for themselves?
                </li>
              </ul>
              <p className="text-futura-text leading-relaxed mt-6">
                Most firms lacked structure, visibility, and ROI measurement in hiring decisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-parchment" />
                The Approach
              </h2>
              <p className="text-futura-text leading-relaxed mb-6">
                Native Legal treated recruiting like an <span className="text-white font-medium">operations problem</span>, not a staffing one.
              </p>
              <p className="text-futura-text leading-relaxed mb-4">The goal was to:</p>
              <ul className="space-y-3 text-futura-text-secondary">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-parchment flex-shrink-0 mt-0.5" />
                  Reduce reliance on external recruiters
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-parchment flex-shrink-0 mt-0.5" />
                  Build repeatable hiring pipelines
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-parchment flex-shrink-0 mt-0.5" />
                  Tie headcount decisions to real operational demand
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-parchment flex-shrink-0 mt-0.5" />
                  Measure ROI on every hire
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 lg:py-24 border-t border-futura-border/50 bg-gradient-to-b from-futura-bg to-futura-card/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-8">What We Built</h2>
          <p className="text-futura-text mb-8">Across multiple firms and jurisdictions, we implemented:</p>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {deliverables.map((item, index) => (
              <div key={index} className="bg-futura-card border border-futura-border rounded-sm p-4 flex items-start gap-3" data-testid={`text-deliverable-${index}`}>
                <CheckCircle className="w-5 h-5 text-parchment flex-shrink-0 mt-0.5" />
                <span className="text-futura-text-secondary text-sm">{item}</span>
              </div>
            ))}
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
              <p className="text-futura-text-secondary">Faster time-to-hire with higher role alignment</p>
            </div>
            <div className="bg-futura-card border border-futura-border rounded-sm p-6">
              <p className="text-futura-text-secondary">Improved retention through better enablement</p>
            </div>
            <div className="bg-futura-card border border-futura-border rounded-sm p-6">
              <p className="text-futura-text-secondary">Reduced dependency on external recruiting firms</p>
            </div>
            <div className="bg-futura-card border border-futura-border rounded-sm p-6">
              <p className="text-futura-text-secondary">Clear insight into when technology beats headcount</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 lg:py-24 border-t border-futura-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-parchment/5 to-transparent border-l-4 border-parchment p-8 mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">Why It Matters</h2>
            <p className="text-futura-text leading-relaxed mb-4 text-lg">
              Hiring is one of the most expensive decisions a law firm makes — and most firms make it blind.
            </p>
            <p className="text-white font-semibold text-xl">
              Native Legal gives firms the systems and clarity to scale intelligently, without over-hiring or over-paying.
            </p>
          </div>

          <div className="bg-futura-card border border-futura-border rounded-sm p-8 md:p-12">
            <div className="max-w-2xl">
              <p className="text-futura-text text-xs font-medium uppercase tracking-widest mb-4" data-testid="text-cta-label">
                Your Turn
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: 'var(--font-karl)' }} data-testid="text-cta-headline">
                rEady To bUIld yoUr rEcrUITIng EngInE?
              </h2>
              <p className="text-futura-text text-lg mb-4" data-testid="text-cta-body">
                Let us help you build hiring systems that reduce costs and improve outcomes.
              </p>
              <p className="text-futura-text-secondary mb-8" data-testid="text-cta-sub">
                Start with a free recruiting assessment.
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
                <Link href="/case-study/intake">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-futura-border text-white rounded-sm"
                    data-testid="button-prev-case-study"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Intake Case Study
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
