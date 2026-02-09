import html5Logo from "../../assets/html5-logo.svg";
import css3Logo from "../../assets/css3-logo.svg";
import jsLogo from "../../assets/javascript-logo.svg";
import reactLogo from "../../assets/react-logo.svg";
import gitLogo from "../../assets/git-logo.svg";
import githubLogo from "../../assets/github-logo.svg";
import tailwindLogo from "../../assets/tailwind-logo.svg";
import vsCodeLogo from "../../assets/vs-code-logo.svg";

export function TechStack(){
  const technologies = [
    { name: "HTML5", imgSrc: html5Logo },
    { name: "CSS3", imgSrc: css3Logo },
    { name: "JavaScript", imgSrc: jsLogo },
    { name: "React", imgSrc: reactLogo },
    { name: "Git", imgSrc: gitLogo },
    { name: "GitHub", imgSrc: githubLogo },
    { name: "Tailwind CSS", imgSrc: tailwindLogo },
    { name: "Vs code", imgSrc: vsCodeLogo }]
  return(
    <>
    
    <section id='techstack' className="flex flex-col justify-center mt-20 px-4 py-2 w-[51%] mx-auto my-20 text-center">
      <div>
      <h1 className="text-2xl text-[#42446E] font-bold">My Tech Stack</h1>
      <p className="text-ms text-gray-500 mt-3">Technologies I've been working with recently</p>
      </div>

      <div className="flex flex-wrap justify-center gap-14 mt-12">
        {technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={tech.imgSrc} alt={tech.name} className="w-16 h-16 object-contain" />
            <span className="mt-2 text-sm text-gray-700">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}