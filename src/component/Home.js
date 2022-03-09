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
import bg from '../videos/video-background.mp4'
// import Mobmap from '../component/Mobmap';

export default function Home() {
  return (
    <div>
      {/* <video style={{ width: "100%", height: "100vh", position: "absolute", objectFit: "cover" }} src={bg} muted preload='auto' autoPlay={"autoplay"} loop></video> */}
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
