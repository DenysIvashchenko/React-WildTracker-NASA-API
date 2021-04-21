import GoogleMapReact from "google-map-react";
import { useEffect, useState } from "react";
import { API_KEY } from "../env.json";
import Location from "./Location";
import LocationInfoBox from "./LocationInfoBox";

function Map({ eventData, center, zoom }) {
  const [locationInfo, setLocationInfo] = useState(null);

  const marker = () => {
    const markers = eventData.map((item, index) => {
      if (
        item.sources[0].id === "PDC" ||
        item.sources[0].id === "SIVolcano" ||
        item.sources[0].id === "NATICE" ||
        item.sources[0].id === "JTWC"
      ) {
        return (
          <Location
            icons={item.sources[0].id}
            key={index}
            lat={item.geometries[0].coordinates[1]}
            lng={item.geometries[0].coordinates[0]}
            onClick={() =>
              setLocationInfo({
                id: item.id,
                title: item.title,
                link: item.sources[0].url,
              })
            }
          />
        );
      } else {
        return null;
      }
    });

    return markers;
  };

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: API_KEY,
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {marker()}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
}

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};
export default Map;
