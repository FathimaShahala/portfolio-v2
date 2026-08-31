import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../../assets/images/profile.png";
import { desc } from "../../data/desc";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-900 flex items-center px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 text-lg mb-3">👋 Hello, I'm</p>

          <h1 className="text-5xl md:text-7xl font-bold mb-5">{desc.name}</h1>

          <TypeAnimation
            sequence={[
              desc.roles[0],
              2000,
              desc.roles[1],
              2000,
              desc.roles[2],
              2000,
              desc.roles[3],
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-3xl text-cyan-400 font-semibold"
          />

          <div className="flex flex-wrap gap-5 mt-6">
            <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
              🟢 Open to Work
            </span>

            <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm">
              💼 Available for Freelance
            </span>
          </div>

          <p className="text-slate-300 mt-6 text-lg leading-8 max-w-xl">
            I'm a Software Engineer with experience in MERN Stack and Flutter
            development. I build responsive web applications, cross-platform
            mobile apps, and scalable backend APIs that deliver great user
            experiences.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <button className="bg-cyan-500 hover:bg-cyan-600 px-7 py-3 rounded-full font-semibold transition">
              View Projects
            </button>

            <a
              href="#contact"
              className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-xl font-semibold transition"
            >
              Hire Me
            </a>

            <a
              href={desc.resume}
              download="Fathima_Shahala_Resume.pdf"
              className="inline-block border border-cyan-500 hover:bg-cyan-500 px-7 py-3 rounded-full transition"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30"></div>

            <img
              src={profile}
              alt="Fathima Shahala"
              className="relative w-80 h-80 md:w-[420px] md:h-[420px] object-cover rounded-full border-4 border-cyan-400 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
