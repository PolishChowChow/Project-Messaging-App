import { ChangeEvent, FormEvent, useRef, useState } from "react"
import Input from "../../../components/forms/Input"
import Button from "../../../components/forms/Button"
export default function MessageForm(){
    const [message, setMessage] = useState("")
    const inputRef = useRef<HTMLInputElement|null>(null)
    const handleSubmit = (event :FormEvent) =>{
        event.preventDefault()
        setMessage("")
        inputRef?.current?.focus()
    }
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    return <form onSubmit={handleSubmit} className="flex gap-5 p-7">
        <Input ref={inputRef} name="message" id="message" className="bg-neutral-100 rounded-xl" value={message} onChange={handleChange} placeholder="Enter a new message"/>
        <Button className="w-1/5 flex justify-center items-center">
            Send
        </Button>
    </form>
}