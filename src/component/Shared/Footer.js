import React from "react";

const Footer = () => {
  return (
    <div className="pt-10">
      <footer className="footer pt-10 pb-10 pl-20 pr-20 items-center p-4 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col">
          <p className="text-sm font-medium">shopcart</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-center">
          <a className="text-sm font-medium">Contact Us</a>
          <a className="text-sm font-medium">About US</a>
          <a className="text-sm font-medium">Help</a>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <p className="text-xl font-medium">English</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
