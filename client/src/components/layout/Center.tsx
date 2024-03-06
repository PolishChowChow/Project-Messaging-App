import ComponentType from "../../types/component";

export default function Center({ children, className }: ComponentType) {
  return (
    <div className={`grid place-content-center ${className ? className : ""}`}>
      {children}
    </div>
  );
}
