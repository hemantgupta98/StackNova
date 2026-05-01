"use client";

import Image from "next/image";

export default function CallToActionPage() {
  return (
    <main className="w-full bg-background text-foreground">
      {/* ================= CTA SECTION ================= */}

      <footer className="w-full border-t border-border px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-5">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="logo"
                height={102}
                width={102}
                className="dark:filter-[brightness(0)_invert(1)]"
              />
              <span className="text-xl font-semibold text-foreground">
                StackNova IN
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
            <ul className="space-y-2 text-muted-foreground">
              <li>Features</li>
              <li>Integrations</li>
              <li>Enterprise</li>
              <li>Pricing</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>API Status</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>About Us</li>
              <li>Careers</li>
              <li>Legal</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex w-full flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:mt-12 md:flex-row">
          <p>© 2026 StackNova Inc. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <span className="cursor-pointer hover:text-foreground">
              Privacy Policy&apos;s
            </span>
            <span className="cursor-pointer hover:text-foreground">
              Terms of Service
            </span>
            <span className="cursor-pointer hover:text-foreground">
              Cookie Policy
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
