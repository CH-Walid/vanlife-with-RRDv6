import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const displayedVans = typeFilter
    ? vans?.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans;

  const vanElements = displayedVans?.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} alt={van.name} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
      </Link>
    </div>
  ));

  const handleFilterChange = (key, value) => {
    setSearchParams(prev => {
      const newS = prev;
      if(value === null){
        newS.delete(key);
      } else {
        newS.set(key, value)
      }
      return newS
    })
  };

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className="van-type simple"
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className="van-type luxury"
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className="van-type rugged"
        >
          Rugged
        </button>
        <button
          onClick={() => handleFilterChange("type", null)}
          className="van-type clear-filters"
        >
          Clear filters
        </button>
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};
export default Vans;
