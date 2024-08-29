import "./card.css"

interface CardProps{
    price: number,
    title: string,
    image: string
}

export function Card({ price, image, title } : CardProps){
    return(
        <div className="card">
            <img src={image}/>
            <div className="title-wrapper">
                <h2>{title}</h2>
            </div>
            <p>R$<b>{price}</b>,00</p>
        </div>
    )
}