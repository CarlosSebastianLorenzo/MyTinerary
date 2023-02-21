import {FaMoneyBillWave} from "react-icons/fa";
import { useState } from "react";
import underconstruction from "/underconstruction.svg"
import { BsChevronDown} from "react-icons/bs";

const Itinerary = ({data}) => {

    const [expanded, setExpanded] = useState(false);
    
    // '💲'.repeat(data.price)
    const dollars = []
    for (let i = 0; i < data.price; i++) {
        dollars.push(i)
    }
    
    const [likes, setLikes] = useState(data.likes)

    const like = (e) => {
        e.target.classList.toggle("heart-active")
        likes == data.likes ? setLikes(likes + 1) : setLikes(likes - 1)
    }

    return (
        <div className="itinerary" >
            <div style={{backgroundImage: `url(${data.photo})`}}>
                <div className="like">
                    <div className="heart" onClick={like}>
                        {likes}
                    </div>
                </div>
            </div>
            <h1>{data.name}</h1>
            <div className="tags">
                {data.tematicHashtags.map((tag, index)=>{
                    return(
                        <p key={index}>{tag}</p>
                    )
                })}
            </div>
            <div className="collapse">
                <div className="author">
                    <img src={data.authorPhoto} alt={data.authorName} />
                    <h3>{data.authorName}</h3>
                </div>
                <h5><span>Price: </span>
                {
                    dollars.map((dollar, index) => {
                        return (
                            <FaMoneyBillWave className="acent" key={index+"key"}/>
                        )
                    })
                }   
                </h5>
                <h5><span>Duration: </span>{data.duration} min</h5>
            </div>
            <div className={expanded ? 'expanded' : 'collapsed expanded'}>
                <div>
                    <h2>Section <span className="acent">Under </span>Construction</h2>
                    <h5>Content will be available soon</h5>
                </div>
                <img style={{maxWidth: '90%', maxHeight: '10rem'}} src={underconstruction} alt="workers construction house" />
            </div>
            <div onClick={()=>{setExpanded(!expanded)}} className="view-more">View More <BsChevronDown size="1rem" style={{transition: "1s ease", transform: expanded ? 'rotate(-180deg)' : '' }}/></div>
        </div>
    )
}

export default Itinerary
