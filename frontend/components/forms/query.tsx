"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Toaster } from "sonner";
import { qToast, qInfo, qSuccess } from "@/lib/queuedToast";

type FormData = {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  sendCopy?: boolean;
};

export default function PricingInquiryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [confirmingData, setConfirmingData] = useState<FormData | null>(null);

  const onSubmit = async (data: FormData) => {
    console.log("Inquiry data:", data);
    setConfirmingData(data);
    setShowConfirmation(true);
    setShowTyping(true);

    qToast("Sending inquiry...");

    if (data.sendCopy && data.email) {
      console.log(`Will send a copy to ${data.email}`);
      qInfo("A copy will be sent to your email if provided.");
    }

    // Simulate processing/typing for better UX
    await new Promise((res) => setTimeout(res, 1400));
    setShowTyping(false);

    qSuccess("Inquiry submitted successfully! We'll contact you soon.");
    reset();
  };

  const btnGradient =
    "w-full relative cursor-pointer overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:from-blue-600 hover:to-indigo-700 active:scale-95 text-sm sm:text-base before:content-[''] before:pointer-events-none before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-white/20 before:skew-x-[-20deg] hover:before:left-[100%] before:transition-all before:duration-700";
  return (
    <section className="max-w-3xl mx-auto px-6 py-10">
      <Toaster position="top-center" richColors />
      <h2 className="text-3xl font-semibold text-center mb-6">
        Request a Custom Quote
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-card border border-border shadow-xl rounded-2xl p-6 space-y-5"
      >
        {/* Name */}
        <div>
          <Input
            type="text"
            placeholder="Your Name"
            {...register("name", { required: "Name is required" })}
            className="w-full border p-3 rounded-lg"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <Input
            type="email"
            placeholder="Your Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
            className="w-full border p-3 rounded-lg"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <Input
            type="text"
            placeholder="Company / Startup Name (Optional)"
            {...register("company")}
            className="w-full border p-3 rounded-lg"
          />
        </div>

        {/* Project Type */}
        <div>
          <select
            {...register("projectType", {
              required: "Project type is required",
            })}
            className="w-full min-h-12 border border-input bg-transparent p-3 rounded-lg text-foreground"
          >
            <option value="">Select Project Type</option>
            <option value="ecommerce">E-commerce Website</option>
            <option value="business">Business Website</option>
            <option value="portfolio">Portfolio Website</option>
            <option value="webapp">Web Application (SaaS)</option>
            <option value="mobileapp">Mobile App (Android/iOS)</option>
            <option value="crm">CRM / ERP System</option>
            <option value="ai">AI / Machine Learning Project</option>
            <option value="system">System Software</option>
            <option value="landing">Landing Page</option>
            <option value="custom">Custom Software</option>
          </select>
          {errors.projectType && (
            <p className="text-red-500 text-sm">{errors.projectType.message}</p>
          )}
        </div>

        {/* Budget */}
        <div>
          <select
            {...register("budget", {
              required: "Budget range is required",
            })}
            className="w-full min-h-12 border border-input bg-transparent p-3 rounded-lg text-foreground"
          >
            <option value="">Select Budget Range</option>
            <option>₹15,000 - ₹20,000</option>
            <option>₹20,000 - ₹25,000</option>
            <option>₹25,000 - ₹30,000</option>
            <option>₹30,000 - ₹35,000</option>
            <option>₹35,000 - ₹40,000</option>
            <option>₹40,000 - ₹45,000</option>
            <option>₹45,000 - ₹50,000</option>
            <option>₹50,000 - ₹60,000</option>
            <option>₹60,000 - ₹70,000</option>
            <option>₹70,000 - ₹80,000</option>
            <option>₹80,000 - ₹90,000</option>
            <option>₹90,000 - ₹1,00,000+</option>
          </select>
          {errors.budget && (
            <p className="text-red-500 text-sm">{errors.budget.message}</p>
          )}
        </div>

        {/* Timeline */}
        <div>
          <select
            {...register("timeline", {
              required: "Timeline is required",
            })}
            className="w-full min-h-12 border border-input bg-transparent p-3 rounded-lg text-foreground"
          >
            <option value="">Project Timeline</option>
            <option>1-2 Weeks</option>
            <option>2-4 Weeks</option>
            <option>1-2 Months</option>
            <option>2-3 Months</option>
            <option>Flexible</option>
          </select>
          {errors.timeline && (
            <p className="text-red-500 text-sm">{errors.timeline.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <textarea
            placeholder="Tell us about your project..."
            {...register("message", {
              required: "Project details are required",
            })}
            className="w-full min-h-32 rounded-lg border border-input bg-transparent p-3 text-base text-foreground placeholder:text-muted-foreground transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        {/* Send copy checkbox */}
        <div className="flex items-center gap-2">
          <input
            id="sendCopy"
            type="checkbox"
            {...register("sendCopy")}
            className="h-4 w-4"
          />
          <label htmlFor="sendCopy" className="text-sm">
            Send me a copy of this inquiry
          </label>
        </div>

        {/* Submit */}
        <button type="submit" disabled={isSubmitting} className={btnGradient}>
          {isSubmitting ? "Submitting..." : "Get Pricing Quote"}
        </button>
      </form>

      {/* Confirmation panel shown after submit */}
      {showConfirmation && confirmingData && (
        <div
          role="status"
          aria-live="polite"
          className="mt-6 rounded-lg border border-border bg-card p-4"
        >
          <p className="font-semibold">Thanks, {confirmingData.name}!</p>
          {showTyping ? (
            <p className="text-sm text-muted-foreground">
              Our team is reviewing your inquiry
              <span className="animate-pulse">...</span>
            </p>
          ) : (
            <>
              <p className="text-sm text-muted-foreground">
                We received your message and will contact you shortly.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                We typically respond within 24 hours.
              </p>
              <div className="mt-3">
                <button
                  className="text-sm text-blue-600 underline"
                  onClick={() => {
                    setShowConfirmation(false);
                    setConfirmingData(null);
                  }}
                >
                  Submit another inquiry
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </section>
  );
}
