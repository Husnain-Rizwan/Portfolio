import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export function ProjectBox({ data, onClose }) {
  const modalRef = useRef();

  const CloseModal = (event) => {
    if (modalRef.current === event.target) onClose();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden"; 
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, []);

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex justify-center items-center p-4"
      onClick={CloseModal}
    >
      <div className="relative flex flex-col bg-slate-950 border border-white/10 rounded-[2rem] shadow-2xl overflow-y-auto w-full max-w-md md:max-w-3xl h-auto max-h-[90vh] ring-1 ring-white/5">
        
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-slate-200 hover:text-cyan-300 transition"
          onClick={onClose}
        >
          <IoIosCloseCircle size={35} />
        </button>

        {/* Image */}
        <img
          className="w-full h-48 md:h-80 object-cover object-top rounded-t-[2rem]"
          src={data.image}
          alt={data.title}
          loading="lazy"
          decoding="async"
        />

        <div className="px-6 py-6 text-left text-slate-100">
          <h1 className="mt-4 font-extrabold text-3xl md:text-4xl text-white">
            {data.title}
          </h1>
          <p className="mt-4 text-sm md:text-base leading-7 text-slate-300 mb-5">
            {data.description}
          </p>

          <div className="flex flex-wrap gap-3 mt-3 items-center">
            <h1 className="font-semibold text-slate-100 whitespace-nowrap">Tech stack:</h1>
            {data.techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-white/5 border border-white/10 py-2 px-3 rounded-full text-slate-200 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6 mb-4">
            <Link
              to={data.liveViewLink}
              className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 py-3 px-5 rounded-2xl text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5"
              target="_blank"
            >
              <FaLink /> Live View
            </Link>
            <Link
              to={data.viewCodeLink}
              className="flex items-center justify-center gap-2 bg-slate-800/90 border border-white/10 hover:bg-slate-700 py-3 px-5 rounded-2xl text-sm font-semibold text-slate-100 transition duration-300 hover:-translate-y-0.5"
              target="_blank"
            >
              <FaGithub /> View Code
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
