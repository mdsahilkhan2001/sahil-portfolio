import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = { pathname: window.location.pathname }; // simple fallback
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
