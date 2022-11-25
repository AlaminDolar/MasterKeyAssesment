import React from "react";

const SingleCart = (props) => {
  const { name, picture, discount, price } = props.data;

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img className="" src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{price}</p>
          <div className="card-actions justify-end">
            <p>{discount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
