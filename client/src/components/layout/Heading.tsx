import ComponentType from "../../types/component";

export default function Heading({children, className}: ComponentType){
    return <h1 className={`text-2xl text-center ${className}`}>{children}</h1>
}