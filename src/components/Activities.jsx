/* eslint-disable react-hooks/exhaustive-deps */
import bicycle from "/bicycle.svg"
import { useEffect, useState } from "react"
import { apiURL } from "../Utils/apiURL.js"
import axios from "axios";

const Activities = ({itineraryId}) => {

    const [activities, setActivities] = useState([])

    useEffect(()=>{
        axios.get(apiURL+"activities/"+itineraryId)
        .then(response => setActivities(response.data.response))
    },[itineraryId])
    
    return (
        <>
            {
                activities && activities == "" ?
                <div style={{display: "flex", alignItems: "center"}}>
                <div>
                    <h2>No <span className="acent">Activities</span> for this Itinerary Yet</h2>
                    <h5>Comment asking for more content</h5>
                </div>
                <img style={{maxWidth: '90%', maxHeight: '10rem'}} src={bicycle} alt="man stand on a bicycle" />
                </div>
                :
                activities.map((activity, indexMap)=>{
                    return (
                        <div className="activity" key={indexMap}>
                            <h2>{activity.name}</h2>
                            <img style={{maxWidth: '90%', maxHeight: '10rem'}} src={activity.photo} alt={activity.name} />
                        </div>
                    )
                })
            }
        </>
    )
}

export default Activities
