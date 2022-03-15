import React from "react";
// import News from '../component/News';
import Roadmap from "../component/Roadmap";
import Hero from "../component/Hero";
import Keyfeatures from "../component/Keyfeatures";
import About from "./About";
import BuyBBT from "./BuyBBT";
import Tokenomics from "./Tokenomics";
import TaxationExplained from "./TaxationExplained";
import SectionFAQs from "./SectionFAQs";
import Contact from "./Contact";
import Footer from "./Footer";
// import Mobmap from '../component/Mobmap';

export default function Home() {
  return (
    <div>
      <Hero />
      <hr className="mt-0"/>
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
