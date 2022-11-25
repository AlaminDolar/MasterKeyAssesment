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
          <h2 className="card-title text-start">{name}</h2>
          <p className="text-start">${price}</p>
          <div className="card-actions text-end">
            <p className="text-warning">-{discount}% off</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
