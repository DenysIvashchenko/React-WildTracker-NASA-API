import { useEffect, useState } from "react";
import Map from "./components/Map";
import { NASA } from "./env.json";
import Header from "./components/Header";
import Loader from "./components/Loader";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  const returnMap = () => {
    return true;
  };

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(NASA);
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
    console.log(eventData);
  }, []);

  return (
    <div>
      <Header />
      {!loading ? (
        <Map eventData={eventData} onClick={() => returnMap()} />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
