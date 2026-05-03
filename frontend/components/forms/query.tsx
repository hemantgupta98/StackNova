"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Toaster } from "sonner";
import axios from "axios";

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

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Inquiry data:", data);
    try {
      const apiBase = (
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"
      ).replace(/\/$/, "");
      const res = await axios(`${apiBase}/query`, {
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

        {/* Submit */}
        <button type="submit" disabled={isSubmitting} className={btnGradient}>
          {isSubmitting ? "Submitting..." : "Get Pricing Quote"}
        </button>
      </form>
    </section>
  );
}
