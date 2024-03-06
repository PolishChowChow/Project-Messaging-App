import Button from "../../components/forms/Button";
import Center from "../../components/layout/Center";
import ValueToInputSwapper from "./ValueToInputSwapper";

export default function ProfilePage() {
  const handleDeleteButtonClick = () => {
    //action to delete account + popup
  };
  return (
    <Center>
      <div>
        <h2>Profile</h2>
      </div>
      <ValueToInputSwapper keyName="first_name" value="Thomas" />
      <ValueToInputSwapper keyName="last_name" value="Johnson" />
      <Button
        onClick={handleDeleteButtonClick}
        className="bg-red-500 text-white hover:bg-red-900"
      >
        Delete account
      </Button>
    </Center>
  );
}
