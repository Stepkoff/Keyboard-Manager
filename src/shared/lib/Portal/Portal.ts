import {useState, ReactNode, useEffect} from "react";
import {createPortal} from "react-dom";

interface PortalProps {
  children: ReactNode
}
export const Portal = ({children}: PortalProps) => {
  const [container] = useState(() => document.createElement('div'));
  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    }
  }, [])
  return createPortal(children, container)
};