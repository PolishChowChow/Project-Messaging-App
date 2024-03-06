import { Link } from "react-router-dom";
import ComponentType from "../../types/component";
type ButtonProps = {
  to?: string;
};

export default function Button(
  props: ComponentType &
    ButtonProps &
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
) {
  const { className, children, to, ...restProps } = props;
  return (
    <button
      {...restProps}
      className={`w-100 py-2 bg-blue-600 text-gray-100 text-md hover:bg-blue-900 rounded-lg ${className}`}
    >
      {to ? <Link to={to}>{children}</Link> : children}
    </button>
  );
}
