"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/theme-toogle";

export default function Header() {
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
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="StackNova Logo"
            height={100}
            width={100}
            className="h-12 w-auto"
          />
        </Link>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="gap-2">
            {navigationLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  asChild
                  className="rounded-md px-3 py-2 text-sm font-medium text-foreground/90 transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Link href={link.href}>{link.name}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <button className="shrink-0 rounded-lg border border-primary/40 px-4 py-2 text-primary transition hover:bg-primary/10">
          Get Consultation
        </button>
      </div>
    </header>
  );
}
