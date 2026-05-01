"use client";

import { MessageCircle, Library, Mail } from "lucide-react";
import Link from "next/link";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* Chat Button */}
      <Link
        href="#"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
      >
        <MessageCircle size={22} />
      </Link>

      {/* LinkedIn */}
      <Link
        href="https://www.linkedin.com/company/stacknova-in"
        target="_blank"
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition"
      >
        <Library size={22} />
      </Link>

      {/* Email */}
      <Link
        href="hr.stacknova@email.com"
        className="bg-blue-400 hover:bg-blue-500 text-white p-4 rounded-full shadow-lg transition"
      >
        <Mail size={22} />
      </Link>
    </div>
  );
}
