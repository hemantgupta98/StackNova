"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

const services = [
  {
    title: "Website Development",
    desc: "Modern, responsive and SEO-optimized websites for businesses and startups.",
    offers: [
      "Responsive, mobile-first designs",
      "SEO optimization and performance tuning",
      "CMS integrations (Headless/WordPress)",
      "Accessible and semantic markup",
    ],
    icon: "🌐",
  },
  {
    title: "SaaS Applications",
    desc: "Scalable SaaS platforms with secure backend and subscription systems.",
    offers: [
      "Multi-tenant architecture",
      "Subscription + billing integration",
      "Robust authentication and RBAC",
      "Monitoring and auto-scaling",
    ],
    icon: "☁️",
  },
  {
    title: "Custom Software",
    desc: "Tailor-made software solutions to automate and scale your business.",
    offers: [
      "Requirements analysis and spec",
      "Custom integrations and automations",
      "Cross-platform desktop & web",
      "Long-term maintenance plans",
    ],
    icon: "💻",
  },
  {
    title: "E-commerce Development",
    desc: "High-converting online stores with payment gateway integration.",
    offers: [
      "Secure payment gateways (Stripe, PayPal)",
      "Inventory and order management",
      "Conversion rate optimization",
      "Headless commerce options",
    ],
    icon: "🛒",
  },
  {
    title: "UI/UX Design",
    desc: "Beautiful and user-friendly interface design to improve user experience.",
    offers: [
      "User research & prototyping",
      "High-fidelity visual design",
      "Interactive prototypes & usability testing",
      "Design systems and component libraries",
    ],
    icon: "🎨",
  },
  {
    title: "API Development",
    desc: "Secure and scalable REST APIs for web and mobile applications.",
    offers: [
      "REST & GraphQL endpoints",
      "API versioning and documentation",
      "Rate limiting and auth strategies",
      "SDKs and client libraries",
    ],
    icon: "🔗",
  },
  {
    title: "Maintenance & Support",
    desc: "Continuous monitoring, updates, and support for your applications.",
    offers: [
      "24/7 monitoring and alerts",
      "Regular security and dependency updates",
      "Performance tuning and backups",
      "Priority support SLA",
    ],
    icon: "🛠️",
  },
];

export default function Home() {
  const [selectedService, setSelectedService] = useState<
    (typeof services)[0] | null
  >(null);

  const handleViewServices = () => {
    document.getElementById("service")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-widest text-blue-500 mb-3">
          Our Services
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Solutions We Provide
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We build scalable, high-performance digital products to help your
          business grow faster and smarter.
        </p>
      </div>

      {/* Grid */}
      <div
        id="service"
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-blue-400 opacity-0 group-hover:opacity-10 blur-xl transition duration-300"></div>

            {/* Content */}
            <div className="relative">
              <div className="text-3xl mb-4">{service.icon}</div>

              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

              <p className="text-sm text-muted-foreground mb-4">
                {service.desc}
              </p>

              {/* Button */}
              <button
                onClick={() => setSelectedService(service)}
                className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition cursor-pointer"
              >
                Learn More
                <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          {/* Modal Content */}
          <div className="bg-card rounded-2xl border border-border shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-300">
            {/* Close Button */}
            <div className="sticky top-0 flex justify-end p-6 border-b border-border bg-card rounded-t-2xl">
              <button
                onClick={() => setSelectedService(null)}
                className="p-1 hover:bg-muted rounded-lg transition text-foreground"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="text-5xl mb-4">{selectedService.icon}</div>

              <h2 className="text-3xl font-bold mb-4 text-foreground">
                {selectedService.title}
              </h2>

              <p className="text-muted-foreground mb-6 text-lg">
                {selectedService.desc}
              </p>

              <div className="bg-muted/50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold mb-3 text-foreground">
                  What We Offer:
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {selectedService.offers?.map((offer, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>{offer}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full px-7 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition shadow-lg shadow-blue-500/30">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-24 max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-blue-600/20 via-purple-600/20 to-transparent backdrop-blur-xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Glow Effects */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative z-10 max-w-xl">
            <p className="text-sm uppercase tracking-widest text-blue-400 mb-3">
              Start Your Journey
            </p>

            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Let’s Build Something{" "}
              <span className="text-blue-400">Extraordinary</span>
            </h3>

            <p className="text-muted-foreground text-sm md:text-base">
              From idea to execution, we craft scalable and modern digital
              solutions tailored to your business needs.
            </p>
          </div>

          {/* Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <button className="px-7 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition shadow-lg shadow-blue-500/30">
              Get Free Consultation →
            </button>

            <button
              type="button"
              onClick={handleViewServices}
              className="px-7 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition text-white font-medium"
            >
              View Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
