import { Link } from "wouter";
import { Zap, FileText, Rocket, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "conflict-automation",
    title: "Conflict Automation",
    tagline: "Increase your speed to lead.",
    icon: Zap,
    description: "Stop losing potential clients to slow conflict checks. Our custom conflict automation systems integrate with your existing practice management software to deliver instant, accurate results.",
    features: [
      "Real-time conflict detection across all matters",
      "Integration with your existing CRM and case management",
      "Automated alerts and approval workflows",
      "Complete audit trail for compliance",
    ],
  },
  {
    id: "document-drafting",
    title: "Document Drafting Platform",
    tagline: "Build it, don't lease it.",
    icon: FileText,
    description: "Stop paying monthly fees for document assembly tools that don't fit your practice. We build custom document drafting systems that you own outright—tailored to your forms, your workflows, and your clients.",
    features: [
      "Your templates, your logic, your platform",
      "No per-seat licensing or monthly fees",
      "Full ownership of your technology investment",
      "Seamless integration with your document management",
    ],
  },
  {
    id: "rapid-prototyping",
    title: "Rapid Prototyping",
    tagline: "From idea to working software in weeks, not months.",
    icon: Rocket,
    description: "Have an idea for a tool that would transform your practice? We turn your vision into a working prototype fast—so you can test, iterate, and validate before committing to full development.",
    features: [
      "Working prototypes in 2-4 weeks",
      "Test with real users before full investment",
      "Iterate based on actual feedback",
      "Clear path from prototype to production",
    ],
  },
];

export default function CustomSoftware() {
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
                className="text-white text-sm transition-colors"
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
              Software built for your practice
            </h1>
            
            <p 
              className="text-lg leading-relaxed mb-10 max-w-xl text-futura-text"
              data-testid="text-hero-description"
            >
              Off-the-shelf solutions rarely fit. We build custom tools that integrate seamlessly with how you already work—and that you own outright.
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
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-futura-text text-xs font-medium uppercase tracking-widest mb-4" data-testid={`text-${service.id}-label`}>
                  {service.tagline}
                </p>
                <h2 
                  className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6"
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
                <p className="text-white font-semibold text-lg mb-6">Key Benefits</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4" data-testid="text-cta-headline">
                Ready to build something custom?
              </h2>
              <p className="text-futura-text text-lg mb-8" data-testid="text-cta-body">
                Tell us about your practice and the tools you wish existed. We'll show you what's possible.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <Button 
                  size="lg"
                  className="bg-parchment text-futura-bg font-semibold rounded-sm px-8"
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

      <footer className="relative z-10 border-t border-futura-border py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <Link href="/" className="text-white font-bold text-xl tracking-tight">
              Harp & Quill
            </Link>
            <div className="flex items-center gap-6 flex-wrap">
              <Link href="/privacy" className="text-futura-text-secondary text-sm transition-colors hover:text-white">Privacy Policy</Link>
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
