import React from "react";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import WorkSection from "./components/WorkSection";
import ContactSection from "./components/ContactSection";
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      {/* <ContactSection /> */}
    </main>
  );
}
