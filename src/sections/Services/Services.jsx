import { motion } from "framer-motion";
import { services } from "../../data/services";

export default function Services() {
  return (
    <section id="services" className="bg-slate-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-4"
        >
          Services
        </motion.h2>

        <p className="text-center text-slate-400 max-w-3xl mx-auto mb-16">
          I help individuals, startups, and businesses build modern web and
          mobile applications with clean code, responsive design, and scalable
          solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition"
              >
                <Icon className="text-cyan-400 mb-5" size={42} />

                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}