"use client";

import React, { useState, useRef } from "react";
import { X } from "lucide-react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import ServiceFeature from "@/components/ui/featureService";

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

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80 },
  },
};

const card3DVariant: Variants = {
  hidden: { opacity: 0, y: 60, rotateX: 15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 12,
    },
  },
};

const card3D: Variants = {
  hidden: { opacity: 0, y: 60, rotateX: 15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 80 },
  },
};

export default function Home() {
  const [selectedService, setSelectedService] = useState<
    (typeof services)[0] | null
  >(null);
  const router = useRouter();
  const handleViewServices = () => {
    document.getElementById("service")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-background text-foreground px-6 py-16"
    >
      {/* Heading */}

      <motion.div
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.p
          variants={fadeUp}
          className="text-sm uppercase tracking-widest text-blue-500 mb-3"
        >
          Our Services
        </motion.p>

        <motion.div style={{ y: yParallax }}>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
          >
            Software Solutions <br />
            <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Built for Growth & Scale
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            From custom software and SaaS platforms to scalable web
            applications, we deliver high-performance solutions designed to
            solve real business problems and support long-term growth.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        id="service"
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
      >
        {services.map((service, index) => (
          <motion.div
            variants={card3D}
            whileHover={{
              rotateY: 10,
              rotateX: 6,
              scale: 1.05,
            }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            key={index}
            className="relative group rounded-2xl border border-border bg-card p-6   transition-all duration-300 hover:shadow-xl hover:-translate-y-2 "
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
          </motion.div>
        ))}
      </motion.div>

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

      {/**feature */}
      <section className=" mt-20">
        <ServiceFeature />
      </section>
      {/**cta */}
      <section className="px-6 md:px-16 pb-20 mt-20">
        <motion.div
          variants={card3DVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{
            rotateY: 6,
            rotateX: 6,
            scale: 1.03,
          }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-2xl"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Build Scalable Software That Drives Growth <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-yellow-300 to-pink-300">
                End-to-End Development Services You Can Trust
              </span>
            </h3>

            <p className="mt-5 text-white/80 max-w-2xl mx-auto text-lg">
              From idea to deployment, we deliver high-performance software
              solutions tailored to your business needs. Our team specializes in
              modern web, mobile, and AI-powered applications designed for
              scalability, speed, and real-world impact.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => router.push("/src/contact")}
                className="px-8 py-3 rounded-xl bg-white text-blue-600 font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Get Started
              </button>

              <button
                onClick={handleViewServices}
                className="px-8 py-3 rounded-xl border border-white/40 text-white hover:bg-white/10 transition-all duration-300"
              >
                Explore Services
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
