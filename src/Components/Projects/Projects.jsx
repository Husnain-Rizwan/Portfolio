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
    <section className="flex flex-col justify-center  mt-20 px-4 py-2 w-[70%] mx-auto my-20 text-center">
      {/* Popup */}
      {visible && <ProjectBox data={selectedData} onClose={() => setVisible(false)} />}

      <div>
        <h1 className="text-2xl text-[#42446E] font-bold">Projects</h1>
        <p className="text-ms text-gray-500 mt-3">Things I've been working on recently</p>
      </div>

      <div id='projects' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 rounded-2xl p-12 shadow-2xl bg-gray-700">
        {ProjectsArray.map((project) => (
          <div
            key={project.id}
            className="max-w-70 max-h-120 bg-[#EEF0FF] rounded-lg cursor-pointer hover:scale-95 transition-all shadow-lg"
            onClick={() => handleProjectClick(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="w-full h-40 object-cover object-top mb-4 rounded-md"
            />
            <h2 className="text-lg font-bold text-[#42446E] px-4">{project.title}</h2>
            <p className="text-[13px] text-gray-600 px-4 pb-4 text-left wrap-anywhere ">{project.description.slice(0, 180)}...</p>
          </div>
        ))}
      </div>
    </section>
  );
}
