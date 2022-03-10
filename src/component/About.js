import React from 'react'
import aboutImg from '../images/badge.png'

export default function About() {
  return (
    <div id='about-cont'>
      <div className="row my-5">
        <div className="col-md-6">
          <img src={aboutImg} alt="" id='aboutImg' />
        </div>
        <div className="col-md-6">
          <h2>What Makes <span style={{color:"#ffcc00"}}>Booby Trap</span> Different?</h2>
          <p>$BBT is building a platform to bring investors a number of GOOD options to choose from. A One-Stop platform to find the most Legit Devs and their projects, with a detailed insight into their previous, current and upcoming projects.</p>
          <p>Utilizing Trap-Points system $BBT will place the most Legit Devs &amp; Projects on 'SAFE HAVEN' Platform. $BBT holders who invest into projects listed on our 'SAFE HAVEN' Platform will enjoy extra layer of protection with their investment being insured by $BBT. Should any fraud take place from the Devs listed on “SAFE HAVEN”, $BBT will reimburse investors holding $BBT tokens prior to investing in projects listed.</p>
          <p>A platform to find all GOOD in DeFi and thus filter all BAD that is lurking in the unknown corners of DeFi.</p>
          <ul id='aboutList'>
            <li>TRAP POINTS SYSTEM</li>
            <li>COMMUNITY GOVERNANCE MODEL</li>
            <li>DUAL LAYERED PROTECTION</li>
            <li>SAFE HAVEN PLATFORM</li>
            <li>BOOBY TRAP PLATFORM</li>
            <li>$BBT SQUARE -FREELANCING ON DeFi</li>
            <li>INSURANCE DAO - Making Secure DeFi a Reality</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
