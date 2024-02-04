import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [hostVans, setHostVans] = useState([]);
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setHostVans(data.vans));
  }, []);

  const hostVansEls = hostVans.map(hostVan => (
    <Link
      to={`/host/vans/${hostVan.id}`}
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
  ))

  return (
    <section>
      <h1 className="host-vans-title">Your listed Vans:</h1>
      <div className="host-bans-list">
        {hostVans.length > 0 ? <section>{hostVansEls}</section>
        : <h2>Loading...</h2>}
      </div>
    </section>
  );
};
export default HostVans;
