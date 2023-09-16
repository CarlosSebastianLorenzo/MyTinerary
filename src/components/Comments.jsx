/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react"
import { apiURL } from "../Utils/apiURL.js"
import axios from "axios";
import {BsSendFill} from "react-icons/bs";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Comments = ({itineraryId}) => {

    const [comments, setComments] = useState([])
    const user = useSelector(store => store.userSignUpReducer.user)
    const commentTextArea = useRef()

    useEffect(()=>{
        axios.get(apiURL+"comments/"+itineraryId)
        .then(response => setComments(response.data.response))
    },[])

    const sendComment = async () => {

        if (!user || Object.keys(user).length === 0) {
            toast.error('must be logged in to comment')
            return
        }

        if (commentTextArea.current.value.trim() == ""){
            toast.error('The comment field cannot be empty.')
            return
        }

        axios.post(apiURL+"comments", {
            itineraryId : itineraryId,
            userId : user._id,
            text : commentTextArea.current.value
        })
        .then(response => {
            const newComment = {...response.data.response, userId: {
                fullName: user.fullName,
                photo: user.photo}
            }
            setComments([newComment, ...comments]);
            toast.success("comment added successfully");
        })
        .catch(error => {
            console.log(error);
            if(error.message == "Network Error") { toast.error("Temporary Network Connectivity Issues, Apologies")}
            toast.error(error.response.data.error);
        })

    }

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
                <textarea ref={commentTextArea} name="commentTextArea" minLength="0" maxLength="140" placeholder="" rows="5" cols="45" className="commentTextArea" ></textarea>
                <BsSendFill onClick={sendComment} className="sendComment icon"/>
            </div>
        </div>
    )
}

export default Comments
