"use client";

import { motion } from "framer-motion";
import { Droplet, Layers, Home } from "lucide-react";

const services = [
  {
    title: "Plumbing Services",
    description:
      "Comprehensive plumbing for residential and commercial projects: new installations, solar geysers, pressure pumps, maintenance, and reticulation systems.",
    icon: <Droplet className="w-8 h-8 text-green-700" />,
  },
  {
    title: "Deckpane Hiring",
    description:
      "Reliable hire of steel and aluminum deckpanes for slab work and concrete structures. Fast delivery, competitive rates, and expert support.",
    icon: <Layers className="w-8 h-8 text-green-700" />,
  },
  {
    title: "House Construction",
    description:
      "Full-service residential construction: foundations, brickwork, roofing, project management, duplexes, townhouses, and renovations.",
    icon: <Home className="w-8 h-8 text-green-700" />,
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
          At TREBO, we provide specialized solutions in plumbing, formwork
          hiring, and full-scale home construction — built on quality, safety,
          and modern practices.
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
