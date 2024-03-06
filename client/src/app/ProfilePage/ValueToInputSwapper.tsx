import { ChangeEvent, FormEvent, useState } from "react";
import Form from "../../components/forms/Form";
import Input from "../../components/forms/Input";
import Button from "../../components/forms/Button";
type ValueIntoInputSwapperProps = {
  keyName: string;
  value: string;
  resetInputs?: () => void;
};
export default function ValueToInputSwapper({
  keyName,
  value,
  resetInputs,
}: ValueIntoInputSwapperProps) {
  const [inputVal, setInputVal] = useState(value);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    //action to change
    setActive(false);
  };
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(true);
    if (resetInputs) {
      resetInputs();
    }
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputVal(event.target.value);
  };
  return (
    <div>
      {!active ? (
        <div onClick={handleClick}>{value}</div>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Input name={keyName} value={inputVal} onChange={handleChange} />
          <Button type="submit">Accept Changes</Button>
        </Form>
      )}
    </div>
  );
}
