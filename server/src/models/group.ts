import { Schema, model } from "mongoose"
const groupSchema = new Schema({
    users: [{
        type: Schema.ObjectId,
        ref: "user",
        required: true, 
    }],
    messages: [{
        type: Schema.ObjectId,
        ref: "message",
        required: true, 
    }],
    theme: {
        type: String,
        required: true,
        default: "blue-white"
    }
})
const Group = model("group", groupSchema)
export default Group