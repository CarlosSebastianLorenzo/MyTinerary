/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import girlwalking from "/girlwalking.svg"
import Card from "../components/Card"
import { apiURL } from "../Utils/apiURL"

const Cities = () => {

    let [CitiesArray, setCitiesArray] = useState([])
    let [search, setSearch] = useState("")

    useEffect(() => {
        document.title = "Cities - MyTinerary"
    },[])

    useEffect(() => {
        fetch(apiURL+"cities")
        .then(response => response.json())
        .then(data => setCitiesArray(data.response))
    },[])

    const filterCities = CitiesArray.filter(c => c.city.toLowerCase().trim().startsWith(search.toLowerCase().trim()))

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
                    <section style={{ display:'flex', flexDirection: 'column', gap: '.5rem' }}>
                        <h1>Oops, <span className="acent">Sorry,</span></h1>
                        <h3>There's no content for that search.</h3>
                    </section>
                    <aside>
                        <img style={{maxWidth: '90vw', maxHeight:'55vh', objectFit: 'contain'}} src={girlwalking} alt="girl walking on forest" />
                    </aside>
                    </>
                    :
                    filterCities.map((city, indexMap) => {
                    return <Link to={'/cities/'+city.city} key={indexMap}>
                        <Card data={city}></Card>
                    </Link>
                })
                }
            </div>
        </main>
    )
}

export default Cities