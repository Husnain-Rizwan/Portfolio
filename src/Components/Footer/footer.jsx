import { SiGmail } from "react-icons/si";
import { FaPhoneAlt, FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="max-w-[2200px] w-full bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 text-slate-100 flex flex-col md:flex-row justify-between px-6 py-8 md:py-10 mx-auto lg:w-[70%] mt-12 mb-6 rounded-[2.5rem] shadow-2xl border border-white/10 backdrop-blur-xl">

      {/* Left Section */}
      <div className="flex flex-col md:w-[40%] gap-3">
        <span className="text-sm uppercase tracking-[0.25em] text-cyan-400/70">Let&apos;s build something</span>
        <p className="text-lg md:text-xl text-slate-100 font-semibold leading-relaxed">Building polished, responsive web experiences with clear typography and modern interactions.</p>
        <span className="font-semibold text-slate-300 mt-2">© 2026 Husnain Rizwan</span>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-6 md:items-end">
        <div className="flex flex-col gap-3 text-slate-200">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/5 border border-white/10 py-3 px-4 shadow-sm">
            <FaPhoneAlt className="text-cyan-300" />
            <span className="font-medium">+92 304 5584902</span>
          </div>
          <div className="inline-flex items-center gap-3 rounded-full bg-white/5 border border-white/10 py-3 px-4 shadow-sm">
            <SiGmail className="text-cyan-300" />
            <span className="font-medium">husnainrizwan114@gmail.com</span>
          </div>
        </div>

        <div className="flex gap-4">
          <Link to="https://github.com/Husnain-Rizwan" target="_blank" className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 border border-white/10 text-white transition duration-300 hover:bg-cyan-500 hover:text-slate-950 hover:-translate-y-1">
            <FaGithub className="w-6 h-6" />
          </Link>
          <Link to="https://www.linkedin.com/in/muhammad-husnain-rizwan-3a0809317" target="_blank" className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 border border-white/10 text-white transition duration-300 hover:bg-cyan-500 hover:text-slate-950 hover:-translate-y-1">
            <ImLinkedin className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
