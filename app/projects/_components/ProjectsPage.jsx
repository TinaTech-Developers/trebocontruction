"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    category: "Plumbing",
    title: "Residential Plumbing Installation",
    image: "/plambing.png",
  },
  {
    category: "Construction",
    title: "Modern Home Construction",
    image: "/IMG-20250527-WA0021.jpg",
  },
  {
    category: "Decking",
    title: "Outdoor Deck with Pergola",
    image: "/IMG-20250524-WA0027.jpg",
  },
  {
    category: "Plumbing",
    title: "Commercial Pipe Refitting",
    image: "/industry.png",
  },

  {
    category: "Decking",
    title: "Poolside Wooden Deck",
    image: "/IMG-20250524-WA0026.jpg",
  },
];

const ProjectsPage = () => {
  return (
    <>
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            Craftsmanship in Every Detail
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From plumbing repairs to full-scale construction and beautiful
            outdoor decking, our work speaks for itself.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-green-700 text-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Got a Vision? Let's Make It a Reality.
          </h2>
          <p className="text-lg mb-6">
            Whether it's plumbing, decking, or a complete build — we’re ready to
            help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
