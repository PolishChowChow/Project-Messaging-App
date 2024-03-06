import { Link } from "react-router-dom";
import Center from "../../../components/layout/Center";
export default function Contact() {
  return (
    <Link to="/messages/1">
      <div className="flex align-center text-xl gap-5 px-7 py-5">
        <Center>FirstAndLastName</Center>
      </div>
    </Link>
  );
}
