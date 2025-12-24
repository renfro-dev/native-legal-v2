import { useState } from "react";
import { Link } from "wouter";
import { Database, Users, ArrowRight, Settings, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedLogo from "@/components/animated-logo";

type PillarKey = "data" | "people" | "systems";

const servicePillars: Record<PillarKey, { title: string; icon: typeof Database; services: { name: string; description: string }[] }> = {
  systems: {
    title: "Systems",
    icon: Settings,
    services: [
      { name: "Context Infrastructure", description: "Build the foundational systems that capture and share context" },
      { name: "Process Mapping", description: "Document how work actually happens—not how it's written down" },
      { name: "Vendor Selection", description: "Evaluate and choose the right tools for your specific needs" },
      { name: "ROI Framework", description: "Establish clear metrics and expectations for AI investments" },
    ],
  },
  people: {
    title: "People",
    icon: Users,
    services: [
      { name: "Governance Strategy", description: "Define clear boundaries, accountability, and decision frameworks" },
      { name: "Stakeholder Alignment", description: "Ensure all parties share understanding and expectations" },
      { name: "Communication Strategy", description: "Build clarity around AI initiatives across your organization" },
      { name: "Change Management", description: "Prepare teams for new ways of working with AI" },
    ],
  },
  data: {
    title: "Data",
    icon: Database,
    services: [
      { name: "CRM", description: "Optimize your customer relationship management for AI-ready operations" },
      { name: "Reporting", description: "Build reliable, consistent reporting foundations that AI can leverage" },
      { name: "Context", description: "Capture and structure the context that gives data meaning" },
      { name: "Data Hygiene", description: "Clean, deduplicate, and validate data for trustworthy AI inputs" },
    ],
  },
};

const approachSteps = [
  { number: 1, title: "Systems Evaluation" },
  { number: 2, title: "Needs Assessment" },
  { number: 3, title: "Vendor Selection" },
  { number: 4, title: "Integration" },
  { number: 5, title: "Training" },
  { number: 6, title: "Optimization" },
];

const peopleEmphasis = [
  "Transparency over black boxes",
  "Governance over shortcuts",
  "Empowerment over replacement",
];

export default function AIReadiness() {
  const [activePillar, setActivePillar] = useState<PillarKey>("people");
  const currentPillar = servicePillars[activePillar];

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
              <span className="text-white text-xl font-light tracking-wide" style={{ fontFamily: 'var(--font-karl)' }}>Native Legal</span>
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
                href="/legal-admin-revops" 
                className="text-futura-text-secondary text-sm transition-colors hover:text-white"
                data-testid="link-legal-admin-revops"
              >
                Legal Admin & RevOps
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
                className="text-white text-sm transition-colors"
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
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-1 bg-parchment rounded-full" />
              <span className="text-futura-text text-sm font-medium uppercase tracking-widest">Native Legal</span>
            </div>

            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8 text-white"
              data-testid="text-headline"
            >
              Prepare your firm for the AI era
            </h1>
            
            <p 
              className="text-lg leading-relaxed mb-10 max-w-xl text-futura-text"
              data-testid="text-hero-description"
            >
              We help family law firms build the foundation for successful AI adoption—focusing on systems, people, and data.
            </p>
          </div>
        </div>
      </section>

      <section id="pillars" className="relative z-10 py-20 lg:py-24 border-t border-futura-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-parchment text-xs font-medium uppercase tracking-widest mb-4" data-testid="text-pillars-label">
              Our Services
            </p>
            <h2 
              className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4"
              data-testid="text-pillars-headline"
            >
              Three Pillars of AI Readiness
            </h2>
            <p className="text-futura-text-secondary text-lg max-w-2xl mx-auto">
              We prepare your organization across the dimensions that determine AI success.
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-12" data-testid="tabs-pillars">
            {(Object.keys(servicePillars) as PillarKey[]).map((key) => {
              const pillar = servicePillars[key];
              const IconComponent = pillar.icon;
              const isActive = activePillar === key;
              return (
                <Button
                  key={key}
                  variant="outline"
                  size="lg"
                  className={`rounded-sm font-medium toggle-elevate ${
                    isActive 
                      ? "toggle-elevated bg-parchment text-futura-bg border-parchment" 
                      : "border-futura-border text-futura-text-secondary"
                  }`}
                  onClick={() => setActivePillar(key)}
                  data-testid={`tab-${key}`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {pillar.title}
                </Button>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" data-testid="grid-pillar-services">
            {currentPillar.services.map((service, index) => (
              <div 
                key={service.name}
                className="p-6 border border-futura-border rounded-sm bg-futura-bg/50 hover-elevate transition-all"
                data-testid={`card-pillar-service-${index}`}
              >
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-futura-text-secondary text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="relative z-10 py-20 lg:py-24 border-t border-futura-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-parchment text-xs font-medium uppercase tracking-widest mb-4" data-testid="text-approach-label">
              Our Approach
            </p>
            <h2 
              className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4"
              data-testid="text-approach-headline"
            >
              Six steps to AI-Native practice transformation.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" data-testid="grid-approach-steps">
            {approachSteps.map((step, index) => (
              <div 
                key={step.number}
                className="text-center p-6 border border-futura-border rounded-sm bg-futura-card hover-elevate transition-all"
                data-testid={`card-step-${index}`}
              >
                <div className="w-12 h-12 bg-futura-border rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-parchment font-bold text-xl">{step.number}</span>
                </div>
                <h3 className="text-sm font-semibold text-white">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="people" className="relative z-10 py-24 lg:py-32 border-t border-futura-border/50 bg-gradient-to-b from-futura-bg to-futura-card/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-futura-text text-xs font-medium uppercase tracking-widest mb-4" data-testid="text-people-label">
                People, Not Replacement
              </p>
              <h2 
                className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight"
                data-testid="text-people-headline"
              >
                AI should support people—not sideline them.
              </h2>
              <p className="text-lg text-futura-text leading-relaxed mb-8" data-testid="text-people-body">
                We believe business transformation starts with people. AI should reduce cognitive load, improve decision quality, and create space for human judgment—not remove it.
              </p>
              <p className="text-white font-medium text-xl border-l-4 border-parchment pl-6 py-2">
                AI readiness means building systems that people trust, understand, and choose to use.
              </p>
            </div>
            <div className="bg-futura-card border border-futura-border rounded-sm p-8">
              <p className="text-white font-semibold text-lg mb-6">Our work emphasizes:</p>
              <div className="space-y-5">
                {peopleEmphasis.map((item, index) => (
                  <div key={index} className="flex items-center gap-4" data-testid={`text-people-emphasis-${index}`}>
                    <div className="w-10 h-10 bg-futura-border rounded-sm flex items-center justify-center flex-shrink-0">
                      <RefreshCw className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 lg:py-24 border-t border-futura-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-futura-card border border-futura-border rounded-sm p-8 md:p-12">
            <div className="max-w-2xl">
              <p className="text-futura-text text-xs font-medium uppercase tracking-widest mb-4" data-testid="text-cta-label">
                Get Started
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4" data-testid="text-cta-headline">
                Ready to assess your AI readiness?
              </h2>
              <p className="text-futura-text text-lg mb-4" data-testid="text-cta-body">
                Let us help you evaluate your current systems and build a roadmap to AI-native operations.
              </p>
              <p className="text-futura-text-secondary mb-8" data-testid="text-cta-sub">
                Start with a free systems evaluation.
                <br />
                <span className="text-white">No pressure. No bias. Just clarity.</span>
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <Button 
                  size="lg"
                  className="bg-parchment text-futura-bg font-semibold rounded-sm px-8"
                  data-testid="button-cta-final"
                >
                  Schedule Your Evaluation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
