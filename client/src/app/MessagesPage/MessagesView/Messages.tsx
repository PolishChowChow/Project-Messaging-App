import { useEffect } from "react";
import Message from "./Message";

export default function Messages(){
    const messages = [
        { id: 1, content: "This is message 1This is message 1This is message 1This is message 1This is message 1This is message 1This is message 1This is message 1This is message 1This is message 1This is message 1This is message 1This is message 1This is message 1This is message 1This is message 1This is message 1This is message 1This is message 1This is message 1This is message 1This is message 1This is message 1This is message 1This is message 1This is message 1This is message 1This is message 1This is message 1" },
        { id: 2, content: "This is message 2" },
        { id: 3, content: "This is message 3" },
        { id: 4, content: "This is message 4" },
        { id: 1, content: "This is message 5" },
        { id: 2, content: "This is message 6" },
        { id: 3, content: "This is message 7" },
        { id: 4, content: "This is message 8" },
        { id: 1, content: "This is message 9" },
        { id: 2, content: "This is message 10" },
        { id: 3, content: "This is message 11" },
        { id: 4, content: "This is message 12" },
        { id: 1, content: "This is message 13" },
        { id: 2, content: "This is message 14" },
        { id: 3, content: "This is message 15" },
        { id: 4, content: "This is message 16" },
        { id: 1, content: "This is message 17" },
        { id: 2, content: "This is message 18" },
        { id: 3, content: "This is message 19" },
        { id: 4, content: "This is message 20" }
      ];
    useEffect(()=>{
        const container = document.querySelector("#messages-container") as HTMLDivElement
        container.scrollTop = container.scrollHeight
    },[])
      
      
    return <div id="messages-container" className="grow flex flex-col overflow-scroll max-h-[800px] gap-2 px-7 scroll-m-8">
        {messages.map(message => {
            return <Message key={message.content} message={message} />
        })}
    </div>
}