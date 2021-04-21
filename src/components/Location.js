import { Icon } from "@iconify/react";
import LocationFire from "@iconify/icons-mdi/fire";
import LocationMounten from "@iconify/icons-mdi/mountain";
import LocationIce from "@iconify/icons-mdi/hurricane";

function Location({ onClick, icons }) {
  const icon = () => {
    if (icons === "PDC") {
      return <Icon icon={LocationFire} className="location-icon" />;
    } else if (icons === "SIVolcano") {
      return <Icon icon={LocationMounten} className="location-volcan" />;
    } else if (icons === "NATICE") {
      return <Icon icon={LocationMounten} className="location-ice" />;
    } else {
      return <Icon icon={LocationIce} className="location-ice" />;
    }
  };
  return (
    <div className="location-marker" onClick={onClick}>
      {icon()}
    </div>
  );
}

export default Location;
