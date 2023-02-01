import { useEffect } from "react";
import { useLocation } from "react-router";

interface ChildrenProps {
  children: JSX.Element;
}

export const ScrollToTop: React.FC<ChildrenProps> = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};
