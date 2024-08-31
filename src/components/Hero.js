<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import "./HeroStyles.css"; 
import "./PricingHeroStyles.css";
=======
// src/components/Hero.js
import React, { useEffect, useState } from "react";
import "./HeroStyles.css"; // Default styles
import "./PricingHeroStyles.css"; // Additional styles for Pricing page
>>>>>>> ac3cef30ab0875bda0bffbd41b6ce68a5dee31ba

function Hero({ cName, heroImg, title, text, enableTypingEffect = false, customClass }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!enableTypingEffect) {
<<<<<<< HEAD
      setDisplayedText(title);
      return;
    }

=======
      setDisplayedText(title); // Show full text if typing effect is disabled
      return;
    }

    // Typing effect logic
>>>>>>> ac3cef30ab0875bda0bffbd41b6ce68a5dee31ba
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(title.substring(0, index + 1));
      index++;
      if (index === title.length) {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [title, enableTypingEffect]);

  return (
    <div className={`${cName} ${customClass}`}>
      <img alt="Hero" src={heroImg} />
      <div className="hero-text">
        <h1>{displayedText}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Hero;
