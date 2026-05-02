"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { toast, Toaster } from "sonner";

const team = [
  {
    name: "Hemant Gupta",
    role: "AI Full Stack Developer",
    experience: "8 Months Experience",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "JavaScript",
      "TypeScript",
      "Python",
      "OpenAI API",
      "LangChain",
      "REST APIs",
      "GraphQL",
      "Docker",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    image: "/pic3.png",
    desc: "Focused on building scalable web applications and solving real-world problems with clean architecture.",
  },
  {
    name: "Sourav Verma",
    role: "Frontend Developer",
    experience: "3 Months Experience",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
      "UI/UX Principles",
      "Framer Motion",
    ],
    image: "/sourav.jpeg",
    desc: "Passionate about crafting modern UI/UX and building fast, responsive frontend experiences.",
  },
];

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

const imageHover3D: Variants = {
  hover: {
    scale: 1.1,
    rotateY: 8,
    rotateX: 5,
    transition: { type: "spring" as const, stiffness: 120 },
  },
};

const textFade = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.6 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const founderDetails = {
  summary:
    "Hemant Gupta is a final-year BCA student at Jharkhand Rai University, Ranchi, driven by a deep passion for AI and full-stack engineering. At just 20, he is focused on building impactful, future-ready digital products that blend intelligent systems with modern web technologies.",

  highlights: [
    "Passionate about AI-driven innovation and real-world problem solving",
    "Focused on building scalable and user-centric digital experiences",
    "Continuously learning, experimenting, and pushing boundaries in tech",
  ],
};

const coFounderDetails = {
  summary:
    "Sourav Verma is a final-year BCA student at Jharkhand Rai University, Ranchi, with a strong passion for modern web technologies and frontend development. At 20, he is dedicated to crafting clean, responsive, and user-focused interfaces that bring ideas to life.",

  highlights: [
    "Focused on modern frontend development and UI excellence",
    "Passionate about creating responsive and engaging user experiences",
    "Continuously exploring new web technologies and design trends",
  ],
};

