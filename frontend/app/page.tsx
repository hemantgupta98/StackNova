"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";

const card3DVariant: Variants = {
  hidden: { opacity: 0, y: 60, rotateX: 15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  },
};

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

export default function Home() {
  const router = useRouter();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.main
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-background text-foreground min-h-screen"
    >
      {/* HERO */}
      <motion.section
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative overflow-hidden py-24 px-6 text-center"
      >
        <motion.div style={{ y: yParallax }} className="max-w-4xl mx-auto">
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-extrabold leading-tight"
          >
            Turn Your Ideas Into <br />
            <span className="text-blue-600">Powerful Digital Products</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We design and build high-performance websites, scalable systems, and
            AI-powered solutions that help your business grow faster and
            smarter.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex justify-center gap-4"
          >
            <button
              onClick={() => router.push("/src/contact")}
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
            >
              Start Your Project
            </button>

            <button
              onClick={() => router.push("/src/projects")}
              className="px-6 py-3 rounded-xl border border-gray-300 text-gray-500 font-medium hover:bg-gray-100 transition"
            >
              See Our Work
            </button>
          </motion.div>
        </motion.div>

        <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-50 via-white to-purple-50" />
      </motion.section>

      {/* FEATURES */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Custom Web Development",
            "AI-Powered Solutions",
            "Scalable Architecture",
            "Modern System Design",
          ].map((item) => (
            <motion.div
              key={item}
              variants={card3DVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ rotateY: 6, rotateX: 6, scale: 1.03 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative rounded-2xl p-px 
              bg-linear-to-br from-indigo-500/40 via-purple-500/30 to-pink-500/40
              hover:shadow-[0_20px_60px_-10px_rgba(99,102,241,0.5)]"
            >
              <div className="rounded-2xl px-6 py-5 text-center bg-white/70 backdrop-blur-xl border border-white/30">
                <p className="text-sm font-medium text-gray-700">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT (Rewritten as VALUE SECTION) */}
      <section className="px-6 pb-24">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.span
              variants={fadeUp}
              className="text-sm uppercase text-blue-600 font-semibold"
            >
              Why Choose Us
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-3xl md:text-5xl font-extrabold"
            >
              We Don’t Just Build Projects —{" "}
              <span className="text-blue-600">We Build Results</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-6 text-gray-600 text-lg">
              At <span className="font-semibold">StackNova IN</span>, we focus
              on solving real business problems through technology. Whether
              you&apos;re a startup or growing business, we help you launch
              faster, scale smarter, and stand out in the market.
            </motion.p>

            <motion.p variants={fadeUp} className="mt-4 text-gray-600 text-lg">
              From modern web applications to AI-driven automation, our approach
              combines performance, design, and innovation to deliver solutions
              that actually make an impact.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8">
              <button
                onClick={() => router.push("/src/contact")}
                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700"
              >
                Let’s Work Together
              </button>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "Fast", label: "Delivery Speed" },
              { value: "Smart", label: "AI Integration" },
              { value: "Clean", label: "Code Quality" },
              { value: "Future", label: "Scalable Systems" },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={card3DVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-white border shadow-sm"
              >
                <p className="text-3xl font-bold text-blue-600">{item.value}</p>
                <p className="text-sm text-gray-600 mt-2">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
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
              Ready to Turn Your Idea Into <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-yellow-300 to-pink-300">
                a Scalable Digital Product?
              </span>
            </h3>

            <p className="mt-5 text-white/80 max-w-2xl mx-auto text-lg">
              We help startups and businesses design, build, and launch powerful
              web applications and AI-driven solutions that are fast, scalable,
              and build for real growth — not just demos.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => router.push("/src/contact")}
                className="px-8 py-3 rounded-xl bg-white text-blue-600 font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Start Your Project
              </button>

              <button
                onClick={() => router.push("/src/projects")}
                className="px-8 py-3 rounded-xl border border-white/40 text-white hover:bg-white/10 transition-all duration-300"
              >
                View Our Work
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.main>
  );
}
