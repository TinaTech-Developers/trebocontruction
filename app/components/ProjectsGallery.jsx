"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Residential Plumbing Upgrade",
    image: "/plambing.png",
    description: "Modernized the entire plumbing system for a suburban home.",
  },
  {
    title: "Commercial Construction Site",
    image: "/IMG-20250524-WA0020.jpg",
    description: "Completed steel framing and foundation for office building.",
  },
  {
    title: "Bathroom Remodel",
    image: "/bath.png",
    description: "Full bathroom renovation with premium fixtures and tiles.",
  },
  {
    title: "Kitchen Plumbing Installation",
    image: "/plumbing.webp",
    description: "Installed high-efficiency plumbing in a newly built kitchen.",
  },
  {
    title: "Industrial Pipe Repair",
    image: "/industry.png",
    description: "Quick and reliable pipe repairs in a factory setting.",
  },
  {
    title: "New Office Construction",
    image: "/IMG-20250524-WA0025.jpg",
    description: "Turnkey construction for a small business office.",
  },
];

export default function ProjectGallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const openModal = (index) => {
    setActiveProject(index);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setActiveProject(null);
  };

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-green-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Recent Work
        </motion.h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Check out some of our latest projects showcasing quality and
          dedication.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg bg-white border border-green-100"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            onClick={() => openModal(index)}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative h-56 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-green-800">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && activeProject !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-4xl w-full bg-white rounded-lg shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-700 hover:text-green-700 text-2xl font-bold"
              onClick={closeModal}
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="relative h-96 w-full rounded-t-lg overflow-hidden">
              <Image
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-2xl font-bold text-green-800 mb-2">
                {projects[activeProject].title}
              </h3>
              <p className="text-gray-700">
                {projects[activeProject].description}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
