import { NavLink, Link } from "react-router-dom";
import icon from '../assets/images/avatar-icon.png'

const navLinks = [
  { path: "/host/vans"/* "/host" */, text: "Host" },
  { path: "/vans", text: "Vans" },
  { path: "/about", text: "About" },
];

const Header = () => {
  const active = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <header>
      <Link to="/" className="site-logo">
        #VANLIFE
      </Link>
      <nav>
        {navLinks.map(({ path, text }, index) => (
          <NavLink
            key={index}
            style={({ isActive }) => (isActive ? active : null)}
            to={path}
          >
            {text}
          </NavLink>
        ))}
        <Link to="login" className="login-link">
                    <img 
                        src={icon} 
                        className="login-icon"
                    />
                </Link>
      </nav>
    </header>
  );
};
export default Header;
