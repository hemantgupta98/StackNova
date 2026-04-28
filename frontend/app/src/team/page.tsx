"use client";

import Image from "next/image";

const team = [
  {
    name: "Marcus Chen",
    role: "Lead AI Architect",
    desc: "Specializes in large-scale AI systems and infrastructure.",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Product Design",
    desc: "Designs intuitive user experiences for AI platforms.",
  },
  {
    name: "Soren Nielsen",
    role: "Principal DevOps",
    desc: "Expert in scalable cloud and Kubernetes systems.",
  },
  {
    name: "Aisha Kamau",
    role: "Blockchain Specialist",
    desc: "Focuses on decentralized AI integrations.",
  },
  {
    name: "Liam O'Connor",
    role: "Senior Fullstack Developer",
    desc: "Builds high-performance real-time applications.",
  },
  {
    name: "Yuki Tanaka",
    role: "Data Scientist",
    desc: "Transforms data into actionable insights.",
  },
];

export default function TeamPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 shadow-sm">
        <h1 className="text-xl font-bold text-blue-600">StackNova</h1>

        <nav className="hidden md:flex gap-6 text-gray-700">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">Pricing</a>
          <a href="#" className="font-semibold text-blue-600">
            Team
          </a>
          <a href="#">Contact</a>
        </nav>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Let’s Talk
        </button>
      </header>

      {/* Hero */}
      <section className="text-center py-16 px-6">
        <p className="text-blue-500 text-sm font-medium">Our Culture</p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Meet the <span className="text-blue-600">Innovators</span>
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We blend AI innovation with human-centered design to build scalable
          digital ecosystems.
        </p>
      </section>

      {/* Founder Highlight */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="border rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-6 items-center">
          <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-sm text-gray-500">Photo</span>
          </div>

          <div>
            <p className="text-sm text-blue-500 font-medium">
              Founder & CEO
            </p>
            <h3 className="text-2xl font-bold mt-1">
              Dr. Julian Vance
            </h3>
            <p className="text-gray-600 mt-2 italic">
              “The future isn’t automation—it’s augmentation. We empower
              humans through intelligent systems.”
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="px-6 md:px-16 py-16">
        <h3 className="text-2xl font-semibold mb-10">
          The Core Team
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="border rounded-2xl p-6 text-center hover:shadow-md transition"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-xs text-gray-500">Img</span>
              </div>

              <h4 className="mt-4 font-semibold">{member.name}</h4>
              <p className="text-blue-600 text-sm">{member.role}</p>
              <p className="text-gray-600 text-sm mt-2">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-16 pb-16">
        <div className="bg-gray-100 rounded-2xl p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold">
            We’re Building the Future. <br />
            Want to join us?
          </h3>

          <p className="text-gray-600 mt-4">
            We’re looking for brilliant minds in AI, design, and engineering.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
              Join the Team
            </button>
            <button className="border px-6 py-2 rounded-lg">
              Browse Openings
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 px-6 py-10">
        <div className="grid md:grid-cols-4 gap-8 text-sm text-gray-600">
          <div>
            <h4 className="font-bold text-gray-900 mb-2">
              StackNova
            </h4>
            <p>Building high-performance AI & web products.</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Company
            </h4>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Portfolio</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Support
            </h4>
            <ul className="space-y-1">
              <li>Contact</li>
              <li>Pricing</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Social
            </h4>
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