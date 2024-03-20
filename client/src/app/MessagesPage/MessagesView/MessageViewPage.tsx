import { useParams } from "react-router-dom"
import Messages from "./Messages"
import MessageForm from "./MessageForm"

export default function MessagesViewPage(){
    const { id } = useParams()
    return <div className="min-h-dvh flex flex-col">
        <div className="border-solid border-b-2 border-neutral-200">
            User Info Header ID:{id}
        </div>
        <Messages />
        <MessageForm />
    </div>
}