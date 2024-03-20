import { DetailedHTMLProps, InputHTMLAttributes, Ref } from "react";
import { forwardRef } from "react";
import ComponentType from "../../types/component";
type CustomInputProps = {
  isReverseLabel?: boolean;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
const Input = forwardRef(function Input(props: ComponentType & CustomInputProps, ref: Ref<HTMLInputElement>) {
  const {id, isReverseLabel, children,  className, ...restProps} = props;
  const labelClassName = isReverseLabel ? "flex flex-row-reverse" : "";
  return (
    <label htmlFor={id} className={`w-full ${labelClassName}`}>
      {children}
      <input
        ref={ref}
        {...restProps}
        id={id}
        className={`w-full border-b-2 border-solid border-blue-600 text-md p-3 outline-none focus-visible:border-blue-900 rounded transition-colors ease-in-out ${className}`}
        
      />
    </label>
  );
})

export default Input