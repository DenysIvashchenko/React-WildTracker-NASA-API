import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/file-alert";

function Header() {
  return (
    <header className="header">
      <h1>
        <Icon icon={locationIcon} />
        WiledFire Tracker (Powered by NASA)
      </h1>
    </header>
  );
}

export default Header;
