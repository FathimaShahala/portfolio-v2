import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-4"
        >
          Let's Connect
        </motion.h2>

        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-16">
          I'm currently open to full-time opportunities, freelance projects, and
          collaborations. Whether you need a MERN web application, a Flutter
          mobile app, or a modern portfolio website, I'd love to discuss your
          ideas.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-cyan-400" />
              <span>shahala.rafeek123@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-cyan-400" />
              <span>+91 96459 87948</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-cyan-400" />
              <span>Kerala, India</span>
            </div>

            <div className="flex gap-6 pt-6">
              <a
                href="https://github.com/FathimaShahala"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub
                  size={30}
                  className="hover:text-cyan-400 transition"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/fathima-shahala-0941731b8/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin
                  size={30}
                  className="hover:text-cyan-400 transition"
                />
              </a>
            </div>
          </div>

          {/* Contact Form */}

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-800 rounded-xl p-4 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-slate-800 rounded-xl p-4 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-slate-800 rounded-xl p-4 outline-none"
            />

            <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
