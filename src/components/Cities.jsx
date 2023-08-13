import CitiesArray from "../Utils/citiesMockup"
import { Link } from "react-router-dom"

const Cities = () => {

    

    return (
        <main>
            <div>
                <input type="text" name="search" placeholder=" "/>
                <label htmlFor="search">Search By City</label>
            </div>
            <div>
                {CitiesArray.map((city, indexMap) => {
                    return <Link to={'/cities/'+city.city} key={indexMap}>
                        <div className="card" >
                            <div style={{backgroundImage: `url(${city.photo})`}}></div>
                            <div>
                                <h3>{city.city}</h3>
                                <h5>{city.country}</h5>
                                <p>{city.description}</p>
                            </div>
                        </div>
                    </Link>
                })
                }
            </div>

        </main>
    )
}

export default Cities
