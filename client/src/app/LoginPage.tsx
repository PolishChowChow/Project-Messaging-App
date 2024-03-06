import StyledLink from "../components/StyledLink";
import Button from "../components/forms/Button";
import Form from "../components/forms/Form";
import Input from "../components/forms/Input";
import Center from "../components/layout/Center";
import Heading from "../components/layout/Heading";
export default function LoginPage() {
  return (
    <Center className="min-h-dvh bg-gradient-to-t from-white to-blue-100">
      <Form onSubmit={() => console.log("siema")} className="flex-col">
        <Heading>Login to talk with Friends!</Heading>
        <Input name="username" id="username" placeholder="Username" />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <Button type="submit">Login</Button>
        <p className="text-center">
          You don't have an account?{""}
          <StyledLink to="/register">Sign up</StyledLink>
        </p>
      </Form>
    </Center>
  );
}
