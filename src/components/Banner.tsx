import "./Banner.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import CloseIcon from "@mui/icons-material/Close";

interface BannerProps {
  dismissable?: boolean;
  message: string;
  link?: string;
  linkName?: string;
  cookieName?: string;
}

export default function Banner({
  dismissable,
  message,
  link,
  linkName,
  cookieName,
}: BannerProps) {
  const [hideBanner, setHideBanner] = useState(true);

  useEffect(() => {
    if (cookieName && !Cookies.get(cookieName)) {
      setHideBanner(false);
    }
  }, [cookieName]);

  const handleClose = () => {
    if (cookieName) {
      Cookies.set(cookieName, "true", { expires: 1 });
    }
    setHideBanner(true);
  };

  return hideBanner ? null : (
    <div className="banner">
      <span className="banner-text">
        {message}
        {link && (
          <>
            {" - "}
            <a href={link}>{linkName ? linkName : link}</a>
          </>
        )}
      </span>
      <div className="banner-button">
        {dismissable && (
          <button className="" onClick={handleClose} aria-label="Close Banner">
            <CloseIcon />
          </button>
        )}
      </div>
    </div>
  );
}
