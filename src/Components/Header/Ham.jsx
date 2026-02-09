import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

export function Ham({ headerHeight }) {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Tech Stack", to: "/#techstack" },
    { name: "Projects", to: "/#projects" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <>
      <button onClick={() => setOpen(!open)} className="text-2xl cursor-pointer hover:scale-110 transition-transform">
        <GiHamburgerMenu />
      </button>

      <div
        style={{ top: open ? headerHeight : -999 }}
        className={`fixed left-0 w-full bg-gray-700 text-white backdrop-blur-md z-999
        transition-all duration-600 ease-in-out overflow-hidden`}
      >
        <div className="flex flex-col items-center gap-6 py-8 text-white text-lg ">

          {links.map((link) => (
            <Link key={link.name} to={link.to} onClick={() => setOpen(false)} className="hover:scale-95">
              {link.name}
            </Link>
          ))}

          <div className="flex gap-6 pt-4 text-2xl">
            <FaGithub className="hover:scale-110 rounded"/>
            <ImLinkedin className="hover:scale-110 rounded"/>
          </div>

        </div>
      </div>
    </>
  );
}
