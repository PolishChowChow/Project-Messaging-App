import { Link } from "react-router-dom";
import ComponentType from "../types/component";

export default function StyledLink({ children, className, to }: ComponentType & {to: string}) {
  return (
    <Link
      to={to}
      className={`text-blue-600 hover:text-blue-900 hover:underline ${className}`}
    >
      {children}
    </Link>
  );
}
