import React from 'react'
// import News from '../component/News';
import Roadmap from '../component/Roadmap';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import Keyfeatures from '../component/Keyfeatures';
import CarouselHome from '../component/CarouselHome';
import Defiloss from '../component/Defiloss';
import Team from './Team';
import About from './About';
import BuyBBT from './BuyBBT';
// import Mobmap from '../component/Mobmap';

export default function Home() {
    return (
        <div>
            <Navbar/>
            <Hero />
            <hr />
            <Keyfeatures />
            <hr />
            <About/>
            <BuyBBT/>
            <CarouselHome />
            <Defiloss />
            <Team/>
            <Roadmap />
            {/* <Mobmap/> */}
            {/* <News/> */}
        </div>
    )
}
