import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/footer";

export function Contact() {
  return (
    <>
      <Header />

      {/* Full screen container to center the card */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">

        <div className="max-w-md w-full bg-gray-700 text-white p-6 md:p-8 shadow-lg rounded-2xl flex flex-col items-center space-y-4">

          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Contact Me
          </h2>

          <div className="text-center space-y-1">
            <p className="font-semibold text-sm md:text-base">📞 +92 304 5584902</p>
            <p className="font-semibold text-sm md:text-base">✉️ husnainrizwan114@gmail.com</p>
          </div>

          <div className="flex space-x-6 mt-4">
            <Link
              to="https://github.com/Husnain-Rizwan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110  transition-transform"
            >
              <FaGithub className="w-8 h-8 md:w-10 md:h-10 rounded-2xl" />
            </Link>

            <Link
              to="https://www.linkedin.com/in/muhammad-husnain-rizwan-3a0809317"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <ImLinkedin className="w-8 h-8 md:w-10 md:h-10 rounded-2xl" />
            </Link>
          </div>
        </div>
      </div>

    </>
  );
}
