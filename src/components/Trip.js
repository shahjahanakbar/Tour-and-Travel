import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Explore the hidden gems of Northern Pakistan.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip to Skardu"
          text="Skardu is a stunning region surrounded by mighty mountains, crystal-clear lakes, and lush valleys. 
          It's a perfect spot for trekking, climbing, and enjoying the breathtaking landscapes of the Karakoram Range. 
          Don’t miss visiting the serene Shangrila Lake and the ancient Skardu Fort."
        />

        <TripData
          image={Trip2}
          heading="Trip to Naran Kaghan"
          text="Naran Kaghan Valley offers mesmerizing beauty with its lush green meadows, crystal-clear rivers, and alpine lakes. 
          The valley is known for Lake Saif-ul-Malook, which is surrounded by snow-capped peaks and is considered one of 
          the most beautiful lakes in Pakistan."
        />

        <TripData
          image={Trip3}
          heading="Trip to Swat Valley"
          text="Known as the 'Switzerland of the East,' Swat Valley boasts picturesque landscapes, gushing rivers, and verdant 
          mountains. It's an excellent destination for trekking, fishing, and exploring the ancient Buddhist sites 
          that dot the valley."
        />
      </div>
    </div>
  );
}

export default Trip;
