import React from "react";
// import News from '../component/News';
import Roadmap from "../component/Roadmap";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Keyfeatures from "../component/Keyfeatures";
import About from "./About";
import BuyBBT from "./BuyBBT";
import Tokenomics from "./Tokenomics";
import TaxationExplained from "./TaxationExplained";
import SectionFAQs from "./SectionFAQs";
import Contact from "./Contact";
import Footer from "./Footer";
import video from '../videos/video-background.m4v'
// import Mobmap from '../component/Mobmap';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <hr />
      <Keyfeatures />
      <hr />
      <About />
      <BuyBBT />
      <hr />
      <Tokenomics />
      <hr />
      <TaxationExplained />
      <Roadmap />
      <hr />
      <SectionFAQs />
      <Contact />
      <hr />
      <Footer />
    </div>
  );
}
