"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Leaf, HardHat, Recycle } from "lucide-react";

const points = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-green-700" />,
    title: "Strict Safety Protocols",
    description:
      "We adhere to industry-leading safety standards to protect our team and your property.",
  },
  {
    icon: <HardHat className="w-10 h-10 text-green-700" />,
    title: "Certified Safety Training",
    description:
      "All our technicians undergo rigorous safety training and certification.",
  },
  {
    icon: <Leaf className="w-10 h-10 text-green-700" />,
    title: "Eco-Friendly Materials",
    description:
      "We prioritize sustainable and environmentally friendly materials and methods.",
  },
  {
    icon: <Recycle className="w-10 h-10 text-green-700" />,
    title: "Waste Reduction & Recycling",
    description:
      "Committed to minimizing waste and recycling materials whenever possible.",
  },
];

export default function SafetySustainability() {
  return (
    <section className="bg-green-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-green-800 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Safety & Sustainability
        </motion.h2>
        <motion.p
          className="text-green-700 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          At Trebo Construction, your safety and the planet’s health are our top
          priorities. We combine rigorous safety practices with eco-conscious
          methods to deliver quality work responsibly.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {points.map(({ icon, title, description }, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl p-6 shadow-md border border-green-100 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-green-900 font-semibold text-xl mb-2">
              {title}
            </h3>
            <p className="text-green-700 text-sm">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
