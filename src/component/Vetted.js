import React from 'react'
import {Link} from 'react-router-dom'

export default function Vetted() {
  return (
    <div id='vettedCont'>
        <div className="row">
            <div className="col-md-4 px-2">
                <h3>Vetted Projects</h3>
                <p>$BBT team of experienced DEVS will apply their expertise and post legit projects on our “Safe Haven” Dashboard where investors can invest without having to worry about Rugpulls and Honeypots.</p>
            </div>
            <div className="col-md-4 px-2">
                <h3>Diamond Hodlers</h3>
                <p>The $BBT Hodlers will benefit the most as community. They would be the first to know about upcoming PROMISING and SAFU projects on BSC.</p>
            </div>
            <div className="col-md-4 px-2">
                <h3>Scammers Booby-Trapped</h3>
                <p>Our “BOOBY-TRAP” Dashboard will list all potential scams (Rugpulls &amp; Honeypots) to help our community stay away from Frauds on DEFI.</p>
            </div>
        </div>
        <div style={{width:"fit-content", margin:"auto"}}>
            <Link to="/docs" className="btn btnYellow">FAQs</Link>
        </div>
    </div>
  )
}
