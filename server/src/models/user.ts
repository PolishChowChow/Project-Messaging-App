import { Schema, model } from "mongoose";
import { DATE_PROPS, STRING_PROPS } from "./schemaProps";

const userSchema = new Schema({
  first_name: STRING_PROPS,
  last_name: STRING_PROPS,
  age: {
    type: Number,
    required: true,
  },
  username: { ...STRING_PROPS, minLength: 5, maxLength: 100 },
  createdAt: DATE_PROPS,
  updatedAT: DATE_PROPS,
  email: { ...STRING_PROPS, minLength: 10, maxLength: 100 },
  password: { ...STRING_PROPS, minLength: 10, maxLength: 300 },
});
const User = model("user", userSchema);
export default User;
