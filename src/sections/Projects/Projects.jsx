import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, CheckCircle } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4"
        >
          Featured Projects
        </motion.h2>

        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-16">
          A collection of responsive web and mobile applications built using
          MERN Stack and Flutter.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:border-cyan-500"
            >
              {/* Featured Badge */}

              {project.featured && (
                <div className="absolute z-10 m-4">
                  <span className="bg-cyan-500 text-white text-xs px-3 py-1 rounded-full">
                    ⭐ Featured
                  </span>
                </div>
              )}

              {/* Image Slider */}

              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="h-60"
              >
                {project.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={project.title}
                      className="w-full h-60 object-cover hover:scale-105 transition duration-500"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-cyan-400 mt-2">
                  {project.category}
                </p>

                <p className="text-slate-400 mt-4 leading-7">
                  {project.description}
                </p>

                {/* Features */}

                {project.features && (
                  <div className="mt-6 space-y-2">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-slate-300"
                      >
                        <CheckCircle
                          size={18}
                          className="text-cyan-400"
                        />

                        {feature}
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-800 border border-slate-700 px-3 py-1 rounded-full text-sm hover:bg-cyan-500 hover:text-white transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-xl transition"
                  >
                    <FaGithub />
                    Source Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-cyan-500 hover:bg-cyan-500 px-5 py-3 rounded-xl transition"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}