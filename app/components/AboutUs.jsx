"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="bg-green-100 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <motion.div
          className="relative w-full md:w-1/2 h-72 md:h-96 rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/IMG-20250524-WA0005.jpg"
            alt=" Trebo Construction"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-green-800 mb-6">
            Who Are We?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            TREBO Construction Company is a multidisciplinary construction firm
            based in Zimbabwe, specializing in modern plumbing installations,
            deckpane rental solutions, and residential housing construction. Our
            commitment to delivering superior workmanship, on-time project
            completion, and cost-effective solutions has made us a preferred
            service provider in the construction industry.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our team is composed of highly skilled artisans, site supervisors,
            project managers, and customer service personnel—all focused on one
            goal: delivering quality you can trust.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
