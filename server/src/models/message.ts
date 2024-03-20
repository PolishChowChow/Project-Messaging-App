import { Schema, model } from "mongoose";
import { DATE_PROPS } from "./schemaProps";
const messageSchema = new Schema({
    author: {
        type: Schema.ObjectId,
        ref: "user",
        required: true,
    },
    content: {
        type: String,
        required: true,
        maxLength: 200,
    },
    createdAt: DATE_PROPS
})
const Message = model("message", messageSchema)
export default Message;