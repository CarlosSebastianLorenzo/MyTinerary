import UnderConstruction from "../components/UnderConstruction"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

const Details = () => {
    const params = useParams()
    console.log(params.id)

    useEffect(() => {
        document.title = params.id + " - MyTinerary"
    }),[]

    return (
        <UnderConstruction>
        
        </UnderConstruction>
    )
}

export default Details
