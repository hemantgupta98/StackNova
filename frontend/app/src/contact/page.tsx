"use client";

import dynamic from "next/dynamic";
import { Input } from "@/components/ui/input";
import { motion, type Variants } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast, Toaster } from "sonner";
const Map = dynamic(() => import("@/components/ui/map"), {
  ssr: false,
  loading: () => <div className="h-100 w-full rounded-xl bg-muted" />,
});

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
const handleViewConatct = () => {
  document.getElementById("contact")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
export default function ContactPage() {
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

  const onSubmit: SubmitHandler<message> = async (data) => {
    console.log(data);
    try {
      const apiBase = (
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"
      ).replace(/\/$/, "");
      const res = await fetch(`${apiBase}/mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => null);
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
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" richColors />

      {/* Hero */}
      <section className="text-center py-16 px-6">
        <p className="text-sm text-blue-500 font-medium mb-3">
          START A CONVERSATION
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let’s Create Something{" "}
          <span className="text-purple-600">Extraordinary</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From AI solutions to scalable web platforms — we help you design,
          build, and launch products that stand out in today’s digital world.
        </p>
      </section>

      {/* Main Grid */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 pb-16"
      >
        {/* Form */}
        <div className="bg-card max-h-120 border border-border p-6 rounded-2xl shadow-sm">
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
              className="w-full bg-linear-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Secure Message"}
            </button>
          </form>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <div className="bg-card border border-border p-5 rounded-xl shadow-sm">
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="font-medium">hr.stacknova@gmail.com</p>
          </div>

          <div className="bg-card border border-border p-5 rounded-xl shadow-sm">
            <p className="text-sm text-muted-foreground">Phone</p>
            <p className="font-medium">+91 9867742834</p>
          </div>

          <div className="bg-card border border-border p-5 rounded-xl shadow-sm">
            <p className="text-sm text-muted-foreground">Address</p>
            <p className="font-medium">Namkum Ranchi, Jharkhand, 834010</p>
          </div>

          <div className="bg-muted  rounded-xl flex items-center justify-center text-muted-foreground"></div>
        </div>
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

              <button className="px-8 py-3 rounded-xl border border-white/40 text-white hover:bg-white/10 transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
