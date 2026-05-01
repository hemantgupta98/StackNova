"use client";

import Query from "@/components/forms/query";
import { CircleCheck } from "lucide-react";
import PricingFeatures from "@/components/ui/feature";

const btnGradient =
  "w-full relative cursor-pointer overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:from-blue-600 hover:to-indigo-700 active:scale-95 text-sm sm:text-base before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-white/20 before:skew-x-[-20deg] hover:before:left-[100%] before:transition-all before:duration-700";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-10">
      {/* Hero */}
      <div className="text-center mb-16">
        <p className="mb-2 text-sm text-blue-500">Transparent Pricing</p>
        <h2 className="mb-4 text-4xl font-bold">
          Simple Plans. Serious Power. <br />
          <span className="text-blue-600">Built to Scale With You</span>
        </h2>
        <p className="mx-auto max-w-xl text-muted-foreground">
          Everything you need to build, scale, and succeed without the
          complexity. <br /> Clear pricing. Maximum performance.
        </p>
      </div>

      <section className="mx-auto max-w-7xl scroll-mt-10 px-4 py-10 text-center sm:px-6 sm:py-16">
        <div>
          <h3 className="text-2xl font-semibold sm:text-3xl">
            Flexible Pricing Built for Modern Businesses
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            From simple websites to advanced AI systems choose a plan that fits
            your vision. No hidden costs. Just powerful solutions.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-card shadow-2xl transition-all duration-200 hover:scale-105">
            <p className="mb-2 text-center text-xs font-bold uppercase tracking-widest text-blue-600 sm:text-sm">
              Starter
            </p>
            <h1 className="mt-5 text-center text-lg font-semibold sm:text-xl">
              Basic Projects
            </h1>
            <p className="text-center text-xs text-muted-foreground sm:text-sm">
              Ideal for startups and individuals launching their first product
            </p>

            <h1 className="mt-8 text-2xl font-bold sm:text-4xl">
              ₹10,000 - ₹20,000
              <span className="text-xs text-muted-foreground sm:text-sm">
                {" "}
                /project
              </span>
            </h1>

            <div className="ml-6 mt-10 space-y-3 text-left text-sm sm:text-base">
              <p className="flex items-center gap-2">
                <CircleCheck className="text-blue-400" size={20} />
                <span className="text-muted-foreground">
                  Business Website (3-5 Pages)
                </span>
              </p>
              <p className="flex items-center gap-2">
                <CircleCheck className="text-blue-400" size={20} />
                <span className="text-muted-foreground">
                  Portfolio / Landing Page
                </span>
              </p>
              <p className="flex items-center gap-2">
                <CircleCheck className="text-blue-400" size={20} />
                <span className="text-muted-foreground">
                  Responsive UI Design
                </span>
              </p>
              <p className="flex items-center gap-2">
                <CircleCheck className="text-blue-400" size={20} />
                <span className="text-muted-foreground">Basic SEO Setup</span>
              </p>
              <p className="flex items-center gap-2">
                <CircleCheck className="text-blue-400" size={20} />
                <span className="text-muted-foreground">
                  Delivery in 7-14 Days
                </span>
              </p>
            </div>

            <div className="mb-5 mt-10 p-5 mx-4 sm:mx-auto sm:max-w-xs">
              <button className={btnGradient}>Get Your Website</button>
            </div>
          </div>

          <div className="relative rounded-xl border-2 border-border bg-card shadow-2xl transition-all duration-200 hover:scale-105 hover:shadow-blue-200">
            <p className="mb-2 text-center text-xs font-bold uppercase tracking-widest text-transparent bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text sm:text-sm">
              Pro
            </p>
            <h1 className="mt-5 text-center text-lg font-semibold sm:text-2xl">
              Business Solutions
            </h1>
            <p className="text-center text-xs text-muted-foreground sm:text-sm">
              Perfect for growing businesses and institutions
            </p>

            <h1 className="mt-8 text-2xl font-bold sm:text-4xl">
              ₹25,000 - ₹50,000
              <span className="text-xs text-muted-foreground sm:text-sm">
                {" "}
                /project
              </span>
            </h1>

            <div className="ml-6 mt-10 space-y-3 text-left text-sm sm:text-base">
              <p className="flex items-center gap-2">
                <CircleCheck className="text-blue-400" size={20} />
                <span className="text-muted-foreground">
                  E-commerce Website (Full Setup)
                </span>
              </p>
              <p className="flex items-center gap-2">
                <CircleCheck className="text-blue-400" size={20} />
                <span className="text-muted-foreground">
                  College / School Management System
                </span>
              </p>
              <p className="flex items-center gap-2">
                <CircleCheck className="text-blue-400" size={20} />
                <span className="text-muted-foreground">
                  Admin Dashboard + Analytics
                </span>
              </p>
              <p className="flex items-center gap-2">
                <CircleCheck className="text-blue-400" size={20} />
                <span className="text-muted-foreground">
                  Authentication and Database Integration
                </span>
              </p>
              <p className="flex items-center gap-2">
                <CircleCheck className="text-blue-400" size={20} />
                <span className="text-muted-foreground">
                  Payment Gateway Integration
                </span>
              </p>
              <p className="flex items-center gap-2">
                <CircleCheck className="text-blue-400" size={20} />
                <span className="text-muted-foreground">Priority Support</span>
              </p>
            </div>

            <div className="mb-5 mt-10 p-5 mx-4 sm:mx-auto sm:max-w-xs">
              <button className={btnGradient}>Start Your Project</button>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card shadow-2xl transition-all duration-200 hover:scale-105">
            <p className="mb-2 text-center text-xs font-bold uppercase tracking-widest text-indigo-600 sm:text-sm">
              Enterprise
            </p>
            <h1 className="mt-5 text-center text-lg font-semibold sm:text-xl">
              Custom Solutions
            </h1>
            <p className="text-center text-xs text-muted-foreground sm:text-sm">
              Built for enterprises, startups, and advanced products
            </p>

            <h1 className="mt-8 text-2xl font-bold sm:text-4xl">
              Custom Pricing
            </h1>

            <div className="ml-6 mt-10 space-y-3 text-left text-sm sm:text-base">
              <p className="flex items-center gap-2">
                <CircleCheck className="text-blue-400" size={20} />
                <span className="text-muted-foreground">
                  Custom Software Development
                </span>
              </p>
              <p className="flex items-center gap-2">
                <CircleCheck className="text-blue-400" size={20} />
                <span className="text-muted-foreground">
                  AI-Based Applications
                </span>
              </p>
              <p className="flex items-center gap-2">
                <CircleCheck className="text-blue-400" size={20} />
                <span className="text-muted-foreground">
                  Scalable SaaS Platforms
                </span>
              </p>
              <p className="flex items-center gap-2">
                <CircleCheck className="text-blue-400" size={20} />
                <span className="text-muted-foreground">
                  Cloud and Server Architecture
                </span>
              </p>
              <p className="flex items-center gap-2">
                <CircleCheck className="text-blue-400" size={20} />
                <span className="text-muted-foreground">
                  Dedicated Development Team
                </span>
              </p>
              <p className="flex items-center gap-2">
                <CircleCheck className="text-blue-400" size={20} />
                <span className="text-muted-foreground">
                  24/7 Priority Support
                </span>
              </p>
            </div>

            <div className="mb-5 mt-10 p-5 mx-4 sm:mx-auto sm:max-w-xs">
              <button className={btnGradient}>Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      <div className="mb-20">
        <h3 className="mb-6 text-center text-2xl font-bold">Plan Deep-Dive</h3>
        <PricingFeatures />
      </div>

      <Query />
    </div>
  );
}
