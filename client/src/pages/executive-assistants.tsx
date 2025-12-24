import { Link } from "wouter";
import { BarChart3, ListTodo, TrendingUp, AlertTriangle, Users, Rocket, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: BarChart3,
    title: "Weekly Blocker Analysis",
    description: "Surface what's killing momentum across your orgs",
  },
  {
    icon: ListTodo,
    title: "Task Collection & Deployment",
    description: "Create and delegate tasks and projects seamlessly",
  },
  {
    icon: TrendingUp,
    title: "KPI Gap Detection",
    description: "Identify operational bottlenecks and performance gaps",
  },
  {
    icon: AlertTriangle,
    title: "Risk Detection & Flagging",
    description: "Proactively identify threats & employee burnout",
  },
];

const audiences = [
  {
    icon: Users,
    title: "Enterprise Operators & Executive Leaders",
    subtitle: "Bridge strategy and execution",
    description: "Gain real-time visibility into operational context. Connect the dots between high-level decisions and ground-level execution.",
  },
  {
    icon: Rocket,
    title: "Founder-Led Service Businesses",
    subtitle: "Scale expertise without scaling headcount",
    description: "Transform tribal knowledge into documented processes. Enable your team to deliver at your level without you being the bottleneck.",
  },
  {
    icon: Search,
    title: "AI Agencies & Implementation Partners",
    subtitle: "Shorten discovery lifecycles",
    description: "Accelerate client onboarding by systematically capturing institutional knowledge. Turn weeks of discovery into days with structured context extraction.",
  },
];

export default function ExecutiveAssistants() {
  return (
    <div className="min-h-screen bg-futura-bg">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full glow-amber opacity-20" />
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full glow-copper opacity-15" />
      </div>

      <header className="relative z-10 border-b border-futura-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center justify-end gap-6 flex-wrap">
            <nav className="flex items-center gap-6 flex-wrap">
              <Link 
                href="/legal-admin-ops" 
                className="text-futura-text-secondary text-sm transition-colors hover:text-white"
                data-testid="link-legal-admin-ops"
              >
                Legal Admin & Ops
              </Link>
              <Link 
                href="/executive-assistants" 
                className="text-white text-sm transition-colors"
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
              Transform Chaos into Clarity
            </h1>
            
            <p 
              className="text-lg leading-relaxed mb-10 max-w-xl text-futura-text"
              data-testid="text-hero-description"
            >
              We build AI-powered executive assistants that centralize, organize, and analyze strategic context scattered across chats, emails, meetings, and CRM data.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <Button 
                className="bg-parchment text-futura-bg font-medium rounded-sm"
                data-testid="button-waitlist-hero"
              >
                Join the Waitlist
              </Button>
              <Button 
                variant="outline" 
                className="border-futura-border text-white rounded-sm"
                data-testid="button-learn-more"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 lg:py-24 border-t border-futura-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="p-6 bg-futura-card rounded-md border border-futura-border"
                data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <feature.icon className="w-8 h-8 text-parchment mb-4" />
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-futura-text-secondary text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 lg:py-24 border-t border-futura-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-futura-text text-xs font-medium uppercase tracking-widest mb-4">Our Philosophy</p>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
              data-testid="text-philosophy-headline"
            >
              Context creates leverage.
            </h2>
            <p className="text-2xl md:text-3xl text-futura-text-secondary mt-2">
              Leverage accelerates strategy.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 lg:py-24 border-t border-futura-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-futura-text text-xs font-medium uppercase tracking-widest mb-4">Who We Serve</p>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
              data-testid="text-audience-headline"
            >
              Built for Leaders Who Move Fast
            </h2>
            <p className="text-futura-text-secondary text-lg max-w-2xl mx-auto">
              Whether you're scaling a service business or driving enterprise transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {audiences.map((audience) => (
              <div 
                key={audience.title}
                className="p-8 bg-futura-card rounded-md border border-futura-border"
                data-testid={`card-audience-${audience.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <audience.icon className="w-10 h-10 text-parchment mb-6" />
                <h3 className="text-white font-bold text-xl mb-2">{audience.title}</h3>
                <p className="text-parchment font-medium text-sm mb-4">{audience.subtitle}</p>
                <p className="text-futura-text-secondary">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 lg:py-32 border-t border-futura-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6"
              data-testid="text-cta-headline"
            >
              Ready to Transform?
            </h2>
            <p className="text-futura-text-secondary text-lg mb-4">
              Stop managing by inbox. Start leading by insight.
            </p>
            <p className="text-futura-text text-base mb-10">
              Join forward-thinking leadership teams who are already leveraging AI-powered context capture and orchestration.
            </p>
            <Button 
              className="bg-parchment text-futura-bg font-medium rounded-sm px-8"
              data-testid="button-waitlist-cta"
            >
              Join the Waitlist
            </Button>
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
