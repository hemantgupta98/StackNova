"use client";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80 },
  },
};

const card3D: Variants = {
  hidden: { opacity: 0, y: 60, rotateX: 15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 80 },
  },
};

export default function PricingTable() {
  const features = [
    {
      title: "Project Complexity",
      starter: "Simple Websites",
      pro: "Advanced Web Apps",
      enterprise: "Complex Scalable Systems",
    },
    {
      title: "Tech Stack & Architecture",
      starter: "Basic Stack (React, CMS)",
      pro: "Modern Full-Stack (MERN, APIs)",
      enterprise: "Custom Architecture + Microservices",
    },
    {
      title: "UI/UX Experience",
      starter: "Pre-built UI",
      pro: "Custom UI/UX Design",
      enterprise: "Premium UX + Design System",
    },
    {
      title: "Backend & API Power",
      starter: "Limited Backend",
      pro: "Full Backend + API Integration",
      enterprise: "High-performance APIs + Scalability",
    },
    {
      title: "Automation & Integrations",
      starter: "Manual / Basic",
      pro: "Third-party Integrations",
      enterprise: "Advanced Automation + Custom Integrations",
    },
    {
      title: "Support & Scalability",
      starter: "Basic Support",
      pro: "Growth-ready Support",
      enterprise: "Dedicated Team + Long-term Scaling",
    },
  ];

  return (
    <motion.section
      variants={card3D}
      whileHover={{
        rotateY: 10,
        rotateX: 6,
        scale: 1.05,
      }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className="mx-auto max-w-7xl px-4 py-16"
    >
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
        ⚡ Service Capability Breakdown
      </h2>

      <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
        <table className="w-full text-sm text-left border-collapse">
          {/* Header */}
          <thead className="bg-muted text-muted-foreground">
            <tr>
              <th className="p-4 font-semibold">Feature</th>
              <th className="p-4 text-center font-semibold">Starter</th>
              <th className="p-4 text-center font-semibold text-blue-600 scale-105">
                Pro
              </th>
              <th className="p-4 text-center font-semibold">Enterprise</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {features.map((item, i) => (
              <tr
                key={i}
                className="border-t border-border transition hover:bg-muted/50"
              >
                <td className="p-4 font-medium text-foreground">
                  {item.title}
                </td>

                <td className="p-4 text-center text-muted-foreground">
                  {item.starter}
                </td>

                <td className="p-4 text-center font-semibold text-foreground">
                  {item.pro}
                </td>

                <td className="p-4 text-center text-muted-foreground">
                  {item.enterprise}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
}
