"use client";

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
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
        ⚡ Plan Deep-Dive
      </h2>

      <div className="overflow-x-auto border rounded-2xl shadow-sm">
        <table className="w-full text-sm text-left border-collapse">
          {/* Header */}
          <thead className="bg-gray-100 text-gray-700">
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
              <tr key={i} className="border-t hover:bg-gray-50 transition">
                <td className="p-4 font-medium text-gray-800">{item.title}</td>

                <td className="p-4 text-center text-gray-600">
                  {item.starter}
                </td>

                <td className="p-4 text-center font-semibold text-gray-900">
                  {item.pro}
                </td>

                <td className="p-4 text-center text-gray-600">
                  {item.enterprise}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
