import React, { useEffect, useState } from "react";
import SingleCart from "./SingleCart";

const TodayDeals = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("fakeApi.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="pl-20 pr-20 pt-10">
      <p className="text-xl text-start font-medium">Todays hot delas</p>
      <br />
      <hr />
      <div className="grid  grid-cols-5 gap-5 pt-3">
        {data.slice(6, 11).map((data) => (
          <SingleCart data={data} key={data._id}></SingleCart>
        ))}
      </div>
    </div>
  );
};

export default TodayDeals;
