import { Footer } from "../Footer/footer";
import { Header } from "../Header/Header";
import { ProjectBox } from "../Projects/ProjectBox";
import { Projects } from "../Projects/Projects";
import { TechStack } from "../TechStack/TechStack";
import { HeroSection } from "./HeroSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function Home() {
  const location = useLocation();

  useEffect(() => {
    // Check if URL has a hash like #projects
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Header />
      <HeroSection />
      <TechStack />
      <Projects />
      <Footer />
    </>
  );
}