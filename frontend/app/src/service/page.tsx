"use client";

import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">
        <span className="text-sm uppercase tracking-widest text-blue-500 mb-4">
          Interaction Showcase
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Interactive State Definition
        </h2>

        {/* Card */}
        <div className="relative group">
          <div className="absolute inset-0 rounded-2xl blur-xl bg-blue-400 opacity-20 group-hover:opacity-40 transition duration-300"></div>

          <div className="relative bg-card border border-border rounded-2xl p-8 w-full max-w-md text-left transition transform group-hover:scale-105 shadow-lg group-hover:shadow-blue-400/40">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4">
              {"</>"}
            </div>

            <h3 className="text-xl font-semibold mb-3">Software Development</h3>

            <p className="text-muted-foreground text-sm mb-4">
              Custom scalable web & mobile applications tailored to business
              needs with cutting-edge tech stacks.
            </p>

            <button className="text-blue-600 font-medium hover:underline">
              Learn More →
            </button>
          </div>
        </div>

        {/* Hover Info */}
        <div className="mt-10 text-sm text-muted-foreground">
          Hover state — scale, glow, reveal CTA
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-10">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="font-bold text-blue-600 mb-2">StackNova</h3>
            <p className="text-muted-foreground">
              Pioneering the future of digital solutions with AI-driven
              development.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Services</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>Web Development</li>
              <li>AI Automation</li>
              <li>UI/UX Design</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Connect</h4>
            <div className="flex gap-4 text-muted-foreground">
              <span>🐦</span>
              <span>💼</span>
              <span>🐙</span>
            </div>
          </div>
        </div>

        <div className="text-center text-muted-foreground text-xs pb-6">
          © 2024 StackNova Services. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
