import { Link, useLoaderData } from "react-router-dom";

const HostVans = () => {
  const hostVans = useLoaderData();

  const hostVansEls = hostVans.map((hostVan) => (
    <Link
      to={`${hostVan.id}`}
      key={hostVan.id}
      className="host-van-link-wrapper"
    >
      <div className="host-van-single" key={hostVan.id}>
        <img src={hostVan.imageUrl} alt={`Photo of ${hostVan.name}`} />
        <div className="host-van-info">
          <h3>{hostVan.name}</h3>
          <p>${hostVan.price}</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section>
      <h1 className="host-vans-title">Your listed Vans:</h1>
      <div className="host-bans-list">
        <section>{hostVansEls}</section>
      </div>
    </section>
  );
};
export default HostVans;
