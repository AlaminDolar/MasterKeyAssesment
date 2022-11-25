import React, { useEffect, useState } from "react";
import SingleCart from "./SingleCart";

const Cart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("fakeApi.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-5">
      {data.map((data) => (
        <SingleCart data={data} key={data._id}></SingleCart>
      ))}
    </div>
  );
};

export default Cart;
