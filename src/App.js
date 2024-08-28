// App.js

import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Pricing from "./routes/Pricing"; // Ensure Pricing is imported correctly
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/PricingTablesStyles.css'; // Ensure to import the CSS file
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} /> {/* Correctly add the Pricing route */}
      </Routes>
    </div>
  );
}
