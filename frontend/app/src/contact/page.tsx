"use client";

import { Input } from "@/components/ui/input";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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
        <p className="text-sm text-blue-600 font-medium mb-3">
          CONNECT WITH US
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let’s Build the Future Together
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind? We specialize in AI-driven solutions and
          high-performance engineering.
        </p>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 pb-16">
        {/* Form */}
        <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
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
            <p className="font-medium">hello@stacknova.ai</p>
          </div>

          <div className="bg-card border border-border p-5 rounded-xl shadow-sm">
            <p className="text-sm text-muted-foreground">Phone</p>
            <p className="font-medium">+1 (555) 012-3456</p>
          </div>

          <div className="bg-card border border-border p-5 rounded-xl shadow-sm">
            <p className="text-sm text-muted-foreground">Address</p>
            <p className="font-medium">San Francisco, USA</p>
          </div>

          <div className="bg-muted h-40 rounded-xl flex items-center justify-center text-muted-foreground">
            Map Preview
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-linear-to-r from-blue-100 to-purple-100 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm text-blue-600 mb-2">
              FAST TRACK YOUR PROJECT
            </p>
            <h3 className="text-2xl font-bold mb-2">
              Book a 15-min Discovery Call
            </h3>
            <p className="text-muted-foreground text-sm">
              Speak directly with our expert to discuss your requirements.
            </p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Schedule Now
          </button>
        </div>
      </section>
    </div>
  );
}
