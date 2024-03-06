import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import ComponentType from "../../types/component";
type CustomInputProps = {
  isReverseLabel?: boolean;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
export default function Input(props: ComponentType & CustomInputProps) {
  const {id, isReverseLabel, children,  className, ...restProps} = props;
  const labelClassName = isReverseLabel ? "flex flex-row-reverse" : "";
  return (
    <label htmlFor={id} className={`w-full ${labelClassName}`}>
      {children}
      <input
        {...restProps}
        id={id}
        className={`w-full border-b-2 border-solid border-blue-600 text-md p-3 outline-none focus-visible:border-blue-900 rounded transition-colors ease-in-out ${className}`}
        
      />
    </label>
  );
}
