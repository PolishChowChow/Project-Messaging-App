import { FormEventHandler } from "react";
import ComponentType from "../../types/component";

export default function Form({
  children,
  className,
  onSubmit,
}: ComponentType & { onSubmit: FormEventHandler<HTMLFormElement> }) {
  return (
    <form className={`flex gap-5 ${className}`} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
