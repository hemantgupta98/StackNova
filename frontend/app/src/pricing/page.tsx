"use client";

import React from "react";
import Image from "next/image";

const plans = [
  {
    name: "Starter",
    price: 49,
    features: [
      "5,000 AI Requests/mo",
      "Standard Support",
      "1 Project Deployment",
      "Custom Domain",
    ],
    button: "Choose Starter",
    highlighted: false,
  },
  {
    name: "Professional",
    price: 149,
    features: [
      "50,000 AI Requests/mo",
      "Priority 24/7 Support",
      "10 Project Deployments",
      "Custom Domain & SSL",
      "Advanced Analytics",
    ],
    button: "Selected Plan",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: 499,
    features: [
      "Unlimited AI Requests",
      "Dedicated Manager",
      "Unlimited Deployments",
      "Global Delivery",
      "Advanced Analytics",
    ],
    button: "Choose Enterprise",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-10">
      {/* Navbar */}
      <div className="flex justify-between items-center mb-12">
        <Image src="/logo.png" alt="logo" height={105} width={105} />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Let’s Talk
        </button>
      </div>

      {/* Hero */}
      <div className="text-center mb-16">
        <p className="text-sm text-blue-500 mb-2">Transparent Pricing</p>
        <h2 className="text-4xl font-bold mb-4">
          Scalable Solutions for <br />
          <span className="text-blue-600">Next-Gen Builders</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Simple, powerful plans designed to grow with your ambition. No hidden
          fees. Just high-performance AI at your fingertips.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border rounded-2xl p-6 shadow-sm ${
              plan.highlighted
                ? "border-blue-600 shadow-lg scale-105"
                : "border-gray-200"
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-3xl font-bold mb-4">${plan.price}</p>

            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-600">
                  ✓ {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2 rounded-lg ${
                plan.highlighted
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>

      {/* Plan Table */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold mb-6 text-center">Plan Deep-Dive</h3>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Feature</th>
                <th className="p-3">Starter</th>
                <th className="p-3">Pro</th>
                <th className="p-3">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["AI Models Access", "Basic", "Advanced", "SOTA"],
                ["API Rate Limit", "10 req/s", "50 req/s", "Unlimited"],
                ["Storage", "5GB", "50GB", "Unlimited"],
                ["Security Logs", "7 Days", "30 Days", "365 Days"],
                ["Custom Model Training", "No", "Optional", "Included"],
              ].map((row, i) => (
                <tr key={i} className="border-t">
                  {row.map((cell, j) => (
                    <td key={j} className="p-3 text-center">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-2xl mx-auto mb-20">
        <h3 className="text-2xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h3>

        {[
          "How does the AI compute credits system work?",
          "Can I upgrade or downgrade anytime?",
          "Do you offer pricing for non-profits?",
          "What security measures are in place?",
        ].map((q, i) => (
          <details
            key={i}
            className="border rounded-lg mb-3 p-4 cursor-pointer"
          >
            <summary className="font-medium">{q}</summary>
            <p className="text-gray-600 mt-2">
              This is a sample answer. Replace with actual content.
            </p>
          </details>
        ))}
      </div>

      {/* Footer */}
      <footer className="border-t pt-8 text-center text-gray-500 text-sm">
        © 2026 StackNova. All rights reserved.
      </footer>
    </div>
  );
}
