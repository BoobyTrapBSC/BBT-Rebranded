import React from 'react'
import {FaCodeBranch, FaBroadcastTower} from 'react-icons/fa'
import {SiBinance} from 'react-icons/si'
import {GiStrongbox} from 'react-icons/gi'

export default function TaxationExplained() {
  return (
    <div id='taxation-cont'>
            <h2>Innovative <span>Tokenomics</span></h2>
        <div className="row">
            <div className="col-md-6 d-flex">
                <SiBinance style={{fontSize:"35px"}}/>&nbsp;
                <div>
                    <h3>6% on buy / 8% on sell for ETH Rewards</h3>
                    <p>Our holders will enjoy the benefit of being rewarded with Binance Pegged-ETH by just holding our token.</p>
                    <p>To be eligible for dividend, holders need to have  a minimum of 200,000 $EFT</p>
                    <p>Rewards will be proportional to the number of tokens held by holders</p>
                </div>
            </div>
            <div className="col-md-6 d-flex">
                <FaBroadcastTower style={{fontSize:"55px"}}/>&nbsp;
                <div>
                    <h3>2% on buy / 2% on sell for Marketing Tax</h3>
                    <p>The marketing tax is spent on frequent influencer posts, posts on renowned crypto websites, etc., to ensure consistent visibility throughout the cryptocurrency space.</p>
                </div>
            </div>
            <div className="col-md-6 d-flex">
                <GiStrongbox style={{fontSize:"25px"}}/>&nbsp;
                <div>
                    <h3>1% on buy / 3% on sell for Automatic addition to Liquidity</h3>
                    <p>It will be added automatically to the Liquidity Pool on Pancake Swap (PCS)</p>
                </div>
            </div>
            <div className="col-md-6 d-flex">
                <FaCodeBranch style={{fontSize:"30px"}}/>&nbsp;
                <div>
                    <h3>1% on buy / 1% on sell for Development</h3>
                    <p>Development tax is used towards development of future utilities such as staking pool,  voting dashboard, the community and further utilities</p>
                </div>
            </div>
        </div>
    </div>
  )
}
