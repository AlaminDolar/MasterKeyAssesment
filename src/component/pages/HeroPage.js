import React from "react";
import Cart from "./Cart";

const HeroPage = () => {
  return (
    <div className="pl-20 pr-20">
      <div className="grid grid-cols-7">
        <div className="col-span-2">
          <h2 className="text-6xl font-lg pt-32">
            We picked some{" "}
            <span className="text-amber-500 font-bold">cool things</span> for
            you
          </h2>
        </div>
        <div className="col-span-5">
          <div>
            <p className="text-xl font-medium pt-10">hot deals for you</p>
            <hr />
            <div className=""></div>
            <Cart></Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
