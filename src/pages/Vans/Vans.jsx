import { Link, useLoaderData, useSearchParams } from "react-router-dom";

const Vans = () => {
  const vans = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter
    ? vans?.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans;

  const vanElements = displayedVans?.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={`${van.id}`}
        state={{ search: `?${searchParams.toString()}`, typeFilter }}
      >
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
    if (value === null) {
      searchParams.delete(key);
      setSearchParams(searchParams);
    } else {
      searchParams.set(key, value);
      setSearchParams(searchParams);
    }
  };

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`van-type simple ${typeFilter === "simple" && "selected"}`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`van-type luxury ${typeFilter === "luxury" && "selected"}`}
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`van-type rugged ${typeFilter === "rugged" && "selected"}`}
        >
          Rugged
        </button>
        {typeFilter && (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="van-type clear-filters"
          >
            Clear filters
          </button>
        )}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};
export default Vans;
