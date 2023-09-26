/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react"
import { apiURL } from "../Utils/apiURL.js"
import axios from "axios";
import {BsSendFill, BsFillTrashFill, BsPencilSquare, BsX} from "react-icons/bs";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Comments = ({itineraryId}) => {

    const [comments, setComments] = useState([])
    const [editIndex, setEditIndex] = useState(-1)
    const user = useSelector(store => store.userSignUpReducer.user)
    const commentTextArea = useRef()
    const [editTextArea, setEditTextArea] = useState("")

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
                _id: user._id,
                fullName: user.fullName,
                photo: user.photo}
            }
            setComments([newComment, ...comments]);
            toast.success("comment added successfully");
            commentTextArea.current.value = "";
        })
        .catch(error => {
            console.log(error);
            if(error.message == "Network Error") { toast.error("Temporary Network Connectivity Issues, Apologies")}
            toast.error(error.response.data.error);
        })

    }

    const cancelEditComment = () => {
        setEditIndex(-1);
        setEditTextArea("");
        setComments(comments);
    }

    const editComment = async (commentId) => {

        if (editTextArea.trim() == ""){
            toast.error('No changes to send.')
            return
        }

        axios.put(apiURL+"comments", {
                _id: commentId,
                text : editTextArea
        })
        .then(response=>{
            const newComments = comments.filter(comment => comment._id !== commentId)
            setComments([response.data.response, ...newComments])
            setEditIndex(-1);
            toast.success("comment edited successfully")
        })
        .catch(error => {
            console.log(error);
            if(error.message == "Network Error") { toast.error("Temporary Network Connectivity Issues, Apologies")}
            toast.error(error.response.data.error);
        })

    }

    const deleteComment = async (commentId) => {

        axios.delete(apiURL+"comments", {
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                _id: commentId
            }
        })
        .then(response => {
            setComments(comments.filter(comment => comment._id !== commentId))
            toast.success(response.data.response)
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
                                <div>
                                    <h5>{comment.userId.fullName}</h5>
                                    {indexMap === editIndex ?
                                    <>
                                    <p onInput={(e)=>setEditTextArea(e.target.textContent)} className='editable' contentEditable='true'>{comment.text}</p>
                                    </>
                                    :
                                    <>
                                    <p>{comment.text}</p>
                                    </>
                                    }
                                </div>
                                {user && user._id === comment.userId._id && 
                                    <>
                                        {indexMap === editIndex && 
                                        <> 
                                        <BsSendFill onClick={()=>editComment(comment._id)} className="icon"/>
                                        <BsX onClick={cancelEditComment} className="icon"/>
                                        </>
                                        }
                                        <BsPencilSquare onClick={()=>setEditIndex(indexMap)} className='icon'/>
                                        <BsFillTrashFill onClick={()=>deleteComment(comment._id)} className='icon'/>
                                    </>
                                }
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
