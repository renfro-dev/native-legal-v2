import { Link } from "wouter";
import { Database, Users, ArrowRight, Scale, Briefcase, UserCog, Code, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedLogo from "@/components/animated-logo";

// Customize the logo text here (adjust capitalization as needed)
const LOGO_TEXT = "Native Legal";

const serviceShowcase = [
  {
    title: "Legal Admin & RevOps",
    description: "Scale operations without compromising your margin",
    href: "/legal-admin-revops",
    icon: Briefcase,
  },
  {
    title: "Executive Assistants",
    description: "AI-powered context capture and orchestration",
    href: "/executive-assistants",
    icon: UserCog,
  },
  {
    title: "Custom Software",
    description: "Tools built for your practice that you own outright",
    href: "/custom-software",
    icon: Code,
  },
  {
    title: "AI Readiness",
    description: "Prepare your firm for the AI era",
    href: "/ai-readiness",
    icon: Sparkles,
  },
];

const caseStudies = [
  {
    category: "Streamline Intake",
    title: "Improved lead converion by 42%",
    description: "Built a custom CRM that automates conflict checks, client communications, streamlines admin tasks, simplifies retainer agreements, and gives full visibility into business health",
    accentColor: "amber",
  },
  {
    category: "Rapid Prototyping",
    title: "Rethink resource guides",
    description: "A family law firm with four offices and over 100 staff transformed a 40+ slide powerpoint into one interactive asset",
    accentColor: "copper",
  },
  {
    category: "Reporting Dashboards",
    title: "A birds eye view of your business",
    description: "Eliminated manual data entry and created business intelligence to enable strategic decision making and resource allocation",
    accentColor: "gold",
  },
  {
    category: "Software Development",
    title: "Automated Prenuptial Agreements",
    description: "Built a custom tool that allows consumers to draft their own prenuptial agreements, providing attorneys with lower cost leads with intake already completed",
    accentColor: "bronze",
  },
  {
    category: "Simplify Document Collection",
    title: "Scale your paralegal team",
    description: "Make document collection an afterthought so your paralegals can spend their time on value generating activities",
    accentColor: "amber",
  },
  {
    category: "Recruiting",
    title: "Transform your recruiting department",
    description: "Leverage deep industry expertise and the right tools to help you make right hires for an AI-forward future",
    accentColor: "copper",
  },
];



export default function Home() {
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
                className="text-futura-text-secondary text-sm transition-colors hover:text-white"
                data-testid="link-ai-readiness"
              >
                AI Readiness
              </Link>
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
                <div className="w-12 h-1 bg-parchment rounded-full" />
                <span className="text-futura-text text-sm font-medium uppercase tracking-widest">Native Legal</span>
              </div>

              {/* Main Headline */}
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8 text-white"
                data-testid="text-headline"
              >
                Modern tools for family law firms
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

      {/* Services Showcase Section */}
      <section className="relative z-10 py-20 lg:py-24 border-t border-futura-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-parchment text-xs font-medium uppercase tracking-widest mb-4" data-testid="text-services-label">
              What We Do
            </p>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
              data-testid="text-services-headline"
            >
              Four ways we help your firm thrive
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-testid="grid-services-showcase">
            {serviceShowcase.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link 
                  key={service.title}
                  href={service.href}
                  className="p-6 border border-futura-border rounded-sm bg-futura-card hover-elevate transition-all group block"
                  data-testid={`card-service-showcase-${index}`}
                >
                  <div className="w-12 h-12 bg-futura-border rounded-sm flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-parchment" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-futura-text-secondary text-sm leading-relaxed">{service.description}</p>
                  <div className="mt-4 flex items-center text-parchment text-sm font-medium">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="relative z-10 py-20 lg:py-24 border-t border-futura-border/50 bg-gradient-to-b from-futura-bg to-futura-card/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-parchment text-xs font-medium uppercase tracking-widest mb-4" data-testid="text-case-studies-label">
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
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-futura-card border border-futura-border rounded-sm p-6 hover-elevate transition-all group"
                data-testid={`card-case-study-${index}`}
              >
                <p className="text-xs font-medium uppercase tracking-widest mb-3 text-parchment">
                  {study.category}
                </p>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {study.title}
                </h3>
                <p className="text-futura-text-secondary text-sm leading-relaxed">
                  {study.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
