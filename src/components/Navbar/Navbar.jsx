import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { desc } from "../../data/desc";



const navItems = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Services", to: "services" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-slate-900/70 border-b border-slate-700">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-cyan-400 cursor-pointer">
          Fathima.
        </h1>

        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-cyan-400 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={desc.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-full transition"
        >
          Resume
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-slate-900 px-6 py-6 space-y-5">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              onClick={() => setOpen(false)}
              className="block cursor-pointer hover:text-cyan-400"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
