import { Link, useLocation, useLoaderData } from "react-router-dom";

const VanDetail = () => {
  let { state } = useLocation();
  const van = useLoaderData();

  const search = state?.search || "";
  const type = state?.typeFilter || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} Vans</span>
      </Link>

      <div className="van-detail">
        <img src={van.imageUrl} alt={van.name} />
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
        <h1>{van.name}</h1>
        <p className="van-price">
          <span>${van.price}</span>/day
        </p>
        <p>{van.description}</p>
        <button className="link-button">Rent this van</button>
      </div>
    </div>
  );
};
export default VanDetail;
