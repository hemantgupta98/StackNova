"use client";

import Query from "@/components/forms/query";
import { CircleCheck } from "lucide-react";
import PricingFeatures from "@/components/ui/feature";

const btnGradient =
  "w-full relative cursor-pointer overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:from-blue-600 hover:to-indigo-700 active:scale-95 text-sm sm:text-base before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-white/20 before:skew-x-[-20deg] hover:before:left-[100%] before:transition-all before:duration-700";

export default function PricingPage() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-800 px-6 py-10">
        {/* Hero */}
        <div className="text-center mb-16">
          <p className="text-sm text-blue-500 mb-2">Transparent Pricing</p>
          <h2 className="text-4xl font-bold mb-4">
            Simple Plans. Serious Power. <br />
            <span className="text-blue-600">Built to Scale With You</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Everything you need to build, scale, and succeed—without the
            complexity. <br /> Clear pricing. Maximum performance.
          </p>
        </div>

        {/* Pricing Cards */}

        <section className="px-4 sm:px-6 py-10 sm:py-16 max-w-7xl mx-auto text-center scroll-mt-10">
          {/* Header */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Flexible Pricing Built for Modern Businesses
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              From simple websites to advanced AI systems — choose a plan that
              fits your vision. No hidden costs. Just powerful solutions.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-6 sm:gap-8">
            {/* ================= Starter Card ================= */}
            <div className="bg-gray-50 rounded-xl shadow-2xl hover:scale-105 transition-all duration-200">
              <p className="text-center text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">
                Starter
              </p>
              <h1 className="text-center text-lg sm:text-xl font-semibold mt-5">
                Basic Projects
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 text-center">
                Ideal for startups & individuals launching their first product
              </p>

              <h1 className="text-2xl sm:text-4xl font-bold mt-8">
                ₹10,000 – ₹20,000
                <span className="text-xs sm:text-sm text-gray-600">
                  {" "}
                  /project
                </span>
              </h1>

              <div className="text-left space-y-3 ml-6 mt-10 text-sm sm:text-base">
                <p className="flex items-center gap-2">
                  <CircleCheck className="text-blue-400" size={20} />
                  <span className="text-gray-600">
                    Business Website (3–5 Pages)
                  </span>
                </p>

                <p className="flex items-center gap-2">
                  <CircleCheck className="text-blue-400" size={20} />
                  <span className="text-gray-600">
                    Portfolio / Landing Page
                  </span>
                </p>

                <p className="flex items-center gap-2">
                  <CircleCheck className="text-blue-400" size={20} />
                  <span className="text-gray-600">Responsive UI Design</span>
                </p>

                <p className="flex items-center gap-2">
                  <CircleCheck className="text-blue-400" size={20} />
                  <span className="text-gray-600">Basic SEO Setup</span>
                </p>

                <p className="flex items-center gap-2">
                  <CircleCheck className="text-blue-400" size={20} />
                  <span className="text-gray-600">Delivery in 7–14 Days</span>
                </p>
              </div>

              <div className="p-5 mt-10 mx-4 sm:mx-auto sm:max-w-xs mb-5">
                <button className={btnGradient}>Get Your Website</button>
              </div>
            </div>

            {/* ================= Popular Card ================= */}
            <div className="relative bg-gray-50 rounded-xl shadow-2xl border-2 border-gray-300 hover:scale-105 hover:shadow-blue-200 transition-all duration-200">
              <p className="text-center text-xs sm:text-sm font-bold uppercase tracking-widest bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                Pro
              </p>
              <h1 className="text-center text-lg sm:text-2xl font-semibold mt-5">
                Business Solutions
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 text-center">
                Perfect for growing businesses & institutions
              </p>

              <h1 className="text-2xl sm:text-4xl font-bold mt-8">
                ₹25,000 – ₹50,000
                <span className="text-xs sm:text-sm text-gray-600">
                  {" "}
                  /project
                </span>
              </h1>

              <div className="text-left space-y-3 ml-6 mt-10 text-sm sm:text-base">
                <p className="flex items-center gap-2">
                  <CircleCheck className="text-blue-400" size={20} />
                  <span className="text-gray-600">
                    E-commerce Website (Full Setup)
                  </span>
                </p>

                <p className="flex items-center gap-2">
                  <CircleCheck className="text-blue-400" size={20} />
                  <span className="text-gray-600">
                    College / School Management System
                  </span>
                </p>

                <p className="flex items-center gap-2">
                  <CircleCheck className="text-blue-400" size={20} />
                  <span className="text-gray-600">
                    Admin Dashboard + Analytics
                  </span>
                </p>

                <p className="flex items-center gap-2">
                  <CircleCheck className="text-blue-400" size={20} />
                  <span className="text-gray-600">
                    Authentication & Database Integration
                  </span>
                </p>

                <p className="flex items-center gap-2">
                  <CircleCheck className="text-blue-400" size={20} />
                  <span className="text-gray-600">
                    Payment Gateway Integration
                  </span>
                </p>

                <p className="flex items-center gap-2">
                  <CircleCheck className="text-blue-400" size={20} />
                  <span className="text-gray-600">Priority Support</span>
                </p>
              </div>

              <div className="p-5 mt-10 mx-4 sm:mx-auto sm:max-w-xs mb-5">
                <button className={btnGradient}>Start Your Project</button>
              </div>
            </div>

            {/* ================= Enterprise Card ================= */}
            <div className="bg-gray-50 rounded-xl shadow-2xl hover:scale-105 transition-all duration-200">
              <p className="text-center text-xs sm:text-sm font-bold uppercase tracking-widest text-indigo-600 mb-2">
                Enterprise
              </p>
              <h1 className="text-center text-lg sm:text-xl font-semibold mt-5">
                Custom Solutions
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 text-center">
                Built for enterprises, startups & advanced products
              </p>

              <h1 className="text-2xl sm:text-4xl font-bold mt-8">
                Custom Pricing
              </h1>

              <div className="text-left space-y-3 ml-6 mt-10 text-sm sm:text-base">
                <p className="flex items-center gap-2">
                  <CircleCheck className="text-blue-400" size={20} />
                  <span className="text-gray-600">
                    Custom Software Development
                  </span>
                </p>

                <p className="flex items-center gap-2">
                  <CircleCheck className="text-blue-400" size={20} />
                  <span className="text-gray-600">AI-Based Applications</span>
                </p>

                <p className="flex items-center gap-2">
                  <CircleCheck className="text-blue-400" size={20} />
                  <span className="text-gray-600">Scalable SaaS Platforms</span>
                </p>

                <p className="flex items-center gap-2">
                  <CircleCheck className="text-blue-400" size={20} />
                  <span className="text-gray-600">
                    Cloud & Server Architecture
                  </span>
                </p>

                <p className="flex items-center gap-2">
                  <CircleCheck className="text-blue-400" size={20} />
                  <span className="text-gray-600">
                    Dedicated Development Team
                  </span>
                </p>

                <p className="flex items-center gap-2">
                  <CircleCheck className="text-blue-400" size={20} />
                  <span className="text-gray-600">24/7 Priority Support</span>
                </p>
              </div>

              <div className="p-5 mt-10 mx-4 sm:mx-auto sm:max-w-xs mb-5">
                <button className={btnGradient}>Contact Us</button>
              </div>
            </div>
          </div>
        </section>

        {/**feature */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Plan Deep-Dive
          </h3>
          <PricingFeatures />
        </div>

        {/* FAQ */}

        <Query />
      </div>
    </>
  );
}
