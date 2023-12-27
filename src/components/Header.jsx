import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <Link to="/smartairs-landing">
        <img src={Logo} alt="logo" width={50} />
      </Link>

      {/* Navigators */}
      <nav className="nav">
        <NavLink to="/smartairs-landing">Make Payment</NavLink>
        <NavLink to="/smartairs-landing/generateinvoice">
          Generate Invoice
        </NavLink>
        <NavLink to="/smartairs-landing/validateinvoice">
          Validate Invoice
        </NavLink>
        <NavLink to="/smartairs-landing/generatetin">Generate TIN</NavLink>
      </nav>
    </header>
  );
}
