import { useEffect, useState } from "react";
import Map from "./components/Map";
import { NASA } from "./env.json";
import Header from "./components/Header";
import Loader from "./components/Loader";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hide, setHide] = useState(false);

  const close = (e) => {
    // if (e.target.className !== "location-info") return false;
    setHide(true);
    if (e.target.localName === "svg") setHide(false);
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
  }, []);

  return (
    <div onClick={close}>
      <Header />
      {!loading ? <Map eventData={eventData} hide={hide} /> : <Loader />}
    </div>
  );
}

export default App;
