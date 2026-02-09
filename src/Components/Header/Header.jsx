import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { Ham } from "./Ham";
import { useRef, useEffect, useState } from "react";

export function Header() {
  const headerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(headerRef.current.offsetHeight);
    window.addEventListener("resize", () =>
      setHeight(headerRef.current.offsetHeight)
    );
  }, []);

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Tech Stack", to: "/#techstack" },
    { name: "Projects", to: "/#projects" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <div
      ref={headerRef}
      className="fixed top-0 left-0 w-full bg-white z-50 "
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center text-gray-800 border-b border-gray-300">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold hover:scale-95">
            My Portfolio
          </h1>
        </Link>

        {/* Nav */}
        <nav className="flex items-center font-bold text-gray-600">

          {/* Mobile */}
          <div className="md:hidden">
            <Ham headerHeight={height} />
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center md:gap-4 lg:gap-8">
            {links.map((link) => (
              <Link key={link.name} to={link.to} className="hover:scale-110 hover:text-black">
                {link.name}
              </Link>
            ))}

            <Link to="https://github.com/Husnain-Rizwan" target="_blank">
              <FaGithub className="w-6 h-6 rounded-2xl hover:scale-110 hover:bg-black transition-transform" />
            </Link>

            <Link to="https://www.linkedin.com/in/muhammad-husnain-rizwan-3a0809317" target="_blank">
              <ImLinkedin className="w-6 h-6 rounded-2xl hover:scale-110 hover:bg-black transition-transforms" />
            </Link>
          </div>

        </nav>
      </div>
    </div>
  );
}
