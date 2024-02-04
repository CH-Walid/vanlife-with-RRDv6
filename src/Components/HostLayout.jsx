import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  const active = {
    fontWeigt: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <nav className="host-nav">
        <NavLink to="/host" end style={({isActive})=> isActive ? active : null}>Dashboard</NavLink>
        <NavLink to="/host/income" style={({isActive})=> isActive ? active : null}>Income</NavLink>
        <NavLink to="/host/reviews" style={({isActive})=> isActive ? active : null}>Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
};
export default HostLayout;
