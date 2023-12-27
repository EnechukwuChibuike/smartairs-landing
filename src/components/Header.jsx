import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <Link to="/">
        <img src={Logo} alt="logo" width={50} />
      </Link>

      {/* Navigators */}
      <nav className="nav">
        <NavLink to="/">Make Payment</NavLink>
        <NavLink to="/generateinvoice">Generate Invoice</NavLink>
        <NavLink to="/validateinvoice">Validate Invoice</NavLink>
        <NavLink to="/generatetin">Generate TIN</NavLink>
      </nav>
    </header>
  );
}
