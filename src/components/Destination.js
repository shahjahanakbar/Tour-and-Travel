import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Explore the breathtaking landscapes of Northern Pakistan</p>

      <DestinationData
        className="first-des"
        heading="Hunza Valley, Gilgit-Baltistan"
        text="Hunza Valley is known for its stunning landscapes, crystal-clear rivers, and vibrant culture. 
        Surrounded by snow-capped peaks, it's a haven for nature lovers and adventurers. You can explore ancient 
        forts, terraced fields, and the local bazaars while enjoying the warm hospitality of the Hunza people."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Fairy Meadows, Nanga Parbat"
        text="Fairy Meadows offers one of the most stunning views of Nanga Parbat, the world's ninth-highest mountain. 
        This lush green plateau, surrounded by majestic peaks, is a paradise for trekkers and photographers. 
        The journey to Fairy Meadows is an adventure in itself, with a thrilling jeep ride followed by a scenic hike."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
