import { motion } from "framer-motion";
import { Code2, GraduationCap, MapPin, Briefcase } from "lucide-react";

const cards = [
  {
    icon: <Code2 size={28} />,
    title: "Projects",
    value: "3+ MERN Projects",
  },
  {
    icon: <GraduationCap size={28} />,
    title: "Education",
    value: "B.Tech Graduate",
  },
  {
    icon: <MapPin size={28} />,
    title: "Location",
    value: "Kerala, India",
  },
  {
    icon: <Briefcase size={28} />,
    title: "Status",
    value: "Open to Work",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-slate-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4"
        >
          About Me
        </motion.h2>

        <p className="text-slate-400 text-center max-w-3xl mx-auto mb-16 leading-8">
          I'm a Software Engineer passionate about developing modern web and
          mobile applications. I work with the MERN Stack for full-stack web
          development and Flutter for cross-platform mobile applications. I
          enjoy transforming ideas into intuitive, scalable, and
          high-performance digital products.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
              My Journey
            </h3>

            <p className="text-slate-300 leading-8">
              I specialize in building full-stack web applications using React,
              Node.js, Express.js, and MongoDB, along with cross-platform mobile
              applications using Flutter and Dart. My projects, including{" "}
              <strong>BookNest</strong> and
              <strong> MigrantLink</strong>, demonstrate my ability to develop
              responsive user interfaces, secure authentication systems, REST
              APIs, database-driven applications, and mobile-friendly solutions.
            </p>

            <p className="text-slate-300 leading-8 mt-6">
              I'm actively seeking opportunities as a Software Engineer, MERN
              Stack Developer, Flutter Developer, or Full Stack Developer, where
              I can contribute to impactful products while continuously learning
              and growing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-5"
          >
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition"
              >
                <div className="text-cyan-400 mb-4">{card.icon}</div>

                <h4 className="font-semibold text-lg">{card.title}</h4>

                <p className="text-slate-400 mt-2">{card.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
