function LocationInfoBox({ info, hide }) {
  return (
    <div className={!hide ? "location-info" : "hide"}>
      <h2>Event Location Info</h2>
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          TITLE: <strong>{info.title}</strong>
        </li>
        <li>
          LINK:
          <strong>
            <a target="_blank" href={info.link}>
              {" "}
              {info.link}
            </a>
          </strong>
        </li>
      </ul>
    </div>
  );
}

export default LocationInfoBox;
