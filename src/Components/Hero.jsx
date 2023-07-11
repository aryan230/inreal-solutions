import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="hero-component">
      <div className="hero-left">
        <div className="left-header"></div>
        <div className="left-content">
          <div className="left-content-inside">
            <h1>
              The websites you want
              <br /> we make it our Mission.
            </h1>
            <p>
              Crafting websites that captivate and convert, without compromising
              on quality or your budget.
            </p>
            <div className="lci-bottom">
              <button
                onClick={() => {
                  navigate("/form");
                }}
              >
                Get Started
              </button>
              <Link to="/form">Get Quotation for free.</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="right-header">
          <div className="right-header-inside">
            <ul>
              <li>Product</li>
              <li>Pricing</li>
              <li>
                <button
                  onClick={() => {
                    navigate("/form");
                  }}
                >
                  {" "}
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
