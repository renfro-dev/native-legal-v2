import { useState } from "react";
import { Database, Users, ArrowRight, Zap, Settings, RefreshCw, Scale, Clock, FileText, UserPlus, Search, BarChart3, Heart, Eye, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import harpLogo from "@assets/harp-logo.png";

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

const serviceAreas = [
  {
    title: "Automate Conflict Checks",
    description: "Increase your speed to lead.",
    icon: Zap,
  },
  {
    title: "Reimagine Intake",
    description: "Convert new clients 24/7, 365.",
    icon: Clock,
  },
  {
    title: "Streamline Billing",
    description: "Automate proactive client comms.",
    icon: FileText,
  },
  {
    title: "Rethink Recruiting",
    description: "Put your recruiting on auto-pilot.",
    icon: UserPlus,
  },
  {
    title: "Future-proof SEO",
    description: "Unlock Local and LLM Search.",
    icon: Search,
  },
  {
    title: "Measure Results",
    description: "Understand how spend translates to revenue.",
    icon: BarChart3,
  },
];

const approachSteps = [
  { number: 1, title: "Systems Evaluation" },
  { number: 2, title: "Needs Assessment" },
  { number: 3, title: "Vendor Selection" },
  { number: 4, title: "Integration" },
  { number: 5, title: "Training" },
  { number: 6, title: "Optimization" },
];

const caseStudies = [
  {
    category: "Divorce Practice",
    title: "Document Review Time Cut by 60%",
    description: "A 12-attorney family law practice automated their financial disclosure intake and document review process.",
    accentColor: "amber",
  },
  {
    category: "Custody Specialist",
    title: "Parenting Plan Generation in Minutes",
    description: "Solo practitioner reduced parenting plan drafting from 3 hours to 20 minutes with AI-assisted templates.",
    accentColor: "copper",
  },
  {
    category: "High-Asset Divorce",
    title: "Asset Division Analysis 10x Faster",
    description: "Mid-size firm uses AI to analyze complex asset portfolios and model equitable distribution scenarios.",
    accentColor: "gold",
  },
  {
    category: "Child Support",
    title: "Support Calculations Fully Automated",
    description: "Practice eliminated manual worksheet errors with AI-powered state guideline calculations and updates.",
    accentColor: "bronze",
  },
  {
    category: "Mediation Practice",
    title: "Client Intake Fully Automated",
    description: "Family mediator eliminated 15 hours of weekly administrative work with AI-powered intake and scheduling.",
    accentColor: "amber",
  },
  {
    category: "General Family Law",
    title: "24/7 Client Communication",
    description: "AI assistant handles after-hours client queries about case status, improving satisfaction scores by 45%.",
    accentColor: "copper",
  },
];

const missionPrinciples = [
  {
    title: "Accessibility",
    description: "Advocate for an inclusive legal system.",
    icon: Heart,
  },
  {
    title: "Objectivity",
    description: "Recommend tech stack without bias or incentive.",
    icon: Eye,
  },
  {
    title: "Humanity",
    description: "AI can never replace human touch.",
    icon: UserCheck,
  },
];


const peopleEmphasis = [
  "Transparency over black boxes",
  "Governance over shortcuts",
  "Empowerment over replacement",
];

export default function Home() {
  const [activePillar, setActivePillar] = useState<PillarKey>("people");
  const currentPillar = servicePillars[activePillar];

  return (
    <div className="min-h-screen bg-futura-bg">
      {/* Subtle background glow */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full glow-amber opacity-20" />
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full glow-copper opacity-15" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-futura-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <img 
              src={harpLogo} 
              alt="harp" 
              className="h-20"
              data-testid="img-logo"
            />
            <nav className="flex items-center gap-6 flex-wrap">
              <a 
                href="#services" 
                className="text-futura-text-secondary text-sm transition-colors hover:text-amber"
                data-testid="link-services"
              >
                Service Areas
              </a>
              <a 
                href="#approach" 
                className="text-futura-text-secondary text-sm transition-colors hover:text-amber"
                data-testid="link-approach"
              >
                Our Approach
              </a>
              <a 
                href="#case-studies" 
                className="text-futura-text-secondary text-sm transition-colors hover:text-amber"
                data-testid="link-case-studies"
              >
                Case Studies
              </a>
              <Button 
                className="bg-white text-futura-bg font-medium rounded-sm"
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
                <div className="w-12 h-1 bg-amber rounded-full" />
                <span className="text-amber text-sm font-medium uppercase tracking-widest">Family Law Technology</span>
              </div>

              {/* Main Headline */}
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8"
                data-testid="text-headline"
              >
                <span className="text-white">Modern tools for </span>
                <span className="text-amber">family law</span>
                <span className="text-white"> firms</span>
              </h1>
              
              <p 
                className="text-base leading-relaxed mb-10 max-w-xl"
                data-testid="text-hero-description"
              >
                <span className="text-futura-text-secondary">Future-proof your business with thoughtful change management. Evolve your practice with </span>
                <span className="text-white font-semibold">modern tools, powerful data, and intelligent automation.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex items-center gap-4 flex-wrap">
                <Button 
                  size="lg"
                  className="bg-amber text-futura-bg font-semibold rounded-sm px-8"
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
                    <div className="w-24 h-32 border-2 border-amber/30 rounded-sm flex items-end justify-center pb-4 bg-amber/5">
                      <Scale className="w-8 h-8 text-amber" />
                    </div>
                    <span className="text-amber text-xs font-medium uppercase tracking-wider">Systems</span>
                  </div>
                  <div className="flex flex-col items-center gap-4 -mt-8">
                    <div className="w-24 h-40 border-2 border-copper/30 rounded-sm flex items-end justify-center pb-4 bg-copper/5">
                      <Users className="w-8 h-8 text-copper" />
                    </div>
                    <span className="text-copper text-xs font-medium uppercase tracking-wider">People</span>
                  </div>
                  <div className="flex flex-col items-center gap-4 -mt-4">
                    <div className="w-24 h-36 border-2 border-gold/30 rounded-sm flex items-end justify-center pb-4 bg-gold/5">
                      <Database className="w-8 h-8 text-gold" />
                    </div>
                    <span className="text-gold text-xs font-medium uppercase tracking-wider">Data</span>
                  </div>
                </div>
                {/* Connecting lines */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-futura-border to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="services" className="relative z-10 py-20 lg:py-24 border-t border-futura-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber text-xs font-medium uppercase tracking-widest mb-4" data-testid="text-service-areas-label">
              Service Areas
            </p>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
              data-testid="text-service-areas-headline"
            >
              <span className="text-futura-text-secondary">Legal Support Should </span>
              <span className="text-amber">Never Sleep</span>
            </h2>
            <p className="text-futura-text-secondary text-lg max-w-2xl mx-auto">
              We partner with law firms that want to focus on what they do best. We do the rest.
            </p>
          </div>

          {/* Service Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="grid-service-areas">
            {serviceAreas.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={service.title}
                  className="p-6 border border-futura-border rounded-sm bg-futura-card hover-elevate transition-all group"
                  data-testid={`card-service-area-${index}`}
                >
                  <div className="w-12 h-12 bg-amber/10 rounded-sm flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-amber" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber transition-colors">{service.title}</h3>
                  <p className="text-futura-text-secondary text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach Section - 6 Steps */}
      <section id="approach" className="relative z-10 py-20 lg:py-24 border-t border-futura-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-medium uppercase tracking-widest mb-4" data-testid="text-approach-label">
              Our Approach
            </p>
            <h2 
              className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4"
              data-testid="text-approach-headline"
            >
              Six steps to AI-Native practice transformation.
            </h2>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" data-testid="grid-approach-steps">
            {approachSteps.map((step, index) => (
              <div 
                key={step.number}
                className="text-center p-6 border border-futura-border rounded-sm bg-futura-card hover-elevate transition-all"
                data-testid={`card-step-${index}`}
              >
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold font-bold text-xl">{step.number}</span>
                </div>
                <h3 className="text-sm font-semibold text-white">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="relative z-10 py-20 lg:py-24 border-t border-futura-border/50 bg-gradient-to-b from-futura-bg to-futura-card/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-copper text-xs font-medium uppercase tracking-widest mb-4" data-testid="text-case-studies-label">
              Case Studies
            </p>
            <h2 
              className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4"
              data-testid="text-case-studies-headline"
            >
              Real results from real firms.
            </h2>
            <p className="text-futura-text-secondary text-lg max-w-2xl mx-auto">
              See how family law firms are transforming their practice with AI-native tools.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="grid-case-studies">
            {caseStudies.map((study, index) => {
              const textColorClass = 
                study.accentColor === "amber" ? "text-amber" :
                study.accentColor === "copper" ? "text-copper" :
                study.accentColor === "gold" ? "text-gold" :
                "text-bronze";

              return (
                <div
                  key={index}
                  className="bg-futura-card border border-futura-border rounded-sm p-6 hover-elevate transition-all group"
                  data-testid={`card-case-study-${index}`}
                >
                  <p className={`text-xs font-medium uppercase tracking-widest mb-3 ${textColorClass}`}>
                    {study.category}
                  </p>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-amber transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-futura-text-secondary text-sm leading-relaxed">
                    {study.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="relative z-10 py-20 lg:py-24 border-t border-futura-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-bronze text-xs font-medium uppercase tracking-widest mb-4" data-testid="text-mission-label">
              Our Mission
            </p>
            <h2 
              className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4 max-w-3xl mx-auto"
              data-testid="text-mission-headline"
            >
              Our mission is to empower and lead small to medium size law firms through the AI era with these core principles.
            </h2>
          </div>

          {/* Mission Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto" data-testid="grid-mission">
            {missionPrinciples.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <div 
                  key={principle.title}
                  className="text-center p-6 border border-futura-border rounded-sm bg-futura-card"
                  data-testid={`card-mission-${index}`}
                >
                  <div className="w-12 h-12 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-bronze" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{principle.title}</h3>
                  <p className="text-futura-text-secondary text-sm">{principle.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Services - Three Pillars */}
      <section id="pillars" className="relative z-10 py-20 lg:py-24 border-t border-futura-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber text-xs font-medium uppercase tracking-widest mb-4" data-testid="text-pillars-label">
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
                      ? "toggle-elevated bg-amber text-futura-bg border-amber" 
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

          {/* Services Grid */}
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

      {/* People, Not Replacement Section */}
      <section id="people" className="relative z-10 py-24 lg:py-32 border-t border-futura-border/50 bg-gradient-to-b from-futura-bg to-futura-card/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-bronze text-xs font-medium uppercase tracking-widest mb-4" data-testid="text-people-label">
                People, Not Replacement
              </p>
              <h2 
                className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight"
                data-testid="text-people-headline"
              >
                AI should support people—<span className="text-bronze">not sideline them.</span>
              </h2>
              <p className="text-lg text-futura-text leading-relaxed mb-8" data-testid="text-people-body">
                We believe business transformation starts with people. AI should reduce cognitive load, improve decision quality, and create space for human judgment—not remove it.
              </p>
              <p className="text-white font-medium text-xl border-l-4 border-copper pl-6 py-2">
                AI readiness means building systems that people trust, understand, and choose to use.
              </p>
            </div>
            <div className="bg-futura-card border border-futura-border rounded-sm p-8">
              <p className="text-white font-semibold text-lg mb-6">Our work emphasizes:</p>
              <div className="space-y-5">
                {peopleEmphasis.map((item, index) => (
                  <div key={index} className="flex items-center gap-4" data-testid={`text-people-emphasis-${index}`}>
                    <div className="w-10 h-10 bg-copper/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <RefreshCw className="w-5 h-5 text-bronze" />
                    </div>
                    <span className="text-white text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 lg:py-24 border-t border-futura-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-futura-card border border-futura-border rounded-sm p-8 md:p-12">
            <div className="max-w-2xl">
              <p className="text-amber text-xs font-medium uppercase tracking-widest mb-4" data-testid="text-cta-label">
                Get Started
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4" data-testid="text-cta-headline">
                Ready to modernize your practice?
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
                  className="bg-amber text-futura-bg font-semibold rounded-sm px-8"
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

      {/* Footer */}
      <footer className="relative z-10 border-t border-futura-border py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <img 
              src={harpLogo} 
              alt="harp" 
              className="h-20"
            />
            <div className="flex items-center gap-6 flex-wrap">
              <a href="/privacy" className="text-futura-text-secondary text-sm transition-colors hover:text-amber">Privacy Policy</a>
              <p className="text-futura-text-secondary text-sm" data-testid="text-copyright">
                © 2025 Harp and Quill LLC. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
