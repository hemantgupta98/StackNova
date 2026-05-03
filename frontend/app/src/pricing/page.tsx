"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import Query from "@/components/forms/query";
import { CircleCheck } from "lucide-react";
import PricingFeatures from "@/components/ui/feature";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "sonner";

const btnGradient =
  "w-full relative cursor-pointer overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:from-blue-600 hover:to-indigo-700 active:scale-95 text-sm sm:text-base before:content-[''] before:pointer-events-none before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-white/20 before:skew-x-[-20deg] hover:before:left-[100%] before:transition-all before:duration-700";

// 🔥 Animation Variants
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

const card3D: Variants = {
  hidden: { opacity: 0, y: 60, rotateX: 15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
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

const handleViewPricing = () => {
  document.getElementById("pricing")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default function PricingPage() {
  const ref = useRef(null);
  const router = useRouter();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const [selectedPlan, setSelectedPlan] = useState<null | {
    name: string;
    price: string;
    timeline: string;
  }>(null);
  const [proPlan, setproPlan] = useState<null | {
    name: string;
    price: string;
    timeline: string;
  }>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-background text-foreground px-6 py-10"
    >
      <Toaster position="top-center" richColors />
      {/* Hero */}
      <motion.div
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.p variants={fadeUp} className="mb-2 text-sm text-blue-500">
          Transparent Pricing
        </motion.p>

        <motion.div style={{ y: yParallax }}>
          <motion.h2 variants={fadeUp} className="mb-4 text-4xl font-bold">
            Simple Plans. Serious Power. <br />
            <span className="text-blue-600">Built to Scale With You</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-xl text-muted-foreground"
          >
            Everything you need to build, scale, and succeed without the
            complexity. <br /> Clear pricing. Maximum performance.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Pricing Section */}
      <motion.section
        id="pricing"
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl scroll-mt-10 px-4 py-10 text-center sm:px-6 sm:py-16"
      >
        <motion.div variants={fadeUp}>
          <h3 className="text-2xl font-semibold sm:text-3xl">
            Flexible Pricing Built for Modern Businesses
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            From simple websites to advanced AI systems choose a plan that fits
            your vision.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerStagger}
          className="mt-8 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* STARTER */}
          <motion.div
            variants={card3D}
            whileHover={{
              rotateY: 10,
              rotateX: 6,
              scale: 1.05,
            }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            className="rounded-xl border border-border bg-card shadow-2xl transition-all duration-200 hover:shadow-xl p-6"
          >
            <p className="mb-2 text-center text-xs font-bold uppercase tracking-widest text-blue-600">
              Starter
            </p>

            <h1 className="mt-5 text-center text-lg font-semibold">
              Basic Projects
            </h1>

            <p className="text-center text-xs text-muted-foreground">
              Ideal for startups and individuals launching their first product
            </p>

            <h1 className="mt-8 text-2xl font-bold">
              ₹10,000 - ₹20,000
              <span className="text-xs text-muted-foreground"> /project</span>
            </h1>

            <div className="ml-6 mt-10 space-y-3 text-left text-sm">
              {[
                "Business Website (3-5 Pages)",
                "Portfolio / Landing Page",
                "Responsive UI Design",
                "Basic SEO Setup",
                "Delivery in 7-14 Days",
              ].map((item) => (
                <p key={item} className="flex items-center gap-2">
                  <CircleCheck className="text-blue-400" size={20} />
                  <span className="text-muted-foreground">{item}</span>
                </p>
              ))}
            </div>

            <motion.button
              onClick={() => {
                setSelectedPlan({
                  name: "Starter Plan",
                  price: "₹10,000 - ₹20,000",
                  timeline: "14 - 28 Days",
                });
              }}
              type="button"
              className={`w-full bg-linear-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg disabled:opacity-60 cursor-pointer  mt-10`}
            >
              Get Your Website
            </motion.button>
            {selectedPlan && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
                <div className="bg-card rounded-2xl border border-border shadow-2xl max-w-xl w-full animate-in fade-in zoom-in-95 duration-300">
                  {/* Header */}
                  <div className="flex justify-between items-center p-6 border-b border-border">
                    <h2 className="text-xl font-semibold">
                      Confirm Your Plan 🚀
                    </h2>
                    <button
                      onClick={() => setSelectedPlan(null)}
                      type="button"
                      className="p-1 hover:bg-muted rounded-lg"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-5">
                    {/* Plan Name */}
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Selected Plan
                      </p>
                      <h3 className="text-lg font-semibold">
                        {selectedPlan.name}
                      </h3>
                    </div>

                    {/* Price */}
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Price Range
                      </p>
                      <h3 className="font-medium">{selectedPlan.price}</h3>
                    </div>

                    {/* Timeline */}
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Delivery Timeline
                      </p>
                      <h3 className="font-medium">{selectedPlan.timeline}</h3>
                    </div>

                    {/* Note */}
                    <div className="bg-muted/50 p-4 rounded-xl text-sm text-muted-foreground">
                      ⚡ Most clients get a response within 2–6 hours.
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-4">
                      <button
                        onClick={() => setSelectedPlan(null)}
                        className="w-1/2 py-2 rounded-lg border"
                      >
                        Cancel
                      </button>

                      <button
                        onClick={() => {
                          setSelectedPlan(null);
                          toast.success(
                            `Thanks for choosing ${selectedPlan.name}! We'll contact you within 24 hours.`,
                          );
                        }}
                        className="w-1/2 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* PRO */}
          <motion.div
            variants={card3D}
            whileHover={{
              rotateY: -10,
              rotateX: 6,
              scale: 1.05,
            }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            className="rounded-xl border-2 border-border bg-card shadow-2xl p-6"
          >
            <p className="text-center text-xs font-bold text-blue-600">Pro</p>

            <h1 className="mt-5 text-center text-lg font-semibold">
              Business Solutions
            </h1>
            <p className="text-center text-xs text-muted-foreground sm:text-sm">
              Perfect for growing businesses and institutions
            </p>

            <h1 className="mt-8 text-2xl font-bold">₹25,000 - ₹50,000</h1>

            <div className="ml-6 mt-10 space-y-3">
              {[
                "E-commerce Website",
                "Admin Dashboard",
                "Authentication System",
                "Payment Integration",
                "Priority Support",
              ].map((item) => (
                <p key={item} className="flex items-center gap-2">
                  <CircleCheck className="text-blue-400" size={20} />
                  <span>{item}</span>
                </p>
              ))}
            </div>

            <motion.button
              onClick={() => {
                setproPlan({
                  name: "Pro Plan",
                  price: "₹25,000 - ₹50,000",
                  timeline: "2 - 3 months",
                });
              }}
              type="button"
              className={`w-full bg-linear-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg disabled:opacity-60 cursor-pointer mt-10`}
            >
              Start Your Project
            </motion.button>
            {proPlan && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
                <div className="bg-card rounded-2xl border border-border shadow-2xl max-w-xl w-full animate-in fade-in zoom-in-95 duration-300">
                  {/* Header */}
                  <div className="flex justify-between items-center p-6 border-b border-border">
                    <h2 className="text-xl font-semibold">
                      Confirm Your Plan 🚀
                    </h2>
                    <button
                      onClick={() => setproPlan(null)}
                      type="button"
                      className="p-1 hover:bg-muted rounded-lg"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-5">
                    {/* Plan Name */}
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Selected Plan
                      </p>
                      <h3 className="text-lg font-semibold">{proPlan.name}</h3>
                    </div>

                    {/* Price */}
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Price Range
                      </p>
                      <h3 className="font-medium">{proPlan.price}</h3>
                    </div>

                    {/* Timeline */}
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Delivery Timeline
                      </p>
                      <h3 className="font-medium">{proPlan.timeline}</h3>
                    </div>

                    {/* Note */}
                    <div className="bg-muted/50 p-4 rounded-xl text-sm text-muted-foreground">
                      ⚡ Most clients get a response within 2–6 hours.
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-4">
                      <button
                        onClick={() => setproPlan(null)}
                        className="w-1/2 py-2 rounded-lg border"
                      >
                        Cancel
                      </button>

                      <button
                        onClick={() => {
                          setproPlan(null);
                          toast.success(
                            `Thanks for choosing ${proPlan.name}! We'll contact you within 24 hours.`,
                          );
                        }}
                        className="w-1/2 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* ENTERPRISE */}
          <motion.div
            variants={card3D}
            whileHover={{
              rotateY: 10,
              rotateX: 6,
              scale: 1.05,
            }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            className="rounded-xl border border-border bg-card shadow-2xl p-6"
          >
            <p className="text-center text-xs font-bold text-indigo-600">
              Enterprise
            </p>

            <h1 className="mt-5 text-center text-lg font-semibold">
              Custom Solutions
            </h1>
            <p className="text-center text-xs text-muted-foreground sm:text-sm">
              Built for enterprises, startups, and advanced products
            </p>

            <h1 className="mt-8 text-2xl font-bold">Custom Pricing</h1>

            <div className="ml-6 mt-10 space-y-3">
              {[
                "Custom Software",
                "AI Applications",
                "SaaS Platforms",
                "Cloud Architecture",
                "Dedicated Team",
              ].map((item) => (
                <p key={item} className="flex items-center gap-2">
                  <CircleCheck className="text-blue-400" size={20} />
                  <span>{item}</span>
                </p>
              ))}
            </div>

            <motion.button
              className={`w-full bg-linear-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg disabled:opacity-60 cursor-pointer  mt-10`}
              onClick={() => router.push("/src/contact")}
              type="button"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Plan Deep Dive */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 40, damping: 14 }}
        className="mb-20"
      >
        <PricingFeatures />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 40, damping: 14 }}
        className="mb-20"
      >
        <Query />
      </motion.div>
      <section className="px-6 md:px-16 pb-20">
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
              Simple Pricing, Powerful Results <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-yellow-300 to-pink-300">
                Choose the Plan That Fits Your Vision
              </span>
            </h3>

            <p className="mt-5 text-white/80 max-w-2xl mx-auto text-lg">
              We believe in transparent and flexible pricing that grows with
              you. Whether you&apos;re just starting or scaling big, our plans
              are designed to deliver maximum value with no hidden costs.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleViewPricing}
                className="px-8 py-3 rounded-xl bg-white text-blue-600 font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                View Pricing
              </button>

              <button
                onClick={() => router.push("/src/contact")}
                className="px-8 py-3 rounded-xl border border-white/40 text-white hover:bg-white/10 transition-all duration-300"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
