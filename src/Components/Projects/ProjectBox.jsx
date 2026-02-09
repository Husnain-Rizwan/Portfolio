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
    document.body.style.overflow = "hidden"; // lock scroll
    return () => {
      document.body.style.overflow = "auto"; // unlock scroll
    };
  }, []);

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex justify-center items-center p-4"
      onClick={CloseModal}
    >
      <div className="relative flex flex-col bg-[#EEF0FF] border border-gray-300 rounded-2xl shadow-lg overflow-y-auto
                      w-full max-w-md md:max-w-3xl h-auto max-h-[90vh]">
        
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-black cursor-pointer"
          onClick={onClose}
        >
          <IoIosCloseCircle size={35} />
        </button>

        {/* Image */}
        <img
          className="w-full h-48 md:h-80 object-cover object-top rounded-t-2xl"
          src={data.image}
          alt="Project Image"
        />

        <div className="px-6 py-4 text-left">
          <h1 className="mt-4 font-bold text-[#42446E] text-2xl md:text-3xl">
            {data.title}
          </h1>
          <p className="mt-2 text-sm md:text-base font-bold text-[#374151] mb-4">
            {data.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-2 items-center">
            <h1 className="font-bold whitespace-nowrap">Tech stack:</h1>
            {data.techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-[#E5E7EB] py-1 px-2 rounded-2xl text-gray-700 text-sm md:text-base"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 mb-6">
            <Link
              to={data.liveViewLink}
              className="flex items-center justify-center gap-1 bg-[#6D5BD0] py-2 px-4 rounded-xl hover:scale-95 text-white transition"
            target="_blank">
              <FaLink /> Live View
            </Link>
            <Link
              to={data.viewCodeLink}
              className="flex items-center justify-center gap-1 bg-[#6D5BD0] py-2 px-4 rounded-xl hover:scale-95 text-white transition"
             target="_blank">
              <FaGithub /> View Code
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
