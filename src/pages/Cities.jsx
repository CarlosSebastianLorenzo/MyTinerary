/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react"
import { Link } from "react-router-dom"
import girlwalking from "/girlwalking.svg"
import Card from "../components/Card"
import { useSelector, useDispatch } from "react-redux"
import { readAllCities, filterCities } from "../Redux/Actions/CitiesAction.js"

const Cities = () => {

    const dispatch = useDispatch()
    const cities = useSelector(store => store.readAllCitiesReducer.filteredCities)

    useEffect(
        ()=>{
            dispatch(readAllCities())
        }
    ,[]
    )

    useEffect(() => {
        document.title = "Cities - MyTinerary"
    },[])

    const handleSearch = (search)=>{
        dispatch(filterCities(search))
    }

    return (
        <main className="citiesMain">
            <div>
                <input type="text" name="search" placeholder=" " onChange={(e)=>handleSearch(e.target.value)}/>
                <label htmlFor="search">Search By City</label>
            </div>
            <div>
                {
                    (cities == "") ?
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
                    cities.map((city, indexMap) => {
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
