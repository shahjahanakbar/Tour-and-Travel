// src/components/PricingTables.js

import React from 'react';
import './PricingTablesStyles.css'; // Import the custom CSS

const PricingTables = () => {
  return (
    <section className="container my-5">
      <h1 className="text-center mb-4">Tour Packages</h1>
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Adventure</h5>
              <h6 className="card-subtitle mb-2 text-muted">PKR 15,000</h6>
              <p className="card-text">
                Explore the rugged terrains and stunning landscapes of Northern Pakistan. Ideal for adventure enthusiasts.
              </p>
              <ul className="list-unstyled">
                <li>Free Breakfast</li>
                <li>Guided Mountain Treks</li>
                <li>Transport Included</li>
                <li>Accommodation in Local Inns</li>
                <li>24/7 Customer Support</li>
              </ul>
              <a href="#" className="btn btn-dark">Select</a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="card popular-card">
            <div className="card-body">
              <div className="popular-tag">Most Popular</div>
              <h5 className="card-title">Explorer</h5>
              <h6 className="card-subtitle mb-2 text-muted">PKR 25,000</h6>
              <p className="card-text">
                Discover the breathtaking beauty and cultural richness of Northern Pakistan with our most popular package.
              </p>
              <ul className="list-unstyled">
                <li>Free Breakfast</li>
                <li>Guided Sightseeing Tours</li>
                <li>Transport Included</li>
                <li>Luxury Hotel Accommodation</li>
                <li>Local Cuisine Experience</li>
                <li>24/7 Customer Support</li>
              </ul>
              <a href="#" className="btn btn-dark">Select</a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Luxury</h5>
              <h6 className="card-subtitle mb-2 text-muted">PKR 40,000</h6>
              <p className="card-text">
                Experience the ultimate luxury tour with premium services and exclusive experiences in Northern Pakistan.
              </p>
              <ul className="list-unstyled">
                <li>Free Breakfast</li>
                <li>Private Guided Tours</li>
                <li>Luxury Transport</li>
                <li>Five-Star Hotel Accommodation</li>
                <li>Personalized Services</li>
                <li>24/7 Concierge Support</li>
              </ul>
              <a href="#" className="btn btn-dark">Select</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTables;
