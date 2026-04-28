"use client";

import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="w-full border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold">StackNova</h1>
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">Pricing</a>
            <a href="#">Team</a>
            <a href="#" className="text-blue-600 font-medium">
              Contact
            </a>
          </nav>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
            Let’s Talk
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-16 px-6">
        <p className="text-sm text-blue-600 font-medium mb-3">
          CONNECT WITH US
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let’s Build the Future Together
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have a project in mind? We specialize in AI-driven solutions and
          high-performance engineering.
        </p>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 pb-16">
        {/* Form */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Send a Message</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border p-3 rounded-lg w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border p-3 rounded-lg w-full"
            />
          </div>

          <input
            type="text"
            placeholder="Company (Optional)"
            className="border p-3 rounded-lg w-full mb-4"
          />

          <textarea
            placeholder="Your message..."
            rows={5}
            className="border p-3 rounded-lg w-full mb-4"
          />

          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg">
            Send Secure Message
          </button>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium">hello@stacknova.ai</p>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium">+1 (555) 012-3456</p>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500">Address</p>
            <p className="font-medium">San Francisco, USA</p>
          </div>

          <div className="bg-gray-100 h-40 rounded-xl flex items-center justify-center text-gray-500">
            Map Preview
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm text-blue-600 mb-2">
              FAST TRACK YOUR PROJECT
            </p>
            <h3 className="text-2xl font-bold mb-2">
              Book a 15-min Discovery Call
            </h3>
            <p className="text-gray-600 text-sm">
              Speak directly with our expert to discuss your requirements.
            </p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Schedule Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <h4 className="font-bold mb-2">StackNova</h4>
            <p className="text-gray-600">
              Building high-performance web and AI products.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-gray-600">
              <li>About</li>
              <li>Team</li>
              <li>Portfolio</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="space-y-1 text-gray-600">
              <li>Contact</li>
              <li>Pricing</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Social</h4>
            <div className="flex gap-3 text-gray-600">
              <span>🐦</span>
              <span>💼</span>
              <span>💻</span>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 text-xs mt-8">
          © 2026 StackNova. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
