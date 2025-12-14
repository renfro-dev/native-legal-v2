import { Eye, Shield, Users, CheckSquare, MessageSquare, Mail, Video, Zap, Database, Brain, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const valueProps = [
  { icon: Eye, text: "Get bird's eye view of your business" },
  { icon: Shield, text: "Detect and address business threats proactively" },
  { icon: Users, text: "Empower and coach your teams more effectively" },
  { icon: CheckSquare, text: "Capture and delegate key tasks" },
];

const features = [
  {
    title: "Context Capture",
    description: "Automatically extract key insights from chat messages, emails, and meetings across your organization.",
    icon: MessageSquare,
    accentColor: "mint",
  },
  {
    title: "Strategic Intelligence",
    description: "Transform scattered information into actionable intelligence that drives decision-making.",
    icon: Brain,
    accentColor: "royal-blue",
  },
  {
    title: "Task Orchestration",
    description: "Convert insights into delegated tasks with clear ownership and accountability.",
    icon: Zap,
    accentColor: "golden-yellow",
  },
  {
    title: "Data Pipeline Integration",
    description: "Capture the strategic context that traditional data pipelines miss.",
    icon: Database,
    accentColor: "hot-pink",
  },
];

const channels = [
  { icon: MessageSquare, label: "Chat" },
  { icon: Mail, label: "Email" },
  { icon: Video, label: "Meetings" },
];

export default function Home() {
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
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-mint rounded-sm flex items-center justify-center">
                <Zap className="w-5 h-5 text-brutal-bg" />
              </div>
              <span className="text-white font-semibold tracking-tight" data-testid="text-logo">
                Orchestrate
              </span>
            </div>
            <nav className="flex items-center gap-6 flex-wrap">
              <a 
                href="#services" 
                className="text-brutal-text-secondary text-sm transition-colors hover:text-mint"
                data-testid="link-services"
              >
                Services
              </a>
              <a 
                href="#why" 
                className="text-brutal-text-secondary text-sm transition-colors hover:text-mint"
                data-testid="link-why"
              >
                Why Us
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
      <section className="relative z-10 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Category Label */}
            <p className="text-mint text-xs font-medium uppercase tracking-widest mb-6" data-testid="text-category">
              Information Architecture
            </p>
            
            {/* Main Headline */}
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-8"
              data-testid="text-headline"
            >
              <span className="text-white whitespace-nowrap">Information Architecture and Orchestration</span>
              <br />
              <span className="text-brutal-text-secondary">for Leadership Teams</span>
            </h1>
            
            {/* Subheader */}
            <p 
              className="text-lg md:text-xl text-brutal-text leading-relaxed mb-12 max-w-3xl"
              data-testid="text-subheader"
            >
              We use modern tools to create leverage for leadership teams by capturing 
              context and insight that drives strategic momentum.
            </p>

            {/* Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {valueProps.map((prop, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 group"
                  data-testid={`value-prop-${index}`}
                >
                  <div className="w-2 h-2 bg-mint rounded-full flex-shrink-0" />
                  <span className="text-brutal-text-secondary group-hover:text-white transition-colors">
                    {prop.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 flex-wrap">
              <Button 
                size="lg"
                className="bg-mint text-brutal-bg font-semibold rounded-sm px-8"
                data-testid="button-cta-primary"
              >
                Start Your Transformation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-brutal-border text-white rounded-sm px-8 hover:border-brutal-border-hover hover:bg-transparent"
                data-testid="button-cta-secondary"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="why" className="relative z-10 py-20 lg:py-24 border-t border-brutal-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div>
            <p className="text-royal-blue text-xs font-medium uppercase tracking-widest mb-4">
              The Foundation
            </p>
            <h2 
              className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6"
              data-testid="text-why-headline"
            >
              Why?
            </h2>
            <div 
              className="text-base text-brutal-text leading-relaxed mb-8 space-y-5"
              data-testid="text-why-body"
            >
              <p>
                The unstructured data living inside your business—conversations, decisions, and day-to-day context—is a strategic goldmine.
              </p>
              <p>
                Historically, executive teams have relied on layers of management to translate this context into insight.
              </p>
              <p>
                Modern Model Context Protocol (MCP) architecture changes that. MCP enables organizations to capture context directly from chat, email, meetings, and fragmented systems—turning ephemeral knowledge into a durable, machine-readable asset.
              </p>
              <p className="text-white font-medium">
                Capturing context is the foundation of effective AI implementation.
                <br />
                Orchestrating that context is what unlocks real business transformation.
              </p>
            </div>
            
            {/* Channel Icons */}
            <div className="flex items-center gap-6 flex-wrap">
              {channels.map((channel, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 text-brutal-text-secondary"
                  data-testid={`channel-${channel.label.toLowerCase()}`}
                >
                  <channel.icon className="w-5 h-5" />
                  <span className="text-sm">{channel.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services/Features Grid */}
      <section id="services" className="relative z-10 py-20 lg:py-24 border-t border-brutal-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-golden-yellow text-xs font-medium uppercase tracking-widest mb-4">
            Our Services
          </p>
          <h2 
            className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4"
            data-testid="text-services-headline"
          >
            Comprehensive Orchestration
          </h2>
          <p className="text-brutal-text text-lg mb-12 max-w-2xl">
            End-to-end solutions for capturing, processing, and acting on the strategic 
            context that matters most to your business.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const borderLeftColor = 
                feature.accentColor === "mint" ? "#98FF98" :
                feature.accentColor === "royal-blue" ? "#4169E1" :
                feature.accentColor === "golden-yellow" ? "#FFD700" :
                "#FF69B4";
              
              const iconColorClass = 
                feature.accentColor === "mint" ? "text-mint" :
                feature.accentColor === "royal-blue" ? "text-royal-blue" :
                feature.accentColor === "golden-yellow" ? "text-golden-yellow" :
                "text-hot-pink";
              
              const bgColorClass = 
                feature.accentColor === "mint" ? "bg-mint/10" :
                feature.accentColor === "royal-blue" ? "bg-royal-blue/10" :
                feature.accentColor === "golden-yellow" ? "bg-golden-yellow/10" :
                "bg-hot-pink/10";

              return (
                <div
                  key={index}
                  className="bg-brutal-card border border-brutal-border rounded-sm p-6 transition-colors hover:border-brutal-border-hover group"
                  style={{ borderLeftWidth: "2px", borderLeftColor: borderLeftColor }}
                  data-testid={`feature-card-${index}`}
                >
                  <div className={`w-12 h-12 ${bgColorClass} rounded-sm flex items-center justify-center mb-4`}>
                    <feature.icon className={`w-6 h-6 ${iconColorClass}`} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-mint transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-brutal-text leading-relaxed">
                    {feature.description}
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
              <p className="text-hot-pink text-xs font-medium uppercase tracking-widest mb-4">
                Ready to Transform?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                Start orchestrating your business intelligence today
              </h2>
              <p className="text-brutal-text text-lg mb-8">
                Join forward-thinking leadership teams who are already leveraging AI-powered 
                context capture and orchestration.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <Button 
                  size="lg"
                  className="bg-mint text-brutal-bg font-semibold rounded-sm px-8"
                  data-testid="button-cta-final"
                >
                  Schedule a Consultation
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
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-mint rounded-sm flex items-center justify-center">
                <Zap className="w-5 h-5 text-brutal-bg" />
              </div>
              <span className="text-white font-semibold tracking-tight">
                Orchestrate
              </span>
            </div>
            <p className="text-brutal-text text-sm" data-testid="text-copyright">
              Information Architecture, Adoption, and Orchestration Services
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
