"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/theme-toogle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/src/about" },
    { name: "Service", href: "/src/service" },
    { name: "Projects", href: "/src/projects" },
    { name: "Team", href: "/src/team" },
    { name: "Pricing", href: "/src/pricing" },
    { name: "Contact", href: "/src/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/70 backdrop-blur-xl supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex h-full shrink-0 items-center">
          <Image
            src="/logo1.png"
            alt="StackNova Logo"
            height={200}
            width={200}
            className="h-30 w-30 object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {navigationLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.href}
                      className="group/link relative inline-flex px-3 py-2 text-sm font-medium text-foreground/90 transition-all duration-300 hover:text-primary"
                    >
                      {link.name}

                      {/* Hover underline animation */}
                      <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all duration-300 group-hover/link:w-full"></span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <ModeToggle />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA */}
          <button
            onClick={() => router.push("/src/contact")}
            className="rounded-lg border border-primary/40 px-5 py-2 text-primary font-medium transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30"
          >
            Get Consultation
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <ModeToggle />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md border border-border hover:bg-accent transition"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col gap-3 mt-4 bg-background/90 backdrop-blur-xl p-4 rounded-xl border border-border shadow-lg">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-md text-sm font-medium text-foreground/90 transition-all duration-300 hover:bg-primary/10 hover:text-primary"
              >
                {link.name}
              </Link>
            ))}

            {/* CTA inside mobile */}
            <button className="mt-3 w-full rounded-lg border border-primary/40 px-4 py-2 text-primary font-medium transition-all duration-300 hover:bg-primary hover:text-white">
              Get Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
