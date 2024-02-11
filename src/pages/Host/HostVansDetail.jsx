import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";

const navLinks = [
  { path: ".", text: "Details" },
  { path: "pricing", text: "Pricing" },
  { path: "photos", text: "Photos" },
];

const HostVansDetail = () => {
  const van = useLoaderData();

  const active = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all Vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${van.type}`}>{van.type}</i>
            <h3>{van.name}</h3>
            <h4>${van.price}/day</h4>
          </div>
        </div>
        <nav className="host-van-detail-nav">
          {navLinks.map(({ path, text }, index) => (
            <NavLink
              key={index}
              to={path}
              end={path === "."}
              style={({ isActive }) => (isActive ? active : null)}
            >
              {text}
            </NavLink>
          ))}
        </nav>
        <Outlet context={{ van }} />
      </div>
    </section>
  );
};
export default HostVansDetail;
