import { NavLink, Outlet } from "react-router-dom";

const navLinks = [
  { path: "/host", text: "Dashboard" },
  { path: "/host/income", text: "Income" },
  { path: "/host/reviews", text: "Reviews" },
];

const HostLayout = () => {
  const active = {
    fontWeigt: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <nav className="host-nav">
        {navLinks.map(({ path, text }, index) => (
          <NavLink
            key={index}
            to={path}
            end
            style={({ isActive }) => (isActive ? active : null)}
          >
            {text}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </>
  );
};
export default HostLayout;
