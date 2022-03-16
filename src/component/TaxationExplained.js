import React from 'react'
import {FaCodeBranch, FaBroadcastTower} from 'react-icons/fa'
import {SiBinance} from 'react-icons/si'
import {GiStrongbox} from 'react-icons/gi'

export default function TaxationExplained() {
  return (
    <div id='taxation-cont' className='position-relative my-5'>
        <div className='text-center'>
            <h2>Innovative <span style={{color:"#ffcc00"}}>Tokenomics</span></h2>
            <p>Buy- 4% Marketing Wallet, 1% Liquidity Pool, 1% Reflection and 1% Insurance</p>
            <p>Sell- 4% Marketing Wallet, 1% Liquidity Pool, 4% Reflection and 1% Insurance</p>
        </div>
        <div className="row">
            <div className="col-md-6 d-flex">
                <SiBinance style={{fontSize:"35px", color:"#ffcc00"}}/>&nbsp;
                <div>
                    <h3>Reflection: Weekdays 1% on buy &amp; 4% on sell or Weekends 12% on sell</h3>
                    <p>Our holders will enjoy the benefit of reflections just by holding our token.</p>
                    <p>To be eligible for reflections, there is no minimum holding limit.</p>
                    <p>Reflections will be proportional to the number of tokens held by holders</p>
                </div>
            </div>
            <div className="col-md-6 d-flex">
                <FaBroadcastTower style={{fontSize:"55px", color:"#ffcc00"}}/>&nbsp;
                <div>
                    <h3>Marketing: Weekdays 4% on buy &amp; 4% on sell or Weekends 8% on sell</h3>
                    <p>The marketing tax is spent on frequent influencer posts, posts on renowned crypto websites, etc., to ensure consistent visibility throughout the cryptocurrency space.</p>
                </div>
            </div>
            <div className="col-md-6 d-flex">
                <GiStrongbox style={{fontSize:"25px", color:"#ffcc00"}}/>&nbsp;
                <div>
                    <h3>Insurance: Weekdays 1% on buy &amp; 1% on sell or Weekends 2% on sell</h3>
                    <p>Insurance tax is used towards development of future utility Insurance Dao.</p>
                </div>
            </div>
            <div className="col-md-6 d-flex">
                <FaCodeBranch style={{fontSize:"30px", color:"#ffcc00"}}/>&nbsp;
                <div>
                    <h3>Liquidity: Weekdays 1% on buy &amp; 1% on sell or Weekends 3% on sell</h3>
                    <p>It will be added automatically to the Liquidity Pool on Pancake Swap (PCS)</p>
                </div>
            </div>
        </div>
    </div>
  )
}
