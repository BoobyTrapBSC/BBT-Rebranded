import React from "react";
import { Link, Outlet } from "react-router-dom";
import SafeHaven from "./SafeHaven";
import SidebarSlide from "./SidebarSlide";

export default function Platform() {
  return (
    <div id="platform-cont">
      <SidebarSlide />
      <div id="sidebarWrapper">
        <div className="container-fluid">
          <div className="topBar d-flex flex-row-reverse pt-3">
            <button className="btn">Connect Wallet</button>
            <a target="_blank" rel="noreferrer" href="https://pancakeswap.finance/swap?outputCurrency=0x609b88f5a4aBB7A55bA0c6d255C3F1b1bC7A4D76" className="btn">BUY $BBT</a>
          </div>
          <div className="container">
            <div className="row my-5 justify-content-around">
              <div className="col-md-3">
                <h3>$0.00001</h3>
                <span>Your $BBT Balance</span>
              </div>
              <div className="col-md-3">
                <h3>$10,000,000,000</h3>
                <span>Market Cap</span>
              </div>
              <div className="col-md-3">
                <h3>$0.00001</h3>
                <span>Token Price</span>
              </div>
              <div className="col-md-3">
                <h3>150</h3>
                <span>$BBTians</span>
              </div>
            </div>
            <div className="disclaimer">
              <div className="container-fluid text-start overflow-hidden position-relative marquee" style={{ backgroundColor: "#2A2C34", color: "#b4b7bd", height: "24px", }}>
                <p><b>Disclaimer</b>: Due to unavailability of detailed information on upcoming projects, BoobyTrap Team is unable to provide Trap Points (Expert Opinion) at the moment. Trap points will be updated in due course after launch. DYOR and exercise caution while investing in any Private/Presale in such projects.</p>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
