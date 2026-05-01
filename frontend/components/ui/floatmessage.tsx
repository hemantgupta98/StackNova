"use client";

import { Mail } from "lucide-react";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919867742834?text=Hello%20StackNova%2C%20I%20want%20to%20discuss%20a%20project"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
      >
        <FaWhatsapp size={22} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/company/stacknova-in"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition"
      >
        <FaLinkedinIn size={22} />
      </a>

      {/* Email */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=hr.stacknova@gmail.com&su=Project Inquiry&body=Hello StackNova"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-400 hover:bg-blue-500 text-white p-4 rounded-full shadow-lg transition"
      >
        <Mail size={22} />
      </a>
    </div>
  );
}
