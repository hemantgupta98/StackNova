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
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
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
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
                >
                  <Link href={link.href}>{link.name}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <button className="border border-blue-500 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition flex-shrink-0">
          Get Consultation
        </button>
      </div>
    </header>
  );
}
