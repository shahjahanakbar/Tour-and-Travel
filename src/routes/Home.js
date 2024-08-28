// Home.js
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
      <Navbar />
      <Hero 
        cName="hero" 
        heroImg="https://images.unsplash.com/photo-1562913346-61ae3ab9277e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination" 
        buttonText="Travel Plan"
        url="/"
        btnClass="show" 
        enableTypingEffect={true}  // Enable typing effect only on Home
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
