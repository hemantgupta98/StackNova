"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 shadow-sm">
        <h1 className="text-xl font-bold text-blue-600">StackNova</h1>

        <nav className="hidden md:flex gap-6 text-gray-700">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#" className="font-semibold text-blue-600">
            Projects
          </a>
          <a href="#">Pricing</a>
          <a href="#">Team</a>
          <a href="#">Contact</a>
        </nav>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Let’s Talk
        </button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <p className="text-sm text-blue-500 font-medium">
          Case Study · Deep Tech
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          AuraLink: AI-Driven Fleet Management
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Revolutionizing logistics with predictive maintenance and real-time
          route optimization for enterprise fleets.
        </p>
      </section>

      {/* Content Section */}
      <section className="grid md:grid-cols-3 gap-8 px-6 md:px-16 py-12">
        {/* Left Content */}
        <div className="md:col-span-2 space-y-10">
          {/* Challenge */}
          <div>
            <h3 className="text-xl font-semibold mb-2">The Challenge</h3>
            <p className="text-gray-600">
              The client struggled with fuel costs and downtime due to lack of
              real-time insights and inefficient logistics systems.
            </p>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-xl font-semibold mb-2">The Solution</h3>
            <p className="text-gray-600">
              We built a distributed AI middleware using predictive analytics
              and dynamic routing to improve efficiency and reduce downtime.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="p-4 border rounded-xl">
                <h4 className="font-semibold text-blue-600">
                  Edge-First Architecture
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Local processing for faster decisions.
                </p>
              </div>

              <div className="p-4 border rounded-xl">
                <h4 className="font-semibold text-blue-600">
                  Predictive AI Engine
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Detects failures before they happen.
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Core Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                "Python",
                "TensorFlow",
                "AWS",
                "PostgreSQL",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Showcase */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Project Showcase
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="h-40 bg-gray-200 rounded-xl flex items-center justify-center">
                Image
              </div>
              <div className="h-40 bg-gray-200 rounded-xl flex items-center justify-center">
                Dashboard
              </div>
            </div>
          </div>

          {/* Outcome */}
          <div>
            <h3 className="text-xl font-semibold mb-4">The Outcome</h3>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 border rounded-xl text-center">
                <h4 className="text-2xl font-bold text-blue-600">+42%</h4>
                <p className="text-sm text-gray-600">Efficiency Boost</p>
              </div>

              <div className="p-4 border rounded-xl text-center">
                <h4 className="text-2xl font-bold text-blue-600">-28%</h4>
                <p className="text-sm text-gray-600">Downtime</p>
              </div>

              <div className="p-4 border rounded-xl text-center">
                <h4 className="text-2xl font-bold text-blue-600">$3.2M</h4>
                <p className="text-sm text-gray-600">Annual Savings</p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-6 p-6 bg-gray-100 rounded-xl">
              <p className="italic text-gray-700">
                "StackNova didn’t just build an app; they transformed our data
                strategy and improved delivery efficiency."
              </p>
              <p className="mt-2 font-semibold">— Marcus Chen</p>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          <div className="p-6 border rounded-xl">
            <h4 className="font-semibold mb-4">Project Quick Facts</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Client: Global Logistics Corp</li>
              <li>Timeline: 8 Months</li>
              <li>Team Size: 12 Engineers</li>
              <li>Platform: Web & Mobile</li>
            </ul>
          </div>

          <div className="p-6 bg-blue-600 text-white rounded-xl">
            <h4 className="font-semibold text-lg">
              Have a similar project?
            </h4>
            <p className="text-sm mt-2">
              Let’s discuss how AI can help your business grow.
            </p>

            <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-lg">
              Talk to Experts
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 mt-16 px-6 py-10">
        <div className="grid md:grid-cols-4 gap-8 text-sm text-gray-600">
          <div>
            <h4 className="font-bold text-gray-900 mb-2">StackNova</h4>
            <p>Building high-performance AI & web products.</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Company</h4>
            <ul className="space-y-1">
              <li>About</li>
              <li>Team</li>
              <li>Portfolio</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Support</h4>
            <ul className="space-y-1">
              <li>Contact</li>
              <li>Pricing</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Social</h4>
            <p>Twitter · LinkedIn · GitHub</p>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-6 text-xs">
          © 2026 StackNova. All rights reserved.
        </p>
      </footer>
    </main>
  );
}