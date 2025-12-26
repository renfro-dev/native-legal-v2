import { Link } from "wouter";
import { Target, Users, TrendingUp, ArrowRight, CheckCircle, BarChart3, Megaphone, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedLogo from "@/components/animated-logo";

const services = [
  {
    id: "crm-strategy",
    title: "crm sTraTEgy",
    tagline: "Your intake is your lifeline.",
    icon: Target,
    description: "Evolve your intake and service strategy with a modern CRM that understands your business. We implement and optimize systems that capture leads, nurture relationships, and convert prospects into clients.",
    features: [
      "CRM selection and implementation tailored to law firms",
      "Automated lead nurturing and follow-up sequences",
      "Integration with your website, phone, and email systems",
      "Custom dashboards for pipeline visibility",
    ],
  },
  {
    id: "strategic-initiatives",
    title: "sTraTEgIc InITIaTIVEs",
    tagline: "Drive forward without losing focus.",
    icon: BarChart3,
    description: "Stop letting strategic projects stall. We own discovery and execution for your most important initiatives—so you can stay focused on practicing law while we move your business forward.",
    features: [
      "Project scoping with minimal partner time required",
      "Vendor evaluation and selection support",
      "Implementation management and accountability",
      "Regular progress reporting and stakeholder updates",
    ],
  },
  {
    id: "growth-marketing",
    title: "groWTh markETIng",
    tagline: "Be found where it matters.",
    icon: Megaphone,
    description: "Future-proof your growth with a cost-effective local and LLM search strategy. We help you build organic visibility first, then layer in paid acquisition when you need to accelerate.",
    features: [
      "Local SEO optimization for your practice areas",
      "LLM and AI search visibility strategy",
      "Content strategy that builds authority",
      "Paid search management when momentum is needed",
    ],
  },
  {
    id: "recruiting",
    title: "rEcrUITIng",
    tagline: "Build the team you need.",
    icon: UserPlus,
    description: "Put your recruiting on auto-pilot and start growing where you need it most. We help you attract, screen, and hire talent that fits your firm's culture and growth trajectory.",
    features: [
      "Job posting optimization and distribution",
      "Candidate screening and initial interviews",
      "Employer branding and career page development",
      "Onboarding process design",
    ],
  },
];

export default function RevenueOperations() {
  return (
    <div className="min-h-screen bg-futura-bg">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full glow-mint" />
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full glow-blue" />
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
              <span className="text-white text-xl font-bold tracking-wide" style={{ fontFamily: 'var(--font-karl)' }}>NaTiVE lEgal</span>
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
                href="/revenue-operations" 
                className="text-white text-sm transition-colors"
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
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-1 bg-parchment rounded-full" />
              <span className="text-futura-text text-sm font-medium uppercase tracking-widest">Native Legal</span>
            </div>

            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8 text-white"
              style={{ fontFamily: 'var(--font-karl)' }}
              data-testid="text-headline"
            >
              bUIld ThE{' '}
              <span className="relative inline-block text-parchment">
                <span className="absolute inset-0 bg-parchment/20 -skew-x-3 -rotate-1 scale-x-105 rounded-sm" aria-hidden="true" />
                <span className="relative">EnginE</span>
              </span>
              <br />ThAT drIVEs yoUr FIrm
            </h1>
            
            <p 
              className="text-lg leading-relaxed mb-10 max-w-xl text-futura-text"
              data-testid="text-hero-description"
            >
              Modern law firms need modern revenue operations. We help you build the systems, processes, and team that turn leads into clients and clients into advocates.
            </p>
          </div>
        </div>
      </section>

      {services.map((service, index) => (
        <section 
          key={service.id}
          id={service.id}
          className={`relative z-10 py-20 lg:py-24 border-t border-futura-border/50 ${
            index % 2 === 1 ? "bg-gradient-to-b from-futura-bg to-futura-card/20" : ""
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-16 h-16 bg-futura-border rounded-sm flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-parchment" />
                </div>
                <p className="text-futura-text text-xs font-medium uppercase tracking-widest mb-4" data-testid={`text-${service.id}-label`}>
                  {service.tagline}
                </p>
                <h2 
                  className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6"
                  style={{ fontFamily: 'var(--font-karl)' }}
                  data-testid={`text-${service.id}-headline`}
                >
                  {service.title}
                </h2>
                <p className="text-lg text-futura-text leading-relaxed mb-8" data-testid={`text-${service.id}-body`}>
                  {service.description}
                </p>
                <Button 
                  className="bg-parchment text-futura-bg font-semibold rounded-sm"
                  data-testid={`button-${service.id}-cta`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className={`bg-futura-card border border-futura-border rounded-sm p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="text-parchment font-semibold text-lg mb-6">Key Benefits</p>
                <div className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-4" data-testid={`text-${service.id}-feature-${featureIndex}`}>
                      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-5 h-5 text-parchment" />
                      </div>
                      <span className="text-futura-text-secondary text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="relative z-10 py-20 lg:py-24 border-t border-futura-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-futura-card border border-futura-border rounded-sm p-8 md:p-12">
            <div className="max-w-2xl">
              <p className="text-futura-text text-xs font-medium uppercase tracking-widest mb-4" data-testid="text-cta-label">
                Get Started
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: 'var(--font-karl)' }} data-testid="text-cta-headline">
                rEady To groW?
              </h2>
              <p className="text-futura-text text-lg mb-4" data-testid="text-cta-body">
                Let us help you build revenue operations that scale with your ambitions.
              </p>
              <p className="text-futura-text-secondary mb-8" data-testid="text-cta-sub">
                Start with a free revenue assessment.
                <br />
                <span className="text-white">No pressure. No sales pitch. Just clarity.</span>
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <Button 
                  size="lg"
                  className="bg-parchment text-futura-bg font-semibold rounded-sm px-8"
                  data-testid="button-cta-final"
                >
                  Schedule Your Assessment
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-futura-border py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <AnimatedLogo size="sm" />
              <span className="text-white text-lg font-bold" style={{ fontFamily: 'var(--font-karl)' }}>NaTiVE lEgal</span>
            </div>
            <div className="flex items-center gap-6 flex-wrap">
              <Link href="/" className="text-futura-text-secondary text-sm hover:text-white transition-colors" data-testid="link-footer-home">
                Home
              </Link>
              <Link href="/custom-software" className="text-futura-text-secondary text-sm hover:text-white transition-colors" data-testid="link-footer-software">
                Custom Software
              </Link>
              <Link href="/ai-readiness" className="text-futura-text-secondary text-sm hover:text-white transition-colors" data-testid="link-footer-ai">
                AI Readiness
              </Link>
              <Link href="/privacy" className="text-futura-text-secondary text-sm hover:text-white transition-colors" data-testid="link-footer-privacy">
                Privacy
              </Link>
            </div>
            <p className="text-futura-text-secondary text-sm">
              Native Legal LLC
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
