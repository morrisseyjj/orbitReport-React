import satData from "./satData";
import './styling.css';



// function for all buttons
const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div className="flex-container">
      {/* function for low, medium, high orbit buttons */}
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
      );
      })}
      {/* 4th button, "All Orbits" */}
      <button onClick={() => setSat(satData)}> All Orbits</button>
    </div>
  );
};

export default Buttons;


