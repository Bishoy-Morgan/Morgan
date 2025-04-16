// import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";


export default function Home() {
  // const [isHeroVisible, setIsHeroVisible] = useState(true); // Track visibility of the hero section

  //   useEffect(() => {
  //       const heroElement = document.getElementById('heroSection'); // Get the hero section by its ID

  //       const observer = new IntersectionObserver(
  //           (entries) => {
  //               const entry = entries[0];
  //               // If the hero section is not in the viewport, change the navbar color
  //               setIsHeroVisible(entry.isIntersecting);
  //           },
  //           { threshold: 0.5 } // Trigger when 50% of the hero section is visible
  //       );

  //       if (heroElement) {
  //           observer.observe(heroElement); // Start observing the hero section
  //       }

  //       return () => {
  //           if (heroElement) {
  //               observer.unobserve(heroElement); // Cleanup observer on component unmount
  //           }
  //       };
  //   }, []);
  return (
    <main>
      <Navbar />
      <HeroSection />
      <About />
    </main>
  );
}
