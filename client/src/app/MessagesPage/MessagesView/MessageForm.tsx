import { ChangeEvent, FormEvent, useState } from "react"
import Input from "../../../components/forms/Input"
import Button from "../../../components/forms/Button"
export default function MessageForm(){
    const [message, setMessage] = useState("")
    const handleSubmit = (event :FormEvent) =>{
        event.preventDefault()
        setMessage("")
    }
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }
    return <form onSubmit={handleSubmit} className="flex gap-5 p-7">
        <Input name="message" id="message" className="bg-slate-50" value={message} onChange={handleChange}/>
        <Button className="w-1/5 flex justify-center items-center">
            Send
        </Button>
    </form>
}