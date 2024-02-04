import { NavLink, Link } from "react-router-dom";

const navLinks = [
  { path: "/host", text: "Host" },
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
      </nav>
    </header>
  );
};
export default Header;
