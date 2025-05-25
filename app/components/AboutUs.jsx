"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
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
            About Trebo Construction
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Trebo is a trusted construction and plumbing company dedicated to
            delivering top-quality craftsmanship and exceptional customer
            service. With years of experience, our skilled team ensures every
            project is completed on time and to the highest standards.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We specialize in residential and commercial services, utilizing
            modern equipment and environmentally friendly practices. Our mission
            is to build lasting relationships with our clients through
            reliability, integrity, and expertise.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
