import React from "react";
import { FiUser, FiUserCheck } from "react-icons/fi";
import SidebarSlide from "./SidebarSlide";

export default function Platform() {
  return (
    <div id="platform-cont">
      <SidebarSlide />
      <div id="sidebarWrapper">
        <div className="container-fluid">
          <h2 className="text-center">SAFE HAVEN</h2>
          <div className="container">
            <div className="connectedWallet">
              <button className="btn btn-secondary w-100 text-start">
                <FiUser /> Connect Wallet
              </button>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
