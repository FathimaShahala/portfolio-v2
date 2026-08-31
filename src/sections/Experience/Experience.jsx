import { motion } from "framer-motion";
import { experience } from "../../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-900 py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Experience
        </h2>

        <div className="space-y-8">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity:0, x:-50 }}
              whileInView={{ opacity:1, x:0 }}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700"
            >
              <p className="text-cyan-400 font-semibold">
                {item.year}
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {item.title}
              </h3>

              <p className="text-slate-400">
                {item.company}
              </p>

              <p className="mt-4 text-slate-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}