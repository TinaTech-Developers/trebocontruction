"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Building2,
  Droplet,
  ShieldCheck,
  Clock8,
  Hammer,
} from "lucide-react";

const services = [
  {
    title: "General Plumbing",
    description:
      "From pipe repairs to installations, we ensure reliable and clean water flow.",
    icon: <Droplet className="w-8 h-8 text-green-700" />,
  },
  {
    title: "Construction & Renovation",
    description:
      "New builds, home extensions, or remodeling — we’ve got it covered.",
    icon: <Building2 className="w-8 h-8 text-green-700" />,
  },
  {
    title: "Emergency Repairs",
    description:
      "24/7 rapid-response team for burst pipes and urgent plumbing issues.",
    icon: <Clock8 className="w-8 h-8 text-green-700" />,
  },
  {
    title: "Leak Detection",
    description:
      "State-of-the-art tools to find and fix hidden leaks before they cause damage.",
    icon: <Wrench className="w-8 h-8 text-green-700" />,
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Elegant designs, efficient installations, and quality finishes.",
    icon: <Hammer className="w-8 h-8 text-green-700" />,
  },
  {
    title: "Licensed & Insured",
    description:
      "We’re certified, insured, and committed to safety and quality work.",
    icon: <ShieldCheck className="w-8 h-8 text-green-700" />,
  },
];

const Services = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8" id="services">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-green-700 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Core Services
        </motion.h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We offer a wide range of construction and plumbing services tailored
          to your needs — with precision, safety, and professionalism.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 border border-green-100 rounded-2xl p-6 text-left shadow hover:shadow-md transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
