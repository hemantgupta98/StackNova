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
      title: "Free Support Duration",
      starter: "30 Days",
      pro: "6 Months",
      enterprise: "1 Year+ Dedicated",
    },
    {
      title: "Free Maintenance & Updates",
      starter: "Basic Bug Fixes",
      pro: "Regular Updates",
      enterprise: "Full Maintenance Included",
    },
    {
      title: "Performance Optimization",
      starter: "Standard Speed",
      pro: "Optimized Performance",
      enterprise: "High-Speed + Scalability",
    },
    {
      title: "Security Features",
      starter: "Basic Security",
      pro: "Advanced Protection",
      enterprise: "Enterprise-Grade Security",
    },
    {
      title: "Hosting & Deployment",
      starter: "Guidance Only",
      pro: "Full Deployment Support",
      enterprise: "Managed Hosting Setup",
    },
    {
      title: "Marketing Support",
      starter: "Basic Guidance",
      pro: "SEO + Marketing Setup",
      enterprise: "Full Digital Marketing Support",
    },
    {
      title: "Content Assistance",
      starter: "Client Provided",
      pro: "Basic Content Help",
      enterprise: "Professional Content Strategy",
    },
    {
      title: "Branding & Design",
      starter: "Template Based",
      pro: "Custom Branding",
      enterprise: "Premium Brand Identity",
    },
    {
      title: "Third-Party Integrations",
      starter: "Not Included",
      pro: "Limited Integrations",
      enterprise: "Unlimited Integrations",
    },
    {
      title: "Project Revisions",
      starter: "2 Revisions",
      pro: "5 Revisions",
      enterprise: "Unlimited Revisions",
    },
    {
      title: "Project Delivery Speed",
      starter: "Standard Timeline",
      pro: "Fast Delivery",
      enterprise: "Priority Delivery",
    },
    {
      title: "Dedicated Manager",
      starter: "Not Included",
      pro: "Shared Manager",
      enterprise: "Dedicated Manager",
    },
    {
      title: "Training & Handover",
      starter: "Basic Guidance",
      pro: "Complete Training",
      enterprise: "Advanced Team Training",
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
        ⚡ Plan Deep-Dive
      </h2>

      <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
        <table className="w-full text-sm text-left border-collapse">
          {/* Header */}
          <thead className="bg-muted text-muted-foreground">
            <tr>
              <th className="p-4 font-semibold">Feature</th>
              <th className="p-4 text-center font-semibold">Starter</th>
              <th className="p-4 text-center font-semibold text-blue-600">
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
