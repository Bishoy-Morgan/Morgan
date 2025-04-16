// import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Capability from "./components/Capability";


export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Capability />
    </main>
  );
}
