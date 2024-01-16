import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  // console.log(lat, lng);
  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>Maps</h1>
      <h1>
        Position: latitude is {lat}, longitude is {lng}
      </h1>

      <button onClick={() => setSearchParams({ lat: 23, lng: 25 })}>
        Change position
      </button>
    </div>
  );
}

export default Map;
