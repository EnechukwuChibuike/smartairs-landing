import { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { IoMenuOutline } from "react-icons/io5";

export default function Header() {
  const [showNav, setShowNav] = useState("h-0");

  const handleClick = () => {
    showNav === "h-0" ? setShowNav("h-fit py-5") : setShowNav("h-0");
  };
  return (
    <header className="header">
      {/* Logo */}
      <Link to="/smartairs-landing">
        <img src={Logo} alt="logo" width={50} />
      </Link>

      {/* Navigators */}
      <nav className={`nav ${showNav} md:h-fit`}>
        <NavLink to="/smartairs-landing">Make Payment</NavLink>
        <NavLink to="/smartairs-landing/generateinvoice">
          Generate Invoice
        </NavLink>
        <NavLink to="/smartairs-landing/validatereceipt">
          Validate Receipt
        </NavLink>
        <NavLink to="/smartairs-landing/registertin">Generate TIN</NavLink>
      </nav>

      <div
        className="py-1 px-2 border-one border-gray md:hidden"
        onClick={handleClick}
      >
        <IoMenuOutline className=" text-3xl text-dark" />
      </div>
    </header>
  );
}
