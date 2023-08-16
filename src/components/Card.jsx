const Card = ({data}) => {
    return (
        <>
            <div className="card" >
                <div style={{backgroundImage: `url(${data.photo})`}}></div>
                <div>
                    <h3>{data.city}</h3>
                    <h5>{data.country}</h5>
                    <p>{data.description}</p>
                </div>
            </div>
        </>
    )
}

export default Card
