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
      <PopUp />

      <ReviwShow />
      <section className="bg-gradient-to-t from-black to-red-500">

      <div className="w-8/12 h-[400px] mx-auto">
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
