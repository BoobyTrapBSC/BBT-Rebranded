import React from 'react'
import { BiSearchAlt2 } from "react-icons/bi";
// import hoverImg from '../images/logo.png'
import desert from '../images/cupcake.png'
import audit from '../whitepaper/Booby-Audit.pdf'
import video from '../videos/video-background.m4v'
import mainVid from '../videos/BBT2.webm'
import Navbar from './Navbar';

export default function Hero() {

    return (
        <div id='hero-container'>
        <video id="videoBg" src={video} autoplay='' muted loop></video>
        <Navbar/>
            <div className="row rowHero">
                <div className="col-md-6 align-self-center">
                    <div>
                        <span>911 of DeFi World</span>
                        <h1 style={{color:"#90BF21", margin:"0"}}>Safe Haven</h1><h1 className='mt-0'>For Investors</h1>
                        <p>$BBT brings legit projects audited by a team of experienced Devs. All in one platform to find the most legit projects out there on BSC.</p>
                    </div>
                    <div className="heroSearch my-4">
                        <input type="text" placeholder="Search safu projects..." />
                        <BiSearchAlt2 id='searchIco'/>
                    </div>
                    <div className='heroBtn mb-3'>
                        <a href='https://pancakeswap.finance/swap?outputCurrency=0x609b88f5a4aBB7A55bA0c6d255C3F1b1bC7A4D76' target = "_blank" rel="noreferrer" className='btnYellow btn'>BUY $BBT</a>
                        <a href="https://poocoin.app/tokens/0x609b88f5a4abb7a55ba0c6d255c3f1b1bc7a4d76" target = "_blank" rel="noreferrer" className='btnYellow btn ms-2'>CHART</a>
                    </div>
                    <div className="heroAudit">
                        <b>Audited by:</b> &nbsp;
                        <img src={desert} alt="" height="16px"/> &nbsp;
                        <a href={audit} target="_blank" rel="noreferrer">Desert Finance</a>
                    </div>
                </div>
                <div className="col-md-6 position-relative">
                    {/* <img id='heroImg' src={hoverImg} alt="" /> */}
                    <video id='mainVid' src={mainVid} autoPlay="autoplay" muted loop></video>
                </div>
            </div>
        </div>
    )
}