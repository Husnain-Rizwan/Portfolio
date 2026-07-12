import { useState } from "react"; 
import { ProjectBox } from "./ProjectBox";
import ProjectBoxImage from "../../assets/Project-box-img.jpg";
import Nexus from "../../assets/Nexus.png";
import EcommerceUI from "../../assets/EcommerceUI.png";
import _24HoursStory from "../../assets/_24HoursStory.png";
import amazon from "../../assets/Amazon.png";
import ecommerce from "../../assets/Ecommerce.png";
import portfolio from "../../assets/Portfolio.png";

export function Projects() {
  const ProjectsArray = [
    {
      id: 1,
      image: EcommerceUI,
      title: "E-commerce Website UI",
      description: "Designed and developed a modern e-commerce web page with a focus on clean UI principles, precise typography, font selection, responsive layouts, and an enhanced user experience following current design standards",
      techStack: ["HTML", "CSS", "JavaScript", "React"],
      liveViewLink: "https://ecommerce-web-design-rho.vercel.app/",
      viewCodeLink: "https://github.com/Husnain-Rizwan/Ecommerce-web-design"
    },
    {
      id: 2,
      image: Nexus,
      title: "Business Nexus Features",
      description: "A Forked React-based business collaboration prototype with an interactive calendar using FullCalendar React and a dummy video calling interface for simulating meetings and communication workflows.",
      techStack: ["HTML", "CSS", "JavaScript", "React"],
      liveViewLink: "https://nexus-delta-jet.vercel.app/",
      viewCodeLink: "https://github.com/Husnain-Rizwan/Nexus"
    },
    {
      id: 3,
      image: amazon,
      title: "Amazon Cart System",
      description: "Developed a fully functional Amazon front-end Cart sytem  using HTML, CSS, and JavaScript. Implemented product listing, add-to-cart functionality, and dynamic cart calculations including total payment summary. Enabled order tracking and placing orders directly from the cart, creating an interactive, user-friendly shopping experience that mimics real e-commerce functionality.",
      techStack: ["HTML", "CSS", "JavaScript"],
      liveViewLink: "https://amazon-cart-frontendclone.netlify.app/",
      viewCodeLink: "https://github.com/Husnain-Rizwan/amazon-clone"
    },
    {
      id: 4,
      image: ecommerce,
      title: "E-commerce Platform (React & JS)",
      description: "Built a dynamic e-commerce application using React, JavaScript, and CSS with CDN backend integration. The app loads products via API calls, manages the shopping cart through the CDN backend, calculates totals, and places orders using the current cart. Implemented order tracking based on expected delivery dates, ensuring all calculations and data management are handled by the CDN backend for a fully interactive shopping experience.",
      techStack: ["HTML", "CSS", "JavaScript", "React", "API", "Backend"],
      liveViewLink: "#",
      viewCodeLink: "https://github.com/Husnain-Rizwan/ecommerce-project"
    },
    {
      id: 5,
      image: _24HoursStory,
      title: "24-Hour Story",
      description: "Developed a social media-style story feature with the help of Lovable AI, allowing users to upload 3-second stories that automatically expire and are deleted after 24 hours.",
      techStack: ["HTML", "CSS", "JavaScript", "React"],
      liveViewLink: "https://24-hours-stories-feature.vercel.app/",
      viewCodeLink: "https://github.com/Husnain-Rizwan/24Hours-Stories-Feature"
    },
    {
      id: 6,
      image: portfolio,
      title: "Personal Portfolio",
      description: "Developed a responsive portfolio website using React, JavaScript, and Tailwind CSS, implementing React Router for seamless multi-page navigation. Designed multiple pages showcasing projects and skills, ensuring the layout is fully responsive across different devices for a smooth user experience.",
      techStack: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      liveViewLink: "https://husnain-rzwan-portfolio.netlify.app/",
      viewCodeLink: "https://github.com/Husnain-Rizwan/Portfolio"
    }
  ];

  const [visible, setVisible] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedData(project); 
    setVisible(true);         // show popup
  };

  return (
    <section className="flex flex-col justify-center mt-20 px-4 py-2 w-full max-w-6xl mx-auto my-20 text-center">
      {/* Popup */}
      {visible && <ProjectBox data={selectedData} onClose={() => setVisible(false)} />}

      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80 mb-3">Featured work</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-100">Projects</h1>
        <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-400 mt-4 leading-7">A selection of recent case studies that highlight polished interfaces, modern layout, and elegant interactions.</p>
      </div>

      <div id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 p-6 md:p-8 rounded-[2rem] bg-slate-950/80 shadow-2xl border border-white/10">
        {ProjectsArray.map((project) => (
          <div
            key={project.id}
            className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/95 shadow-[0_25px_80px_-30px_rgba(15,23,42,0.8)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_-30px_rgba(15,23,42,0.9)] cursor-pointer"
            onClick={() => handleProjectClick(project)}
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-44 object-cover object-top transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>

            <div className="px-6 py-5 text-left">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-100 mb-3">{project.title}</h2>
              <p className="text-sm md:text-base text-slate-400 leading-6 mb-5">{project.description.slice(0, 140)}...</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="inline-flex items-center rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-xs text-slate-300">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
