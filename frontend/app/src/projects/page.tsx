"use client";

import { motion, type Variants } from "framer-motion";
import Projects from "@/components/ui/project";

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
const handleViewProject = () => {
  document.getElementById("project")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
export default function Home() {
  return (
    <main className="bg-linear-to-b from-background to-muted/40 text-foreground min-h-screen">
      {/* Hero */}
      <section className="text-center py-20 px-6">
        <p className="text-sm text-blue-500 font-medium tracking-widest uppercase">
          Case Study · Deep Tech
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
          AuraLink:{" "}
          <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            AI-Driven Fleet Management
          </span>
        </h2>

        <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
          Revolutionizing logistics with predictive maintenance and real-time
          route optimization for enterprise fleets.
        </p>
      </section>

      {/* Content */}
      <section className="grid md:grid-cols-3 gap-10 px-6 md:px-16 py-12">
        {/* LEFT */}
        <div className="md:col-span-2 space-y-12">
          {/* Challenge */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl shadow-md border bg-background/60 backdrop-blur"
          >
            <h3 className="text-xl font-semibold mb-2">The Challenge</h3>
            <p className="text-muted-foreground">
              The client struggled with fuel costs and downtime due to lack of
              real-time insights and inefficient logistics systems.
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl shadow-md border bg-background/60 backdrop-blur"
          >
            <h3 className="text-xl font-semibold mb-4">The Solution</h3>

            <p className="text-muted-foreground">
              We built a distributed AI middleware using predictive analytics
              and dynamic routing to improve efficiency and reduce downtime.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                {
                  title: "Edge-First Architecture",
                  desc: "Local processing for faster decisions.",
                },
                {
                  title: "Predictive AI Engine",
                  desc: "Detects failures before they happen.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-xl border bg-muted/40 hover:shadow-lg transition"
                >
                  <h4 className="font-semibold text-blue-600">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Outcome */}
          <div>
            <h3 className="text-xl font-semibold mb-6">The Outcome</h3>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { value: "+42%", label: "Efficiency Boost" },
                { value: "-28%", label: "Downtime" },
                { value: "$3.2M", label: "Annual Savings" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.05 }}
                  className="p-5 rounded-xl border text-center bg-background shadow-sm hover:shadow-lg transition"
                >
                  <h4 className="text-2xl font-bold text-blue-600">
                    {item.value}
                  </h4>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="mt-8 p-6 rounded-2xl bg-muted/50 backdrop-blur border shadow-sm">
              <p className="italic text-muted-foreground">
                &quot;StackNova didn’t just build an app; they transformed our
                data strategy and improved delivery efficiency.&quot;
              </p>
              <p className="mt-3 font-semibold">— Hemant Gupta</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl border shadow-md bg-background">
            <h4 className="font-semibold mb-4">Project Quick Facts</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>Client: Global Logistics Corp</li>
              <li>Timeline: 2 Months</li>
              <li>Team Size: 2 Engineers</li>
              <li>Platform: Web & Mobile</li>
            </ul>
          </div>

          {/* CTA (UPGRADED 🔥) */}
          <div className="p-6 rounded-2xl bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg">
            <h4 className="font-semibold text-lg">Have a similar project?</h4>
            <p className="text-sm mt-2 opacity-90">
              Let’s build something powerful together using AI & modern tech.
            </p>

            <button className="mt-5 bg-white text-blue-600 px-5 py-2 rounded-lg font-medium hover:scale-105 transition">
              Start Your Project →
            </button>
          </div>
        </div>
      </section>

      {/* Projects Showcase (NEW 🔥) */}
      <section id="project">
        <Projects />
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
              Turning Ideas Into Impactful Products <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-yellow-300 to-pink-300">
                2 Projects Delivered Successfully
              </span>
            </h3>

            <p className="mt-5 text-white/80 max-w-2xl mx-auto text-lg">
              From innovative startups to scalable digital platforms, we’ve
              helped bring ideas to life through design, development, and
              strategy. Every project we build reflects our commitment to
              quality, performance, and real-world impact.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleViewProject}
                className="px-8 py-3 rounded-xl bg-white text-blue-600 font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                View Projects
              </button>

              <button className="px-8 py-3 rounded-xl border border-white/40 text-white hover:bg-white/10 transition-all duration-300">
                See Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
