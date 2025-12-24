import { Link } from "wouter";
import { Clock, FileText, UserPlus, Search, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceAreas = [
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

export default function LegalAdminOps() {
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
              className="text-white text-xl italic font-light tracking-wide"
              data-testid="link-logo"
            >
              Harp & Quill
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
                className="text-white text-sm transition-colors"
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

      <section className="relative z-10 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-1 bg-parchment rounded-full" />
              <span className="text-futura-text text-sm font-medium uppercase tracking-widest">Harp & Quill</span>
            </div>

            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8 text-white"
              data-testid="text-headline"
            >
              Scale Legal Admin and Operations Without Compromising Your Margin
            </h1>
            
            <p 
              className="text-lg leading-relaxed mb-10 max-w-xl text-futura-text"
              data-testid="text-hero-description"
            >
              We partner with law firms that want to focus on what they do best. We do the rest.
            </p>

            <Button 
              className="bg-parchment text-futura-bg font-medium rounded-sm"
              data-testid="button-get-started"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 lg:py-24 border-t border-futura-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-parchment text-xs font-medium uppercase tracking-widest mb-4" data-testid="text-service-areas-label">
              Service Areas
            </p>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
              data-testid="text-service-areas-headline"
            >
              What We Do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="grid-service-areas">
            {serviceAreas.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={service.title}
                  className="p-6 border border-futura-border rounded-sm bg-futura-card hover-elevate transition-all group"
                  data-testid={`card-service-area-${index}`}
                >
                  <div className="w-12 h-12 bg-futura-border rounded-sm flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-parchment" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-futura-text-secondary text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-futura-border py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold text-lg">Harp & Quill</span>
            </div>
            <div className="flex items-center gap-6 flex-wrap">
              <Link 
                href="/privacy" 
                className="text-futura-text-secondary text-sm transition-colors hover:text-white"
                data-testid="link-privacy"
              >
                Privacy Policy
              </Link>
              <span className="text-futura-text-secondary text-sm">
                info@harpandquill.io
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
