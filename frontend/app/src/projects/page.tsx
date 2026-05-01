"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Navbar */}

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <p className="text-sm text-blue-500 font-medium">
          Case Study · Deep Tech
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          AuraLink: AI-Driven Fleet Management
        </h2>

        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
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
            <p className="text-muted-foreground">
              The client struggled with fuel costs and downtime due to lack of
              real-time insights and inefficient logistics systems.
            </p>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-xl font-semibold mb-2">The Solution</h3>
            <p className="text-muted-foreground">
              We built a distributed AI middleware using predictive analytics
              and dynamic routing to improve efficiency and reduce downtime.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="p-4 border border-border rounded-xl">
                <h4 className="font-semibold text-blue-600">
                  Edge-First Architecture
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Local processing for faster decisions.
                </p>
              </div>

              <div className="p-4 border border-border rounded-xl">
                <h4 className="font-semibold text-blue-600">
                  Predictive AI Engine
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
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
                  className="px-3 py-1 bg-muted rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Showcase */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Project Showcase</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="h-40 bg-muted rounded-xl flex items-center justify-center">
                Image
              </div>
              <div className="h-40 bg-muted rounded-xl flex items-center justify-center">
                Dashboard
              </div>
            </div>
          </div>

          {/* Outcome */}
          <div>
            <h3 className="text-xl font-semibold mb-4">The Outcome</h3>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 border border-border rounded-xl text-center">
                <h4 className="text-2xl font-bold text-blue-600">+42%</h4>
                <p className="text-sm text-muted-foreground">
                  Efficiency Boost
                </p>
              </div>

              <div className="p-4 border border-border rounded-xl text-center">
                <h4 className="text-2xl font-bold text-blue-600">-28%</h4>
                <p className="text-sm text-muted-foreground">Downtime</p>
              </div>

              <div className="p-4 border border-border rounded-xl text-center">
                <h4 className="text-2xl font-bold text-blue-600">$3.2M</h4>
                <p className="text-sm text-muted-foreground">Annual Savings</p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-6 p-6 bg-muted rounded-xl">
              <p className="italic text-muted-foreground">
                &quot;StackNova didn’t just build an app; they transformed our
                data strategy and improved delivery efficiency.&quot;
              </p>
              <p className="mt-2 font-semibold">— Marcus Chen</p>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          <div className="p-6 border border-border rounded-xl">
            <h4 className="font-semibold mb-4">Project Quick Facts</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>Client: Global Logistics Corp</li>
              <li>Timeline: 8 Months</li>
              <li>Team Size: 12 Engineers</li>
              <li>Platform: Web & Mobile</li>
            </ul>
          </div>

          <div className="p-6 bg-blue-600 text-white rounded-xl">
            <h4 className="font-semibold text-lg">Have a similar project?</h4>
            <p className="text-sm mt-2">
              Let’s discuss how AI can help your business grow.
            </p>

            <button className="mt-4 bg-background text-blue-600 px-4 py-2 rounded-lg">
              Talk to Experts
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/40 mt-16 px-6 py-10">
        <div className="grid md:grid-cols-4 gap-8 text-sm text-muted-foreground">
          <div>
            <h4 className="font-bold text-foreground mb-2">StackNova</h4>
            <p>Building high-performance AI & web products.</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">Company</h4>
            <ul className="space-y-1">
              <li>About</li>
              <li>Team</li>
              <li>Portfolio</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">Support</h4>
            <ul className="space-y-1">
              <li>Contact</li>
              <li>Pricing</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">Social</h4>
            <p>Twitter · LinkedIn · GitHub</p>
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-6 text-xs">
          © 2026 StackNova. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
