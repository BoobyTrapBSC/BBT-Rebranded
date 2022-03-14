import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Platform from "./Platform";

export default function SafeHaven() {
  const [activeTab, setActiveTab] = useState(1);

  const toggleActive = (num) => {
    setActiveTab(num);
  };

  return (
    <>
      <div
        id="safehaven-cont"
        className="pt-5"
        style={{ borderTop: "1px solid #474747" }}
      >
        <h1>SAFE HAVEN</h1>
        <h2>Best Rated in DeFi</h2>
        <p>
          0 Trap Points means the safest! lower trap points means safer! Read more
          about{" "}
          <Link
            to="/"
            style={{ color: "#fff", fontSize: "16px", fontWeight: "500" }}
          >
            trap points
          </Link>
        </p>
        <div className="projectTable mt-5">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link
                className={activeTab === 1 ? "nav-link active" : "nav-link"}
                aria-current="page"
                onClick={() => toggleActive(1)}
                to="/platform/safehaven/safuprojects"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={activeTab === 2 ? "nav-link active" : "nav-link"}
                onClick={() => toggleActive(2)}
                to="/platform/safehaven/safeowners"
              >
                Project Owners
              </Link>
            </li>
          </ul>
          <div className="container-fluid mt-2">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
