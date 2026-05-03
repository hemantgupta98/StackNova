"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { h3 } from "motion/react-client";

export default function CallToActionPage() {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState<
    | "privacy"
    | "term"
    | "cookie"
    | "legal"
    | "carrer"
    | "documentation"
    | "help"
    | null
  >(null);
  return (
    <main className="w-full bg-background text-foreground">
      {/* ================= CTA SECTION ================= */}

      <footer className="w-full border-t border-border px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-5">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2">
              <Image
                src="/logo1.png"
                alt="logo"
                height={202}
                width={202}
                className="dark:filter-[brightness(0)_invert(1)] cursor-pointer"
                onClick={() => router.push("/src/home")}
              />
              <span className="text-xl font-semibold tracking-wide">
                <span className="text-sky-500 dark:text-sky-400">Stack</span>
                <span className="text-amber-500 dark:text-amber-400">
                  Nova
                </span>{" "}
                <span className="text-foreground">IN</span>
              </span>
            </div>

            <p className="mt-4 max-w-sm text-muted-foreground">
              Empowering teams to achieve more through intelligent task
              management and effortless collaboration.
            </p>
            <div></div>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Product</h4>
            <ul className="space-y-2 text-muted-foreground cursor-pointer">
              <li onClick={() => router.push("/src/service")}>Features</li>
              <li>Integrations</li>

              <li onClick={() => router.push("/src/pricing")}>Pricing</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Resources</h4>
            <ul className="space-y-2 text-muted-foreground cursor-pointer">
              <li onClick={() => setSelectedService("documentation")}>
                Documentation
              </li>
              <li onClick={() => setSelectedService("help")}> Help Center</li>
              <li>Community</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-muted-foreground cursor-pointer">
              <li onClick={() => router.push("/src/about")}>About Us</li>
              <li onClick={() => setSelectedService("carrer")}>Careers</li>
              <li onClick={() => setSelectedService("legal")}>Legal</li>
              <li onClick={() => router.push("/src/contact")}>Contact</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex w-full flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:mt-12 md:flex-row">
          <p>© 2026 StackNova Inc. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <span
              onClick={() => setSelectedService("privacy")}
              className="cursor-pointer hover:text-foreground "
            >
              Privacy Policy&apos;s
            </span>
            <span
              onClick={() => setSelectedService("term")}
              className="cursor-pointer hover:text-foreground"
            >
              Terms of Service
            </span>
            <span
              onClick={() => setSelectedService("cookie")}
              className="cursor-pointer hover:text-foreground "
            >
              Cookie Policy
            </span>
          </div>
          <div>
            {selectedService === "privacy" && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
                {/* Modal Content */}
                <div className="bg-card rounded-2xl border border-border shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-300">
                  {/* Close Button */}
                  <div className="sticky top-0 flex justify-end p-6 border-b border-border bg-card rounded-t-2xl">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="p-1 hover:bg-muted rounded-lg transition text-foreground"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <div className="p-8 space-y-8">
                    {/* Heading */}
                    <div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                        Privacy Policy
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Last updated: 2026
                      </p>
                    </div>

                    {/* Intro */}
                    <div className="bg-muted/40 border border-border rounded-xl p-5">
                      <p className="text-muted-foreground leading-relaxed">
                        At{" "}
                        <span className="font-semibold text-foreground">
                          StackNova
                        </span>
                        , your privacy is important to us. This Privacy Policy
                        explains how we collect, use, and protect your
                        information when you use our platform.
                      </p>
                    </div>

                    {/* Section 1 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-sky-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        1. Information We Collect
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We may collect personal information such as your name,
                        email address, and usage data to improve our services
                        and provide a better experience.
                      </p>
                    </div>

                    {/* Section 2 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-indigo-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        2. How We Use Your Information
                      </h3>

                      <ul className="space-y-2 text-muted-foreground">
                        {[
                          "Provide and maintain our services",
                          "Improve user experience",
                          "Communicate updates and support",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-sky-500 mt-1">●</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Section 3 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-purple-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        3. Data Protection
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We implement strong security measures to protect your
                        data. However, no method of transmission over the
                        internet is 100% secure.
                      </p>
                    </div>

                    {/* Section 4 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-amber-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        4. Your Rights
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        You have the right to access, update, or delete your
                        personal information at any time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectedService === "term" && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
                {/* Modal Content */}
                <div className="bg-card rounded-2xl border border-border shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-300">
                  {/* Close Button */}
                  <div className="sticky top-0 flex justify-end p-6 border-b border-border bg-card rounded-t-2xl">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="p-1 hover:bg-muted rounded-lg transition text-foreground"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <div className="p-8 space-y-8">
                    {/* Heading */}
                    <div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                        Terms & Conditions
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Last updated: 2026
                      </p>
                    </div>

                    {/* Intro */}
                    <div className="bg-muted/40 border border-border rounded-xl p-5">
                      <p className="text-muted-foreground leading-relaxed">
                        Welcome to{" "}
                        <span className="font-semibold text-foreground">
                          StackNova
                        </span>
                        . By accessing or using our freelancing platform, you
                        agree to comply with and be bound by the following
                        terms. These terms govern your use of our services,
                        including client interactions and communication.
                      </p>
                    </div>

                    {/* Section 1 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-sky-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        1. User Information
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        To use our services, users may be required to provide
                        basic details such as name, email address, and phone
                        number. You agree that all information provided is
                        accurate and up to date.
                      </p>
                    </div>

                    {/* Section 2 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-indigo-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        2. Use of Services
                      </h3>

                      <ul className="space-y-2 text-muted-foreground">
                        {[
                          "You agree to use the platform only for legitimate business purposes",
                          "You will not misuse communication tools or spam other users",
                          "You are responsible for maintaining the confidentiality of your account",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-sky-500 mt-1">●</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Section 3 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-purple-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        3. Client Interaction
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Our platform enables communication between clients and
                        service providers. StackNova is not responsible for any
                        agreements, disputes, or outcomes resulting from these
                        interactions.
                      </p>
                    </div>

                    {/* Section 4 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-amber-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        4. Limitation of Liability
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We are not liable for any direct or indirect damages
                        resulting from the use of our platform. Users are
                        responsible for their own actions and agreements.
                      </p>
                    </div>

                    {/* Section 5 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-red-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        5. Termination
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We reserve the right to suspend or terminate access to
                        our services if users violate these terms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectedService === "cookie" && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
                {/* Modal Content */}
                <div className="bg-card rounded-2xl border border-border shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-300">
                  {/* Close Button */}
                  <div className="sticky top-0 flex justify-end p-6 border-b border-border bg-card rounded-t-2xl">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="p-1 hover:bg-muted rounded-lg transition text-foreground"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <div className="p-8 space-y-8">
                    {/* Heading */}
                    <div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                        Cookie Policy
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Last updated: 2026
                      </p>
                    </div>

                    {/* Intro */}
                    <div className="bg-muted/40 border border-border rounded-xl p-5">
                      <p className="text-muted-foreground leading-relaxed">
                        At{" "}
                        <span className="font-semibold text-foreground">
                          StackNova
                        </span>
                        , we use cookies and similar technologies to enhance
                        your experience, improve our platform, and understand
                        user behavior.
                      </p>
                    </div>

                    {/* Section 1 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-sky-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        1. What Are Cookies
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Cookies are small text files stored on your device when
                        you visit a website. They help us recognize your
                        preferences and improve your browsing experience.
                      </p>
                    </div>

                    {/* Section 2 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-indigo-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        2. How We Use Cookies
                      </h3>

                      <ul className="space-y-2 text-muted-foreground">
                        {[
                          "To remember user preferences and settings",
                          "To improve platform performance and usability",
                          "To analyze traffic and user interaction",
                          "To support secure login and authentication",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-sky-500 mt-1">●</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Section 3 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-purple-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        3. Types of Cookies We Use
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We use essential cookies for core functionality,
                        analytics cookies to understand usage patterns, and
                        performance cookies to enhance speed and reliability.
                      </p>
                    </div>

                    {/* Section 4 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-amber-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        4. Managing Cookies
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        You can control or disable cookies through your browser
                        settings. However, disabling cookies may affect certain
                        features of the platform.
                      </p>
                    </div>

                    {/* Section 5 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-red-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        5. Consent
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        By continuing to use our website, you consent to our use
                        of cookies as described in this policy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectedService === "legal" && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
                {/* Modal Content */}
                <div className="bg-card rounded-2xl border border-border shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-300">
                  {/* Close Button */}
                  <div className="sticky top-0 flex justify-end p-6 border-b border-border bg-card rounded-t-2xl">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="p-1 hover:bg-muted rounded-lg transition text-foreground"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <div className="p-8 space-y-8">
                    {/* Heading */}
                    <div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                        Legal Notice
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Last updated: 2026
                      </p>
                    </div>

                    {/* Intro */}
                    <div className="bg-muted/40 border border-border rounded-xl p-5">
                      <p className="text-muted-foreground leading-relaxed">
                        This Legal Notice governs your use of{" "}
                        <span className="font-semibold text-foreground">
                          StackNova
                        </span>
                        . By accessing our platform, you acknowledge and agree
                        to comply with all applicable laws and regulations.
                      </p>
                    </div>

                    {/* Section 1 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-sky-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        1. Platform Usage
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Users agree to use this platform only for lawful
                        purposes. Any misuse, unauthorized access, or illegal
                        activity is strictly prohibited.
                      </p>
                    </div>

                    {/* Section 2 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-indigo-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        2. Intellectual Property
                      </h3>

                      <p className="text-muted-foreground leading-relaxed">
                        All content, branding, and materials on this platform
                        are the property of StackNova and are protected by
                        applicable copyright and trademark laws. Unauthorized
                        use is prohibited.
                      </p>
                    </div>

                    {/* Section 3 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-purple-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        3. Third-Party Interactions
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        StackNova facilitates communication between clients and
                        service providers. We are not responsible for
                        agreements, disputes, or outcomes arising from these
                        interactions.
                      </p>
                    </div>

                    {/* Section 4 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-amber-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        4. Limitation of Liability
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We do not guarantee uninterrupted or error-free service.
                        StackNova shall not be held liable for any direct,
                        indirect, or incidental damages resulting from the use
                        of the platform.
                      </p>
                    </div>

                    {/* Section 5 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-red-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        5. Governing Law
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        These terms are governed by and interpreted in
                        accordance with the laws of India. Any disputes shall be
                        subject to the jurisdiction of local courts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectedService === "carrer" && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
                {/* Modal Content */}
                <div className="bg-card rounded-2xl border border-border shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-300">
                  {/* Close Button */}
                  <div className="sticky top-0 flex justify-end p-6 border-b border-border bg-card rounded-t-2xl">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="p-1 hover:bg-muted rounded-lg transition text-foreground"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <div className="p-8 space-y-8">
                    {/* Heading */}
                    <div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                        Careers at StackNova
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Join our growing team — Last updated: 2026
                      </p>
                    </div>

                    {/* Intro */}
                    <div className="bg-muted/40 border border-border rounded-xl p-5">
                      <p className="text-muted-foreground leading-relaxed">
                        At{" "}
                        <span className="font-semibold text-foreground">
                          StackNova
                        </span>
                        , we are building a platform that connects clients with
                        talented professionals. We’re always looking for
                        passionate individuals who want to grow, innovate, and
                        make an impact.
                      </p>
                    </div>

                    {/* Section 1 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-sky-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        1. Why Join Us
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We provide a collaborative environment where creativity
                        and innovation thrive. Work on real-world projects, grow
                        your skills, and be part of something meaningful.
                      </p>
                    </div>

                    {/* Section 2 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-indigo-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        2. Open Opportunities
                      </h3>

                      <ul className="space-y-2 text-muted-foreground">
                        {[
                          "Frontend Developer (React / Next.js)",
                          "Backend Developer (Node.js / APIs)",
                          "UI/UX Designer",
                          "Freelance Project Contributors",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-sky-500 mt-1">●</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Section 3 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-purple-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        3. Work Culture
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We believe in flexibility, transparency, and continuous
                        learning. Whether you&apos;re working remotely or
                        collaborating with a team, your ideas and contributions
                        matter.
                      </p>
                    </div>

                    {/* Section 4 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-amber-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        4. How to Apply
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Send your resume and portfolio to{" "}
                        <span className="text-sky-500 font-medium">
                          hrstacknova@gmail.com
                        </span>
                        . Our team will review your application and get back to
                        you if there’s a good fit.
                      </p>
                    </div>

                    {/* Section 5 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-green-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        5. Grow With Us
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        At StackNova, your growth is our priority. We encourage
                        learning, experimentation, and leadership at every
                        level.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectedService === "documentation" && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
                {/* Modal Content */}
                <div className="bg-card rounded-2xl border border-border shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-300">
                  {/* Close Button */}
                  <div className="sticky top-0 flex justify-end p-6 border-b border-border bg-card rounded-t-2xl">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="p-1 hover:bg-muted rounded-lg transition text-foreground"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <div className="p-8 space-y-8">
                    {/* Heading */}
                    <div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                        Documentation
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Learn how to use StackNova — Last updated: 2026
                      </p>
                    </div>

                    {/* Intro */}
                    <div className="bg-muted/40 border border-border rounded-xl p-5">
                      <p className="text-muted-foreground leading-relaxed">
                        Welcome to{" "}
                        <span className="font-semibold text-foreground">
                          StackNova
                        </span>{" "}
                        documentation. Here you&apos;ll find everything you need
                        to understand, use, and get the most out of our
                        freelancing platform.
                      </p>
                    </div>

                    {/* Section 1 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-sky-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        1. Getting Started
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Create an account, set up your profile, and start
                        exploring available services. Clients can post projects,
                        and freelancers can showcase their skills.
                      </p>
                    </div>

                    {/* Section 2 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-indigo-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        2. Core Features
                      </h3>

                      <ul className="space-y-2 text-muted-foreground">
                        {[
                          "Project posting and bidding system",
                          "Real-time client communication",
                          "Secure user authentication",
                          "Dashboard for managing tasks and projects",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-sky-500 mt-1">●</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Section 3 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-purple-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        3. Working with Clients
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Communicate clearly with clients, understand
                        requirements, and deliver high-quality work. Use the
                        platform tools to track progress and maintain
                        transparency.
                      </p>
                    </div>

                    {/* Section 4 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-amber-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        4. Account & Security
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Keep your account secure by using strong passwords and
                        not sharing your credentials. Enable security features
                        to protect your data.
                      </p>
                    </div>

                    {/* Section 5 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-green-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        5. Need Help?
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        If you have questions or need assistance, visit our Help
                        Center or contact support. We&apos;re here to help you
                        succeed on StackNova.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectedService === "help" && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
                {/* Modal Content */}
                <div className="bg-card rounded-2xl border border-border shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-300">
                  {/* Close Button */}
                  <div className="sticky top-0 flex justify-end p-6 border-b border-border bg-card rounded-t-2xl">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="p-1 hover:bg-muted rounded-lg transition text-foreground"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <div className="p-8 space-y-8">
                    {/* Heading */}
                    <div>
                      <h2 className="text-3xl font-bold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                        Help & Support
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground">
                        We’re here to help you — Last updated: 2026
                      </p>
                    </div>

                    {/* Intro */}
                    <div className="bg-muted/40 border border-border rounded-xl p-5">
                      <p className="text-muted-foreground leading-relaxed">
                        Need assistance with{" "}
                        <span className="font-semibold text-foreground">
                          StackNova
                        </span>
                        ? Our support team is here to guide you through any
                        issues, questions, or concerns you may have while using
                        our platform.
                      </p>
                    </div>

                    {/* Section 1 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-sky-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        1. Getting Help
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        You can reach out to our support team anytime for help
                        with account setup, project issues, or technical
                        difficulties.
                      </p>
                    </div>

                    {/* Section 2 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-indigo-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        2. Common Support Topics
                      </h3>

                      <ul className="space-y-2 text-muted-foreground">
                        {[
                          "Account registration and login issues",
                          "Client and freelancer communication",
                          "Managing projects and tasks",
                          "Technical bugs or errors",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-sky-500 mt-1">●</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Section 3 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-purple-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        3. Contact Support
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        If you need direct assistance, contact us at{" "}
                        <span className="text-sky-500 font-medium">
                          support@stacknova.com
                        </span>{" "}
                        and our team will respond as soon as possible.
                      </p>
                    </div>

                    {/* Section 4 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-amber-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        4. Self-Service Resources
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        You can also explore our documentation and FAQs to
                        quickly find answers to common questions without waiting
                        for support.
                      </p>
                    </div>

                    {/* Section 5 */}
                    <div className="relative border border-border rounded-xl p-6 bg-card hover:shadow-lg transition">
                      <div className="absolute left-0 top-0 h-full w-1 bg-green-500 rounded-l-xl"></div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        5. We’re Always Improving
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Your feedback helps us improve. If you encounter any
                        issues or have suggestions, feel free to share them with
                        us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </footer>
    </main>
  );
}
