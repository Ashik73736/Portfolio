import React from "react";
import SplitText from "../Animations/splitText";
import AnimeImage from "../Animations/AnimeImage";

function Home() {
  const text = "Hello This is Mohammed Ashik";
  const role = "Front End Developer";
  return (
    <div className="main flex h-[90.8vh] bg-amber-400">
      {<div className="left flex-1/2">
        <SplitText text={text} role={role} />
      </div>}
      <div className="right flex-1/2 ">
      <AnimeImage />
      </div>
      
    </div>
  );
}

export default Home;
