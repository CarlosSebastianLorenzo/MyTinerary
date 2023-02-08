import { useEffect, useState } from "react"
import { apiURL } from "../Utils/apiURL.js"
import axios from "axios";

const Comments = ({itineraryId}) => {

    const [comments, setComments] = useState([])

    useEffect(()=>{
        axios.get(apiURL+"comments/"+itineraryId)
        .then(response => setComments(response.data.response))
    },[itineraryId])

    return (
        <div>
            <div className="commentsContainer">
                {
                    comments && comments.map((comment, indexMap)=>{
                        return (
                            <div key={indexMap} className="comment">
                                <img src={comment.userId.photo} alt={comment.userId.fullName} />
                                <div >
                                    <h5>{comment.userId.fullName}</h5>
                                    <p>{comment.text}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <h4 className="acent">Leave your Comment</h4>
                <textarea name="comment" minLength="0" maxLength="140" placeholder="" rows="5" cols="45" className="commentTextArea" ></textarea>
            </div>
        </div>
    )
}

export default Comments
