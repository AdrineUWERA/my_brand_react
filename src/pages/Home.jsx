import React from "react";
import HeroSection from "../components/HomeComponents/HeroSection";
import AboutMe from "../components/HomeComponents/AboutMe";
import Skills from "../components/HomeComponents/Skills";
import Work from "../components/HomeComponents/Work";
import BlogList from "../components/HomeComponents/BlogList";
import Contact from "../components/HomeComponents/Contact";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Skills />
      <Work />
      <BlogList />
      <Contact />
    </div>
  );
};

export default Home;
