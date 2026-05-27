
export default function ServiceCard({title, description}) {

    return(
        <div className="card">
            <h1 className="cardTitle">{title}</h1>
            <p className= "cardDescription">{description}</p>


        </div>


    )
}