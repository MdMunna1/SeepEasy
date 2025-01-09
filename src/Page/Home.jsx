import React from "react";
import Slider from "./Slider";
import Animation from "../Component/Animation";
import Fitar from "./Fitar";
import Paysection from "../Component/Paysection";
import Join from "../Component/Join";
import ReviwShow from "../Component/ReviwShow";
import PopUp from "../Component/PopUp";
import MyMap from "../Component/Map";

const Home = () => {
  return (
    <>
      <Slider />
      <div className="flex justify-center">

      <PopUp />
      </div>

      <ReviwShow />
      <section className="bg-gradient-to-t from-black to-red-950">

      <div className="w-8/12 h-[500px] mx-auto">
      <MyMap />
      </div>
      </section>
      <Animation />
      <Fitar />
      <Paysection />
      <Join />
    </>
  );
};

export default Home;
