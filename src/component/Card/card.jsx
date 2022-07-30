import "./card.scss";

const Card = (props)=>{
    return(
        <div className="card">
            <div className="cardImg">
            <img src={props.img}lt="Mount Fuji"/>
            </div>
            <div className="cardItems">
                <div className="locations">
                    <p> <i class="fa fa-map-marker" aria-hidden="true"></i> {props.location}</p>
                    <p><a href={props.googleMap}>view on Google Maps</a></p>
                </div>
                <h1>{props.title}</h1>
                <p className="text"><b>{props.startDate} - {props.endDate}</b></p>
                <p>{props.description}</p>
            </div>
            
        </div>
    )
}
export default Card