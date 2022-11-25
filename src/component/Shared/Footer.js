import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <div className="flex justify-items-center">
          <div>
            <p>Shopcart</p>
          </div>
          <div className="flex gap-3">
            <p>About Us</p>
            <p>Contact</p>
            <p>help</p>
          </div>
          <div>
            <p>English</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