export default function TeamPage() {
  const [showFounderDetails, setShowFounderDetails] = useState(false);
  const [showCoFounderDetails, setshowCoFounderDetails] = useState(false);

  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Hero */}
      <Toaster position="top-center" richColors />

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textFade}
        className="text-center py-20 px-6"
      >
        <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase">
          Our Culture
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
          Meet the{" "}
          <motion.span
            className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-size-[200%_200%] bg-clip-text text-transparent inline-block"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Visionaries Behind Innovation
          </motion.span>
        </h2>

        <motion.p
          className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We are a collective of forward-thinkers, designers, and engineers
          driven by a shared passion for crafting intelligent digital
          experiences. By combining cutting-edge AI with human-centered design,
          we transform ideas into scalable, impactful solutions that shape the
          future.
        </motion.p>
      </motion.section>

      <div className="space-y-6">
        {/* Founder */}
        <section className="max-w-5xl mx-auto px-6">
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
            className="group border border-border rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-6 items-center bg-background/60 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="w-28 aspect-square rounded-full bg-linear-to-br from-blue-500 to-purple-500 p-0.5 shrink-0">
              <motion.div
                className="relative w-full h-full overflow-hidden rounded-full bg-muted"
                variants={imageHover3D}
                whileHover="hover"
              >
                <Image
                  src="/pic3.png"
                  alt="logo"
                  fill
                  className="object-cover object-center transition group-hover:scale-110"
                />
              </motion.div>
            </div>

            {/* Content */}
            <div className="text-center md:text-left">
              <p className="text-sm text-blue-500 font-semibold tracking-wide">
                Founder & CEO
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mt-1">
                Hemant Gupta
              </h3>

              <p className="text-muted-foreground mt-3 italic leading-relaxed">
                “I believe technology should amplify human potential, not
                replace it. My vision is to build intelligent systems that
                empower businesses to scale, innovate, and lead in a
                digital-first world.”
              </p>

              <button
                type="button"
                onClick={() => setShowFounderDetails((current) => !current)}
                className="mt-5 inline-flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-500/15"
                aria-expanded={showFounderDetails}
              >
                {showFounderDetails ? "Hide Founder Details" : "Know More"}
              </button>

              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={
                  showFounderDetails
                    ? { opacity: 1, height: "auto" }
                    : { opacity: 0, height: 0 }
                }
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                {showFounderDetails && (
                  <div className="mt-5 rounded-2xl border border-border bg-muted/40 p-4 text-left backdrop-blur-sm md:max-w-xl">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {founderDetails.summary}
                    </p>

                    <ul className="mt-4 space-y-2 text-sm text-foreground">
                      {founderDetails.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Co-Founder */}
        <section className="max-w-5xl mx-auto px-6">
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
            className="group border border-border rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-6 items-center bg-background/60 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="w-28 aspect-square rounded-full bg-linear-to-br from-blue-500 to-purple-500 p-0.5 shrink-0">
              <motion.div
                variants={imageHover3D}
                whileHover="hover"
                className="relative w-full h-full overflow-hidden rounded-full bg-muted"
              >
                <Image
                  src="/sourav.jpeg"
                  alt="logo"
                  fill
                  className="object-cover object-center transition group-hover:scale-110"
                />
              </motion.div>
            </div>

            {/* Content */}
            <div className="text-center md:text-left">
              <p className="text-sm text-purple-500 font-semibold tracking-wide">
                Co-Founder & CTO
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mt-1">
                Sourav Verma
              </h3>

              <p className="text-muted-foreground mt-3 italic leading-relaxed">
                “Innovation comes from solving real problems. I focus on
                building scalable, efficient, and future-ready systems that turn
                ideas into impactful digital experiences.”
              </p>

              <button
                type="button"
                onClick={() => setshowCoFounderDetails((current) => !current)}
                className="mt-5 inline-flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-500/15"
                aria-expanded={showCoFounderDetails}
              >
                {showCoFounderDetails ? "Hide Co-Founder Details" : "Know More"}
              </button>

              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={
                  showCoFounderDetails
                    ? { opacity: 1, height: "auto" }
                    : { opacity: 0, height: 0 }
                }
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                {showCoFounderDetails && (
                  <div className="mt-5 rounded-2xl border border-border bg-muted/40 p-4 text-left backdrop-blur-sm md:max-w-xl">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {coFounderDetails.summary}
                    </p>

                    <ul className="mt-4 space-y-2 text-sm text-foreground">
                      {coFounderDetails.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Team Grid */}
      <section className="px-6 md:px-16 py-16 mt-10">
        <h3 className="text-2xl font-semibold bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2 text-center">
          The Core Team
        </h3>
        <p className="text-muted-foreground text-sm text-center mb-10 max-w-2xl mx-auto">
          Just two passionate minds, working day and night to turn a shared
          vision into reality—building not just projects, but a dream that grows
          with every line of code.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={i}
              variants={card3DVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{
                rotateY: i % 2 === 0 ? 8 : -8,
                rotateX: 6,
                scale: 1.05,
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
              }}
              className="group border border-border rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 bg-background/60 backdrop-blur-md"
            >
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto rounded-full bg-linear-to-br from-blue-500 to-purple-500 p-0.5">
                <motion.div
                  className="relative w-full h-full rounded-full bg-muted overflow-hidden"
                  whileHover={{
                    scale: 1.15,
                    rotateY: 10,
                  }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center transition group-hover:scale-110"
                  />
                </motion.div>
              </div>

              {/* Name */}
              <h4 className="mt-4 font-semibold text-lg">{member.name}</h4>

              {/* Role */}
              <p className="text-blue-600 text-sm font-medium">{member.role}</p>

              {/* Experience */}
              <p className="text-xs text-muted-foreground mt-1">
                {member.experience}
              </p>

              {/* Description */}
              <p className="text-muted-foreground text-sm mt-3">
                {member.desc}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {member.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
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
          className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-2xl"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              We’re Not Just Building Products — <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
                We’re Building Dreams Together
              </span>
            </h3>

            <p className="mt-5 text-white/80 max-w-2xl mx-auto text-lg">
              Our team is a passionate group of creators, thinkers, and
              innovators working together to shape the future. While we’re not
              hiring right now, we’re always excited to connect with talented
              individuals who share our vision.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() =>
                  toast.info(
                    "We currently do not have any open positions available",
                  )
                }
                className="px-8 py-3 rounded-xl bg-white text-blue-600 font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Join the Team
              </button>

              <button className="px-8 py-3 rounded-xl border border-white/40 text-white hover:bg-white/10 transition-all duration-300">
                Stay Connected
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
