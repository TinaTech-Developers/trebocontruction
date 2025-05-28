"use client";

import Services from "@/app/components/Services";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Plumbing Installation & Repair",
    description:
      "Expert plumbing services for residential and commercial properties including installation, maintenance, and emergency repairs.",
    image: "/plumbing.webp",
    category: "Plumbing Specialists",
  },
  {
    title: "Hot Water System Installation",
    description:
      "Installation and maintenance of energy-efficient hot water systems tailored to your household or commercial needs.",
    image: "/IMG-20250527-WA0043.jpg",
    category: "Plumbing Specialists",
  },
  {
    title: "Bathroom & Kitchen Fit-Outs",
    description:
      "Complete plumbing for new or renovated kitchens and bathrooms including fixture installation and layout planning.",
    image: "/1-Built-in-Kitchen-scaled.webp",
    category: "Plumbing Specialists",
  },
  {
    title: "Backflow Prevention Testing",
    description:
      "Ensure clean water supply by testing, repairing, and installing certified backflow prevention systems.",
    image: "/banner-backflow-testing-2.jpg",
    category: "Plumbing Specialists",
  },
  {
    title: "Drain Cleaning & Unblocking",
    description:
      "Fast and effective removal of blockages using high-pressure jets and CCTV inspection tools.",
    image: "/plambing.png",
    category: "Plumbing Specialists",
  },

  {
    title: "Leak Detection & Pipe Maintenance",
    description:
      "State-of-the-art leak detection tools and efficient pipe replacement or maintenance solutions.",
    image: "/water-leak-detection-and-prevention.jpg",
    category: "Plumbing Specialists",
  },
  {
    title: "Deckpane & Scaffold Hiring",
    description:
      "High-quality deckpanes and scaffolding equipment available for hire — safe, reliable, and affordable.",
    image: "/IMG-20250524-WA0015.jpg",
    category: "Decking Specialists",
  },
  {
    title: "Formwork & Edge Protection",
    description:
      "Hire durable formwork systems and edge protection tools for safe construction workflows.",
    image: "/IMG-20250524-WA0009.jpg",
    category: "Decking Specialists",
  },
  {
    title: "Residential Construction",
    description:
      "From foundations to finishes — full-service construction for homes, renovations, and expansions.",
    image: "/IMG-20250527-WA0021.jpg",
    category: "Construction Specialists",
  },
  {
    title: "Commercial & Industrial Projects",
    description:
      "Planning and executing large-scale commercial and industrial builds with safety and efficiency.",
    image: "/IMG-20250524-WA0012.jpg",
    category: "Construction Specialists",
  },
];

const ServicesPage = () => {
  return (
    <>
      <Services />
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Our Specialized Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide expert services across three major specialties: Plumbing,
            Decking Equipment Hire, and General Construction. Explore what makes
            us the trusted name in your next project.
          </p>
        </div>
      </section>

      {/* Services Grouped by Category */}
      {[
        "Plumbing Specialists",
        "Decking Specialists",
        "Construction Specialists",
      ].map((category, i) => (
        <section key={category} className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700">
              {category}
            </h2>
            <p className="text-gray-600 mt-2">
              {category === "Plumbing Specialists" &&
                "Trusted plumbing experts for all residential and commercial needs."}
              {category === "Decking Specialists" &&
                "Industry-grade scaffolding and decking gear for safe, efficient job sites."}
              {category === "Construction Specialists" &&
                "Full-spectrum construction services — from vision to execution."}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services
              .filter((s) => s.category === category)
              .map((service, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-52 w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="py-20 bg-green-700 text-white px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Something Together
          </h2>
          <p className="mb-6 text-lg max-w-2xl mx-auto">
            Whether it’s plumbing a home, hiring safe scaffolding systems, or
            launching a new build — we’re ready when you are.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Contact Our Experts
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
