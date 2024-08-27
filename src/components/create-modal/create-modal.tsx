import { useState } from "react"

interface InputProps {
    label: string,
    value: string | number,
    updatedValue(value: any): void
}

const Input = ({ label, value, updatedValue }: InputProps) => {
    return(
        <>
            <label>{label}</label>
            <input value={value} onChange={e => updatedValue(e.target.value)}></input>
        </>
    )
}

export function CreateModal(){
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("")


    return(
        <div className="modal-overflow">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="title" value={title} updatedValue={}/>
                    <Input label="price" value={price} updatedValue={}/>
                    <Input label="image" value={image} updatedValue={}/>
                </form>
            </div>
        </div>
    )
}