import { useState } from "react";
import { Database, Layers, Shield, Map, Users, Brain, ArrowRight, Zap, CheckCircle, Building2, Briefcase, Target, Settings, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import harpLogo from "@assets/harp-logo.png";

type PillarKey = "data" | "people" | "systems";

const servicePillars: Record<PillarKey, { title: string; icon: typeof Database; services: { name: string; description: string }[] }> = {
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
};

const audiences = [
  {
    title: "AI Agencies & Implementation Partners",
    tagline: "You deliver the technology. We help ensure your clients are actually ready for it.",
    description: "We partner with AI agencies to reduce risk, shorten discovery cycles, and increase long-term client success by preparing data, governance, and operational context before deployment.",
    icon: Building2,
    accentColor: "mint",
  },
  {
    title: "Founder-Led Service Businesses",
    tagline: "You're scaling expertise, not just operations.",
    description: "We help founders prepare their organizations for AI in a way that protects trust, empowers teams, and supports sustainable growth—without rushing into automation that creates confusion or resistance.",
    icon: Briefcase,
    accentColor: "royal-blue",
  },
  {
    title: "Enterprise Operators & Executive Leaders",
    tagline: "You're accountable for outcomes, not experiments.",
    description: "We support leaders responsible for AI success across revenue, operations, and strategy by building the clarity and governance required to scale AI responsibly.",
    icon: Target,
    accentColor: "golden-yellow",
  },
];

const focusAreas = [
  {
    title: "Clean, Trustworthy Data",
    description: "AI depends on reliable inputs. We identify where data breaks down, conflicts, or lacks ownership—and help teams establish confidence in the information AI will rely on.",
    icon: Database,
    accentColor: "mint",
  },
  {
    title: "Modern, Interoperable Tools",
    description: "AI cannot operate in silos. We assess how systems connect, where friction exists, and how tools can support shared context instead of fragmenting it further.",
    icon: Layers,
    accentColor: "royal-blue",
  },
  {
    title: "Context Infrastructure",
    description: "Decisions, conversations, and workflows are valuable—but often invisible. We help capture and structure this context so AI systems and humans can reason from the same understanding.",
    icon: Brain,
    accentColor: "golden-yellow",
  },
  {
    title: "AI Governance & Ethical Safeguards",
    description: "Trust matters. We help organizations define clear boundaries, accountability, and review processes so AI supports people rather than undermining confidence or control.",
    icon: Shield,
    accentColor: "hot-pink",
  },
  {
    title: "Process Mapping & Operational Clarity",
    description: "Unclear processes create unreliable AI outcomes. We map how work actually happens—not how it's documented—so AI supports real operations.",
    icon: Map,
    accentColor: "mint",
  },
  {
    title: "Change Management & Adoption Support",
    description: "AI readiness is as much cultural as technical. We help leaders prepare teams for new ways of working through clarity, communication, and shared expectations.",
    icon: Users,
    accentColor: "royal-blue",
  },
];

const contextBenefits = [
  "AI recommendations are more accurate",
  "Decisions are easier to audit and explain",
  "Teams trust outcomes instead of questioning them",
  "Automation supports judgment instead of replacing it",
];

const peopleEmphasis = [
  "Transparency over black boxes",
  "Governance over shortcuts",
  "Empowerment over replacement",
];

export default function Home() {
  const [activePillar, setActivePillar] = useState<PillarKey>("data");
  const currentPillar = servicePillars[activePillar];

  return (
    <div className="min-h-screen bg-brutal-bg">
      {/* Subtle background glow */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full glow-mint opacity-20" />
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full glow-blue opacity-15" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-brutal-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <img 
              src={harpLogo} 
              alt="harp" 
              className="h-10"
              data-testid="img-logo"
            />
            <nav className="flex items-center gap-6 flex-wrap">
              <a 
                href="#approach" 
                className="text-brutal-text-secondary text-sm transition-colors hover:text-mint"
                data-testid="link-approach"
              >
                Our Approach
              </a>
              <a 
                href="#focus" 
                className="text-brutal-text-secondary text-sm transition-colors hover:text-mint"
                data-testid="link-focus"
              >
                What We Focus On
              </a>
              <Button 
                className="bg-white text-brutal-bg font-medium rounded-sm"
                data-testid="button-contact"
              >
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              {/* Accent Line */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-1 bg-mint rounded-full" />
                <span className="text-mint text-sm font-medium uppercase tracking-widest">AI Readiness</span>
              </div>

              {/* Main Headline */}
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8"
                data-testid="text-headline"
              >
                <span className="text-white">Most AI implementations </span>
                <span className="text-mint">fail</span>
                <span className="text-white"> to produce ROI</span>
              </h1>
              
              {/* Subheader */}
              <p 
                className="text-xl md:text-2xl text-brutal-text leading-relaxed mb-6 font-medium"
                data-testid="text-subheader"
              >
                AI succeeds when your people, systems, and data are prepared for it.
              </p>

              <p 
                className="text-base leading-relaxed mb-10 max-w-xl"
                data-testid="text-hero-description"
              >
                <span className="text-white font-semibold italic">We focus upstream</span>
                <span className="text-brutal-text-secondary">—where AI outcomes are decided long before technology is introduced.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex items-center gap-4 flex-wrap">
                <Button 
                  size="lg"
                  className="bg-mint text-brutal-bg font-semibold rounded-sm px-8"
                  data-testid="button-cta-primary"
                >
                  Start With Readiness
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-brutal-border text-white rounded-sm"
                  data-testid="button-cta-secondary"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Visual Element */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                {/* Abstract visual representation of three pillars */}
                <div className="flex gap-6">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-24 h-32 border-2 border-mint/30 rounded-sm flex items-end justify-center pb-4 bg-mint/5">
                      <Database className="w-8 h-8 text-mint" />
                    </div>
                    <span className="text-mint text-xs font-medium uppercase tracking-wider">Data</span>
                  </div>
                  <div className="flex flex-col items-center gap-4 -mt-8">
                    <div className="w-24 h-40 border-2 border-royal-blue/30 rounded-sm flex items-end justify-center pb-4 bg-royal-blue/5">
                      <Users className="w-8 h-8 text-royal-blue" />
                    </div>
                    <span className="text-royal-blue text-xs font-medium uppercase tracking-wider">People</span>
                  </div>
                  <div className="flex flex-col items-center gap-4 -mt-4">
                    <div className="w-24 h-36 border-2 border-golden-yellow/30 rounded-sm flex items-end justify-center pb-4 bg-golden-yellow/5">
                      <Settings className="w-8 h-8 text-golden-yellow" />
                    </div>
                    <span className="text-golden-yellow text-xs font-medium uppercase tracking-wider">Systems</span>
                  </div>
                </div>
                {/* Connecting lines */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-brutal-border to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Three Pillars */}
      <section id="services" className="relative z-10 py-20 lg:py-24 border-t border-brutal-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-hot-pink text-xs font-medium uppercase tracking-widest mb-4" data-testid="text-services-label">
              Our Services
            </p>
            <h2 
              className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4"
              data-testid="text-services-headline"
            >
              Three Pillars of AI Readiness
            </h2>
            <p className="text-brutal-text-secondary text-lg max-w-2xl mx-auto">
              We prepare your organization across the dimensions that determine AI success.
            </p>
          </div>

          {/* Toggle Tabs */}
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
                      ? "toggle-elevated bg-mint text-brutal-bg border-mint" 
                      : "border-brutal-border text-brutal-text-secondary"
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

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" data-testid="grid-services">
            {currentPillar.services.map((service, index) => (
              <div 
                key={service.name}
                className="p-6 border border-brutal-border rounded-sm bg-brutal-bg/50 hover-elevate transition-all"
                data-testid={`card-service-${index}`}
              >
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-brutal-text-secondary text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* People, Not Replacement Section - Prominent */}
      <section id="people" className="relative z-10 py-24 lg:py-32 border-t border-brutal-border/50 bg-gradient-to-b from-brutal-bg to-brutal-card/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-hot-pink text-xs font-medium uppercase tracking-widest mb-4" data-testid="text-people-label">
                People, Not Replacement
              </p>
              <h2 
                className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight"
                data-testid="text-people-headline"
              >
                AI should support people—<span className="text-hot-pink">not sideline them.</span>
              </h2>
              <p className="text-lg text-brutal-text leading-relaxed mb-8" data-testid="text-people-body">
                We believe business transformation starts with people. AI should reduce cognitive load, improve decision quality, and create space for human judgment—not remove it.
              </p>
              <p className="text-white font-medium text-xl border-l-4 border-hot-pink pl-6 py-2">
                AI readiness means building systems that people trust, understand, and choose to use.
              </p>
            </div>
            <div className="bg-brutal-card border border-brutal-border rounded-sm p-8">
              <p className="text-white font-semibold text-lg mb-6">Our work emphasizes:</p>
              <div className="space-y-5">
                {peopleEmphasis.map((item, index) => (
                  <div key={index} className="flex items-center gap-4" data-testid={`text-people-emphasis-${index}`}>
                    <div className="w-10 h-10 bg-hot-pink/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <RefreshCw className="w-5 h-5 text-hot-pink" />
                    </div>
                    <span className="text-white text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="problem" className="relative z-10 py-20 lg:py-24 border-t border-brutal-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-royal-blue text-xs font-medium uppercase tracking-widest mb-4" data-testid="text-problem-label">
              The Problem
            </p>
            <h2 
              className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6"
              data-testid="text-problem-headline"
            >
              Most AI initiatives don't fail because of the models.
            </h2>
            <p className="text-2xl text-brutal-text-secondary font-medium mb-8">
              They fail because organizations aren't ready for them.
            </p>
            <div 
              className="text-base text-brutal-text leading-relaxed space-y-5"
              data-testid="text-problem-body"
            >
              <p>
                Teams rush to deploy tools without shared context. Data is fragmented or unreliable. Decisions live in conversations, inboxes, and undocumented workflows. Governance is an afterthought. Employees are left uncertain about how AI fits into their work—or whether it threatens it.
              </p>
              <p>
                The result is stalled pilots, mistrust, underwhelming impact, and growing complexity instead of clarity.
              </p>
              <p className="text-white font-medium text-lg border-l-2 border-mint pl-4">
                AI doesn't fail due to a lack of capability.
                <br />
                It fails due to a lack of readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Focus On Section */}
      <section id="focus" className="relative z-10 py-20 lg:py-24 border-t border-brutal-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-mint text-xs font-medium uppercase tracking-widest mb-4" data-testid="text-focus-label">
            What We Focus On
          </p>
          <h2 
            className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4"
            data-testid="text-focus-headline"
          >
            Building the foundations AI depends on
          </h2>
          <p className="text-brutal-text text-lg mb-12 max-w-2xl" data-testid="text-focus-intro">
            We address the upstream challenges that determine whether AI implementations succeed or struggle.
          </p>

          {/* Focus Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => {
              const borderLeftColor = 
                area.accentColor === "mint" ? "#98FF98" :
                area.accentColor === "royal-blue" ? "#4169E1" :
                area.accentColor === "golden-yellow" ? "#FFD700" :
                "#FF69B4";
              
              const iconColorClass = 
                area.accentColor === "mint" ? "text-mint" :
                area.accentColor === "royal-blue" ? "text-royal-blue" :
                area.accentColor === "golden-yellow" ? "text-golden-yellow" :
                "text-hot-pink";
              
              const bgColorClass = 
                area.accentColor === "mint" ? "bg-mint/10" :
                area.accentColor === "royal-blue" ? "bg-royal-blue/10" :
                area.accentColor === "golden-yellow" ? "bg-golden-yellow/10" :
                "bg-hot-pink/10";

              return (
                <div
                  key={index}
                  className="bg-brutal-card border border-brutal-border rounded-sm p-6 transition-colors hover:border-brutal-border-hover group"
                  style={{ borderLeftWidth: "2px", borderLeftColor: borderLeftColor }}
                  data-testid={`focus-card-${index}`}
                >
                  <div className={`w-10 h-10 ${bgColorClass} rounded-sm flex items-center justify-center mb-4`}>
                    <area.icon className={`w-5 h-5 ${iconColorClass}`} />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2 group-hover:text-mint transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-brutal-text leading-relaxed text-sm">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="relative z-10 py-20 lg:py-24 border-t border-brutal-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-golden-yellow text-xs font-medium uppercase tracking-widest mb-4" data-testid="text-approach-label">
                Our Approach
              </p>
              <h2 
                className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6"
                data-testid="text-approach-headline"
              >
                Alignment before scale.
              </h2>
              <p 
                className="text-lg text-brutal-text leading-relaxed mb-8"
                data-testid="text-approach-body"
              >
                Our work starts with discovery—understanding how decisions are made, how information flows, and where context breaks down. We then help organizations align data, tools, processes, and governance so AI can operate on trusted, shared understanding.
              </p>
              <p className="text-white font-medium text-xl border-l-4 border-golden-yellow pl-6 py-2">
                We don't sell tools.
                <br />
                We prepare organizations to use them well.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-brutal-card border border-brutal-border rounded-sm p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-golden-yellow/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-golden-yellow font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Discovery</h3>
                  <p className="text-brutal-text text-sm">Map how decisions are made, where information lives, and what context is missing.</p>
                </div>
              </div>
              <div className="bg-brutal-card border border-brutal-border rounded-sm p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-golden-yellow/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-golden-yellow font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Alignment</h3>
                  <p className="text-brutal-text text-sm">Unify data, tools, processes, and governance around shared understanding.</p>
                </div>
              </div>
              <div className="bg-brutal-card border border-brutal-border rounded-sm p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-golden-yellow/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-golden-yellow font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Readiness</h3>
                  <p className="text-brutal-text text-sm">Prepare your organization so AI implementations can succeed from day one.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section id="serve" className="relative z-10 py-20 lg:py-24 border-t border-brutal-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-hot-pink text-xs font-medium uppercase tracking-widest mb-4" data-testid="text-serve-label">
            Who We Serve
          </p>
          <h2 
            className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-12"
            data-testid="text-serve-headline"
          >
            Organizations preparing for AI success
          </h2>

          {/* Audience Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {audiences.map((audience, index) => {
              const borderLeftColor = 
                audience.accentColor === "mint" ? "#98FF98" :
                audience.accentColor === "royal-blue" ? "#4169E1" :
                "#FFD700";
              
              const iconColorClass = 
                audience.accentColor === "mint" ? "text-mint" :
                audience.accentColor === "royal-blue" ? "text-royal-blue" :
                "text-golden-yellow";
              
              const bgColorClass = 
                audience.accentColor === "mint" ? "bg-mint/10" :
                audience.accentColor === "royal-blue" ? "bg-royal-blue/10" :
                "bg-golden-yellow/10";

              return (
                <div
                  key={index}
                  className="bg-brutal-card border border-brutal-border rounded-sm p-6 transition-colors hover:border-brutal-border-hover group"
                  style={{ borderLeftWidth: "2px", borderLeftColor: borderLeftColor }}
                  data-testid={`audience-card-${index}`}
                >
                  <div className={`w-12 h-12 ${bgColorClass} rounded-sm flex items-center justify-center mb-4`}>
                    <audience.icon className={`w-6 h-6 ${iconColorClass}`} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-mint transition-colors">
                    {audience.title}
                  </h3>
                  <p className="text-mint text-sm font-medium mb-3">
                    {audience.tagline}
                  </p>
                  <p className="text-brutal-text leading-relaxed text-sm">
                    {audience.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 lg:py-24 border-t border-brutal-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-brutal-card border border-brutal-border rounded-sm p-8 md:p-12">
            <div className="max-w-2xl">
              <p className="text-mint text-xs font-medium uppercase tracking-widest mb-4" data-testid="text-cta-label">
                Start With Readiness
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4" data-testid="text-cta-headline">
                Prepare once. Implement with confidence.
              </h2>
              <p className="text-brutal-text text-lg mb-4" data-testid="text-cta-body">
                If you're exploring AI—or struggling to move from pilots to impact—we can help you understand what's actually required for success.
              </p>
              <p className="text-brutal-text-secondary mb-8" data-testid="text-cta-sub">
                Start with a readiness assessment or discovery conversation.
                <br />
                <span className="text-white">No pressure. No tool-selling. Just clarity.</span>
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <Button 
                  size="lg"
                  className="bg-mint text-brutal-bg font-semibold rounded-sm px-8"
                  data-testid="button-cta-final"
                >
                  Let's Prepare Your Organization
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-brutal-border py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <img 
              src={harpLogo} 
              alt="harp" 
              className="h-10"
            />
            <p className="text-brutal-text text-sm" data-testid="text-copyright">
              Prepare Your Organization for AI — Responsibly
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
