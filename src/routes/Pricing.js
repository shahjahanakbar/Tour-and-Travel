// src/routes/Pricing.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PricingTables from "../components/PricingTables";
import "./PricingStyles.css";

function Pricing() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        customClass="pricing-hero"
        heroImg="https://img.freepik.com/free-photo/green-mountains-ancient-indian-village-malana-state-himachal-pradesh_181624-17940.jpg?t=st=1724884062~exp=1724887662~hmac=315bb7dc19e537dbe9f5856b2a1109d3adc2df4429dec501b6f93b75231d4bf1&w=1060"
        title="Our Pricing Plans"
        text="Choose the best plan for your needs"
      />
      <div className="pricing-tables">
        <PricingTables />
      </div>
      <Footer />
    </div>
  );
}

export default Pricing;
