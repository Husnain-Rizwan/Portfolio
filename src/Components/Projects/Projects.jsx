import { useState } from "react"; 
import { ProjectBox } from "./ProjectBox";
import ProjectBoxImage from "../../assets/Project-box-img.jpg";
import netflix from "../../assets/netflix.png";
import amazon from "../../assets/Amazon.png";
import ecommerce from "../../assets/Ecommerce.png";
import portfolio from "../../assets/Portfolio.png";

export function Projects() {
  const ProjectsArray = [
    {
      id: 1,
      image: netflix,
      title: "Netflix Clone",
      description: "A responsive Netflix homepage clone built using HTML, CSS, and JavaScript, featuring a layout closely inspired by the original design. JavaScript is used to handle interactive popup boxes, and all links redirect to the official Netflix website for a realistic browsing experience.",
      techStack: ["HTML", "CSS", "JavaScript"],
      liveViewLink: "https://netflx-main-page-clone.netlify.app/",
      viewCodeLink: "https://github.com/Husnain-Rizwan/Netlfix-FrontPage-Clone"
    },
    {
      id: 2,
      image: amazon,
      title: "Amazon Clone",
      description: "Developed a fully functional Amazon front-end clone using HTML, CSS, and JavaScript. Implemented product listing, add-to-cart functionality, and dynamic cart calculations including total payment summary. Enabled order tracking and placing orders directly from the cart, creating an interactive, user-friendly shopping experience that mimics real e-commerce functionality.",
      techStack: ["HTML", "CSS", "JavaScript"],
      liveViewLink: "https://amazon-cart-frontend-clone.netlify.app/",
      viewCodeLink: "https://github.com/Husnain-Rizwan/amazon-clone"
    },
    {
      id: 3,
      image: ecommerce,
      title: "E-commerce Platform (React & JS)",
      description: "Built a dynamic e-commerce application using React, JavaScript, and CSS with CDN backend integration. The app loads products via API calls, manages the shopping cart through the CDN backend, calculates totals, and places orders using the current cart. Implemented order tracking based on expected delivery dates, ensuring all calculations and data management are handled by the CDN backend for a fully interactive shopping experience.",
      techStack: ["HTML", "CSS", "JavaScript", "React", "API", "Backend"],
      liveViewLink: "#",
      viewCodeLink: "https://github.com/Husnain-Rizwan/ecommerce-project"
    },
    {
      id: 4,
      image: portfolio,
      title: "Personal Portfolio",
      description: "Developed a responsive portfolio website using React, JavaScript, and Tailwind CSS, implementing React Router for seamless multi-page navigation. Designed multiple pages showcasing projects and skills, ensuring the layout is fully responsive across different devices for a smooth user experience.",
      techStack: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      liveViewLink: "https://husnain-rizwan-portfolio.netlify.app/",
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
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover object-top mb-4 rounded-md" />
            <h2 className="text-lg font-bold text-[#42446E] px-4">{project.title}</h2>
            <p className="text-[13px] text-gray-600 px-4 pb-4 text-left wrap-anywhere ">{project.description.slice(0, 180)}...</p>
          </div>
        ))}
      </div>
    </section>
  );
}
