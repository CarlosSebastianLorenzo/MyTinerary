/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import girlwalking from "/girlwalking.svg"
import Card from "../components/Card"
import { apiURL } from "../Utils/apiURL"

const Cities = () => {

    const [CitiesArray, setCitiesArray] = useState([])
    const [filterCities, setFilterCities] = useState([])
    const inputSearch = useRef(null)

    useEffect(() => {
        document.title = "Cities - MyTinerary"
    },[])

    useEffect(() => {
        fetch(apiURL+"cities")
        .then(response => response.json())
        .then(data => {
            setCitiesArray(data.response)
            setFilterCities(data.response)
        })
    },[])

    const handleSearch = ()=>{
        const search = inputSearch.current.value.toLowerCase().trim()
        const filteredCities = CitiesArray.filter(c => c.city.toLowerCase().trim().startsWith(search))
        setFilterCities(filteredCities)
    }

    return (
        <main className="citiesMain">
            <div>
                <input type="text" name="search" placeholder=" " ref={(inputSearch)} onChange={handleSearch}/>
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
