import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 pl-20 pr-20">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">
            <p className="text-3xl font-bold">
              Shop<span className="font-normal">cart</span>
            </p>
          </a>
        </div>

        <div className="navbar-end">
          <div className="flex items-center gap-2">
            <a href="" className="text-3xl ">
              <FaUserCircle></FaUserCircle>
            </a>
            <p className="text-3xl font-medium">Sign In</p>
          </div>
        </div>
      </div>
      <p className="pl-20 pr-20">
        <hr />
      </p>
      {/* search bar start */}
      <div className="pl-20 mr-20 pt-3 flex justify-between">
        <div className="flex items-center p-2 bg-yellow-500 rounded-2xl gap-1">
          <p className="text-xl font-medium">
            <GrLocation></GrLocation>
          </p>
          <p className="text-xl font-medium">Dhaka,1212</p>
        </div>
        <div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-[500px]"
            />
          </div>
        </div>
      </div>
      {/* link bar start */}
      <div className="pt-2 ">
        <ul className="flex gap-6 justify-center ">
          <li>Fresh</li>
          <li>Todays's Deals</li>
          <li>Mobiels</li>
          <li>Gift Card</li>
          <li>Women Clothing</li>
          <li>Men Clothing</li>
          <li>Kids Clothing</li>
          <li>Pet Corner</li>
          <li>Books Beauty</li>
          <li>Kithcen</li>
          <li>Bed Room</li>
          <li>Sport Bag</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
