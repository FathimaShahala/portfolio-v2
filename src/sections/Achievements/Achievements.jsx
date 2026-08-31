import { achievements } from "../../data/achievements";
import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section id="achievements" className="bg-slate-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Achievements
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {achievements.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale:1.05 }}
              className="bg-slate-900 rounded-2xl p-8 text-center border border-slate-700"
            >
              <h3 className="text-5xl font-bold text-cyan-400">
                {item.number}
              </h3>

              <p className="mt-4 text-slate-300">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}