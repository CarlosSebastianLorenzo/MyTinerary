/* eslint-disable no-unused-vars */
import { useState } from "react"
import CitiesArray from "../Utils/citiesMockup"
import { Link } from "react-router-dom"
import girlwalking from "/girlwalking.svg"

const Cities = () => {

    let [search, setSearch] = useState("")

    const filterCities = CitiesArray.filter(c => c.city.toLowerCase().trim().startsWith(search.toLowerCase().trim()))

    console.log(filterCities)

    return (
        <main className="citiesMain">
            <div>
                <input type="text" name="search" placeholder=" " value={search} onChange={(e)=> setSearch(e.target.value)}/>
                <label htmlFor="search">Search By City</label>
            </div>
            <div>
                {
                    (filterCities == "") ?
                    <>
                    <section style={{ alignItems: 'center', flexDirection: 'column', gap: '1rem' }}>
                        <h1>Ups, <span className="acent">Sorry</span></h1>
                        <h3>No content for that Search</h3>
                    </section>
                    <aside style={{minHeight: '10vh', height: '20vh'}}>
                        <img style={{maxWidth: '90vw', maxHeight: '60vh'}} src={girlwalking} alt="girl walking on forest" />
                    </aside>
                    </>
                    :
                    filterCities.map((city, indexMap) => {
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
