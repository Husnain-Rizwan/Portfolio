import { SiGmail } from "react-icons/si";
import { FaPhoneAlt, FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="max-w-[2200px] w-full bg-gray-700 text-white flex flex-col md:flex-row justify-between px-6 py-6 md:py-10 mx-auto lg:w-[70%] lg:mx-auto mt-8 mb-4 rounded-2xl font-sm shadow-lg gap-6">

      
      {/* Left Section */}
      <div className="flex flex-col md:w-[35%] gap-2">
        <span>Building clean and responsive web experiences.</span>
        <span className="font-bold mt-2">© 2026 Husnain Rizwan</span>
      </div>

      {/* Right Section */}
      <div className="flex flex-col  gap-4">
        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span className="font-bold">+92 304 5584902</span>
          </div>
          <div className="flex items-center gap-2">
            <SiGmail /> 
            <span className="font-bold">husnainrizwan114@gmail.com</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-2">
          <Link to="https://github.com/Husnain-Rizwan" target="_blank">
              <FaGithub className="w-6 h-6 hover:scale-110 transition-transform" />
            </Link>

            <Link to="https://www.linkedin.com/in/muhammad-husnain-rizwan-3a0809317" target="_blank">
              <ImLinkedin className="w-6 h-6 rounded-2xl hover:scale-110 transition-transform" />
            </Link>
        </div>
      </div>
    </footer>
  );
}
