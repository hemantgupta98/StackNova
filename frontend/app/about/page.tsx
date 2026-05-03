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
      type: "spring" as const,
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
      {/* Hero Section */}
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
            Building Future with <br />
            <span className="text-blue-600">AI & Scalable</span> Solutions
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Accelerate your business evolution. We engineer high-performance web
            applications and custom AI agents that scale with your vision.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex justify-center gap-4"
          >
            <button
              type="submit"
              onClick={() => router.push("/service")}
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
            >
              Get Started
            </button>
            <button
              type="submit"
              onClick={() => router.push("/projects")}
              className="px-6 py-3 rounded-xl border border-gray-300 text-gray-400 font-medium hover:bg-gray-100 transition"
            >
              View Projects
            </button>
          </motion.div>
        </motion.div>

        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-50 via-white to-purple-50" />
      </motion.section>

      {/* Features Row */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Software Devlopment",
            "AI Vision",
            "Microservices",
            "System Design",
          ].map((item) => (
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
              key={item}
              className="relative rounded-2xl p-px 
    bg-linear-to-br from-indigo-500/40 via-purple-500/30 to-pink-500/40
    transition-all duration-500
    hover:shadow-[0_20px_60px_-10px_rgba(99,102,241,0.5)]"
            >
              <div
                className="rounded-2xl px-6 py-5 text-center
      bg-white/70 backdrop-blur-xl
      border border-white/30
      shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]"
              >
                <p className="text-sm font-medium text-gray-700">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 pb-24">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div>
            <motion.span
              variants={fadeUp}
              className="text-sm tracking-wider uppercase text-blue-600 font-semibold"
            >
              About StackNova IN
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight"
            >
              Building <span className="text-blue-600">Real Solutions</span> for
              the Future of <span className="text-purple-600">AI</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-gray-600 text-lg leading-relaxed"
            >
              <span className="font-semibold text-gray-900">StackNova IN</span>{" "}
              is a modern freelancing company founded by{" "}
              <span className="font-semibold">Hemant Gupta</span> and{" "}
              <span className="font-semibold">Sourav Verma</span>. We are final
              year BCA students from{" "}
              <span className="font-semibold">
                Jharkhand Rai University, Ranchi
              </span>
              , driven by a strong passion for technology and innovation.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-gray-600 text-lg leading-relaxed"
            >
              Our mission is not just to deliver projects, but to solve{" "}
              <span className="font-semibold text-gray-900">
                real-world problems
              </span>{" "}
              using scalable systems and intelligent solutions. We believe the
              future belongs to those who can blend{" "}
              <span className="font-semibold">engineering excellence</span> with{" "}
              <span className="font-semibold text-purple-600">
                AI-driven innovation
              </span>
              .
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-gray-600 text-lg leading-relaxed"
            >
              At StackNova IN, we are focused on building high-performance
              applications, exploring cutting-edge AI technologies, and creating
              solutions that are not only efficient but also{" "}
              <span className="font-semibold">future-ready</span>. Our long-term
              vision is to grow into a company that contributes meaningful
              innovation in the global AI ecosystem.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8">
              <button
                type="submit"
                onClick={() => router.push("/contact")}
                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition cursor-pointer"
              >
                Work With Us
              </button>
            </motion.div>
          </div>

          {/* Right Premium Cards */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "2", label: "Founders" },
              { value: "BCA", label: "Final Year" },
              { value: "AI", label: "Focused Vision" },
              { value: "2026", label: "Founded" },
            ].map((item) => (
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
                key={item.label}
                className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition"
              >
                <p className="text-3xl font-extrabold text-blue-600">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-gray-600 font-medium">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      {/**cta */}

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
              Let’s Build Something <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-yellow-300 to-pink-300">
                Meaningful with AI & Innovation
              </span>
            </h3>

            <p className="mt-5 text-white/80 max-w-2xl mx-auto text-lg">
              At StackNova IN, we don’t just create projects — we craft
              solutions that solve real-world problems. As passionate developers
              and AI enthusiasts, we help startups and businesses turn ideas
              into scalable digital products with future-ready technology.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => router.push("/service")}
                className="px-8 py-3 rounded-xl bg-white text-blue-600 font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Explore Our Services
              </button>

              <button
                onClick={() => router.push("/contact")}
                className="px-8 py-3 rounded-xl border border-white/40 text-white hover:bg-white/10 transition-all duration-300"
              >
                Start a Project
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.main>
  );
}
