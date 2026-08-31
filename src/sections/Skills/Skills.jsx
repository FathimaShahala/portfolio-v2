import { motion } from "framer-motion";
import { skillCategories } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4"
        >
          Technical Skills
        </motion.h2>

        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-16">
          Technologies and tools I use to build modern, responsive, and scalable web applications.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-slate-800 rounded-2xl border border-slate-700 p-8 hover:border-cyan-400 transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-slate-700 hover:bg-cyan-500 transition cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}