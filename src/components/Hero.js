import React, { useEffect, useState } from "react";
import "./HeroStyles.css"; 
import "./PricingHeroStyles.css";

function Hero({ cName, heroImg, title, text, enableTypingEffect = false, customClass }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!enableTypingEffect) {
      setDisplayedText(title);
      return;
    }

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
