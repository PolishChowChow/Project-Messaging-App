import StyledLink from "../components/StyledLink";
import Button from "../components/forms/Button";
import Form from "../components/forms/Form";
import Input from "../components/forms/Input";
import Center from "../components/layout/Center";
import Heading from "../components/layout/Heading";
export default function RegisterPage() {
  return (
    <Center className="min-h-dvh bg-gradient-to-t from-white to-blue-100">
      <Form onSubmit={() => console.log("siema")} className="flex-col">
        <Heading>Register to our platform</Heading>
        <Input name="first_name" id="first_name" placeholder="First Name" />
        <Input name="last_name" id="last_name" placeholder="Last Name" />
        <Input type="number" name="age" id="age" placeholder="Age" />
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail address"
        />
        <Input name="username" id="username" placeholder="Username" />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <Input
          type="password"
          name="confirm_password"
          id="confirm_password"
          placeholder="Confirm Password"
        />
        <Button type="submit">Login</Button>
        <p className="text-center">
          Already have an account?{""}
          <StyledLink to="/login">Sign in</StyledLink>
        </p>
      </Form>
    </Center>
  );
}
