"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="relative h-96 md:h-[28rem] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/plumb.jpg"
          alt="Special Promotion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      <motion.div
        className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Special Offer – Affordable Rates on All Plumbing Services!
        </h2>
        <p className="text-white max-w-xl mb-6">
          Book your project this month and save big. Fast, reliable service with
          guaranteed quality.
        </p>
        <Link
          href="/contact"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-sm font-medium transition"
        >
          Get a Free Quote
        </Link>
      </motion.div>
    </section>
  );
}
