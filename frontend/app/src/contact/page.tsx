"use client";

import dynamic from "next/dynamic";
import { Input } from "@/components/ui/input";

import { useForm, SubmitHandler } from "react-hook-form";

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
      {/* Navbar */}

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
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 pb-16">
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

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl p-px bg-linear-to-r from-blue-500 via-purple-500 to-pink-500">
          {/* Glass Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Content */}
            <div className="max-w-xl">
              <p className="text-xs tracking-widest text-blue-600 font-semibold mb-3 uppercase">
                Limited Slots Available
              </p>

              <h3 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
                Let’s Build Something
                <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Powerful Together
                </span>
              </h3>

              <p className="text-gray-600 text-sm md:text-base">
                Book a free 15-minute strategy call and get expert guidance,
                tech recommendations, and a clear roadmap for your project.
              </p>
            </div>

            {/* Right CTA */}
            <div className="flex flex-col items-center gap-3">
              <button className="group relative inline-flex items-center justify-center px-7 py-3 font-semibold text-white bg-linear-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Schedule a Call
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>

              <p className="text-xs text-gray-500">
                No commitment • Free consultation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
