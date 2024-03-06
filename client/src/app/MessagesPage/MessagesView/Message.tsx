export default function Message({message }:{message: {id: number, content: string}}){
    return <div>
        {message.content}
    </div>
}