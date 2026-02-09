import ProfilePicture from "../../assets/Profile-Picture.png";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section
      id="Hero-Section"
      className="max-w-4xl mx-auto my-20 px-4 py-4 flex flex-col items-center md:flex-row md:justify-between md:items-center gap-8"
    >
      <h1 className="text-2xl text-center md:text-left md:w-[55%] text-[#42446E] font-bold leading-snug">
        <span className="block">Hi,</span>
        <span className="block">My name is</span>
        <span
          className="block bg-linear-to-r from-[hsla(207,80%,56%,1)] 
                     to-[hsla(314,80%,48%,1)] bg-clip-text text-transparent font-bold"
        >
          Husnain Rizwan.
        </span>
        <span className="block">I am a frontend web developer.</span>
      </h1>

      <div className="p-1.5 w-44 h-44 rounded-full bg-linear-to-t from-[hsla(207,80%,56%,1)] to-[hsla(314,80%,48%,1)] flex items-center justify-center">
        <Link to="/about">
          <img
            className="w-full h-full rounded-full object-cover"
            src={ProfilePicture}
            alt="Profile"
          />
        </Link>
      </div>
    </section>
  );
}
