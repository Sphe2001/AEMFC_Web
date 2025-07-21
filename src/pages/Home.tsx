import React from "react";
import HomeHero from "../components/sections/home/Hero";
import HomeSection from "../components/ui/home/Home";
import MandateSection from "../components/ui/home/Mandate";
import AboutSection from "../components/ui/home/About";
import Contact from "../components/ui/home/Contact";

const HomePage = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <HomeHero />
      <HomeSection />
      <MandateSection />
      <AboutSection />
      <Contact />
    </main>
  );
};
export default HomePage;
