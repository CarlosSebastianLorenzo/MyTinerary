import UnderConstruction from "../components/UnderConstruction"
import { useParams } from "react-router-dom"

const Details = () => {
    const params = useParams()
    console.log(params.id)

    return (
        <UnderConstruction>
        
        </UnderConstruction>
    )
}

export default Details
