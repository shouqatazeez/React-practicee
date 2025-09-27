import React from "react";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("white");
  return (
    <div className="h-screen w-full " style={{ backgroundColor: color }}>
      <div className="text-center text-black">
        <h1>Bg-changer</h1>{" "}
        <div className="border border-white py-5 px-2.5 mt-64 rounded flex flex-wrap  gap-4 fixed text-white  justify-center w-full">
          <button
            className="outline rounded-full py-4 px-2 "
            style={{ background: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline rounded-full py-4 px-2 "
            style={{ background: "green" }}
            onClick={() => setColor("green")}
          >
            green
          </button>
          <button
            className="outline rounded-full py-4 px-2 "
            style={{ background: "pink" }}
            onClick={() => setColor("pink")}
          >
            pink
          </button>
          <button
            className="outline rounded-full py-4 px-2 "
            style={{ background: "black" }}
            onClick={() => setColor("black")}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
