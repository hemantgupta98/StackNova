"use client";

import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import ScheduleModal from "@/components/ui/schedule-modal";
import axios from "axios";

type message = {
  name: string;
  email: string;
  company: string;
  message: string;
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

const handleViewConatct = () => {
  document.getElementById("contact")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
export default function ContactPage() {
  const [scheduleCall, setScheduleCall] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<message>({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const onSubmit: SubmitHandler<message> = async (data) => {
    console.log(data);
    try {
      const apiBase = (
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"
      ).replace(/\/$/, "");
      const res = await axios(`${apiBase}/mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data,
      });

      if (res.status < 200 || res.status >= 300) {
        const err = res.data ?? null;
        const msg =
          err?.error ||
          "There was an error sending your message. Please try again later.";
        alert(msg);
      } else {
        alert("Thanks — your message was sent.");
        reset();
      }
    } catch (error) {
      console.error(error);
      alert("There was an error sending your message. Please try again later.");
    }
  };
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-background text-foreground"
    >
      {/* Hero */}
      <motion.section
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center py-16 px-6"
      >
        <motion.p
          variants={fadeUp}
          className="text-sm text-blue-500 font-medium mb-3"
        >
          START A CONVERSATION
        </motion.p>
        <motion.div style={{ y: yParallax }}></motion.div>
        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Let’s Create Something{" "}
          <span className="text-purple-600">Extraordinary</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          From AI solutions to scalable web platforms — we help you design,
          build, and launch products that stand out in today’s digital world.
        </motion.p>
      </motion.section>

      {/* Main Grid */}
      <motion.section
        id="contact"
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 pb-16"
      >
        {/* Form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{
            rotateY: 6,
            rotateX: 6,
            scale: 1.03,
          }}
          className="bg-card max-h-120 border border-border p-6 rounded-2xl shadow-sm"
        >
          <h3 className="text-xl font-semibold mb-4">Send a Message</h3>

          {/* Form logic added below - UI structure unchanged */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input
                type="text"
                placeholder="Full Name"
                className="w-full"
                {...register("name", { required: "Full name is required" })}
              />
              {errors.name && (
                <p className="text-sm text-red-600 col-span-full">
                  {errors.name.message}
                </p>
              )}
              <Input
                type="email"
                placeholder="Email Address"
                className="w-full"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please provide a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-sm text-red-600 col-span-full">
                  {errors.email.message}
                </p>
              )}
            </div>

            <Input
              type="text"
              placeholder="Company (Optional)"
              className="w-full mb-4"
              {...register("company")}
            />

            <textarea
              placeholder="Your message..."
              rows={5}
              className="w-full mb-4 rounded-lg border border-input bg-transparent p-3 text-base text-foreground placeholder:text-muted-foreground transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <p className="text-sm text-red-600 mb-4">
                {errors.message.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-linear-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg disabled:opacity-60 cursor-pointer"
            >
              {isSubmitting ? "Sending..." : "Send Secure Message"}
            </button>
          </form>
        </motion.div>

        {/* Info */}
        <div className="space-y-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{
              rotateY: 6,
              rotateX: 6,
              scale: 1.03,
            }}
            className="bg-card border border-border p-5 rounded-xl shadow-sm"
          >
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="font-medium">
              hrstacknova@gmail.com , hemantgupta8800@gmail.com
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{
              rotateY: 6,
              rotateX: 6,
              scale: 1.03,
            }}
            className="bg-card border border-border p-5 rounded-xl shadow-sm"
          >
            <p className="text-sm text-muted-foreground">Phone</p>
            <p className="font-medium">+91 9867742834 , 7061338208</p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{
              rotateY: 6,
              rotateX: 6,
              scale: 1.03,
            }}
            className="bg-card border border-border p-5 rounded-xl shadow-sm"
          >
            <p className="text-sm text-muted-foreground">Address</p>
            <p className="font-medium">Namkum Ranchi, Jharkhand, 834010</p>
          </motion.div>

          <div className="bg-muted  rounded-xl flex items-center justify-center text-muted-foreground"></div>
        </div>
      </motion.section>

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
              Let’s Turn Your Ideas Into Reality <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-yellow-300 to-pink-300">
                Start a Conversation With Us
              </span>
            </h3>

            <p className="mt-5 text-white/80 max-w-2xl mx-auto text-lg">
              Have an idea, project, or collaboration in mind? We’d love to hear
              from you. Our team is always ready to connect, understand your
              vision, and help bring it to life with the right strategy and
              technology.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleViewConatct}
                className="px-8 py-3 rounded-xl bg-white text-blue-600 font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Get in Touch
              </button>

              <button
                onClick={() => setScheduleCall(true)}
                className="px-8 py-3 rounded-xl border border-white/40 text-white hover:bg-white/10 transition-all duration-300"
              >
                Schedule a Call
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      <ScheduleModal
        scheduleCall={scheduleCall}
        setScheduleCall={setScheduleCall}
      />
    </motion.div>
  );
}
