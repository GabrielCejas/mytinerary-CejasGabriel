import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions"
import Comment from "./Comment"
import {useRef, useState} from "react"
import Swal from 'sweetalert2'
import toast from "./Toast"

const Comments = (props) => {
    console.log(props)
    const [renderComments, setRenderComments]= useState(false)
    const [comments, setComments] = useState(props.comments)
    const inputValue = useRef()


      const NewComment =  () => {
        let commentValue = inputValue.current.value
        props.addCommentItinerary(props.idItinerary, commentValue, props.token)
        .then((res)=> {
            if(props.token){
                setComments(res)
                inputValue.current.value=""
            }else{
                toast ('error', 'You must be logged in to post a comment')
            }
           
        })
        .catch((error) => console.log(error))
     }

     const handlerEnter = (e) => {
        if (e.key === 'Enter') {
            NewComment()
        }
    }

    const deleteComment=(idItinerary, token, idComment)=>{
        props.deleteComment(idItinerary, token, idComment)
        .then((res) =>{
            if(res.success){
                setComments(comments.filter(comment => comment._id !== idComment))
            }else{
                throw new Error()
            }
        })
        .catch((error) => console.log(error))
     }

          const editComment = (idComment, comment, token) => {
         props.editComment(idComment, comment, token)
         .then((res) => {
             if(res.success){
                comments.forEach((editComment) =>{
                    if(editComment._id === idComment){
                        editComment.comment = comment
                    }
                })
                setComments(comments)
                setRenderComments(!renderComments)
             }
             
         })
         .catch((error) => console.log(error))
     }
     const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

     const warning = () => {
        Toast.fire({
            icon: 'error',
            title: "You need log for comment"
          }) 
        
      }
    return (
        <div className="comments">
            <h3>Comments</h3>
            <div className="comments1">
                {comments.map((comment, id)=> <Comment key={id} commentNew={comment} deleteComment={deleteComment} idItinerary={props.idItinerary} editComment={editComment} renderComments={renderComments}/>)}
            </div>
            <div className="containerComment">
                <input ref={inputValue} type="text" onKeyPress={handlerEnter} className="coment"
                placeholder={props.token ? "Write a comment" : "The user must be registered to comment"}/>
                <button className="IconComment" onClick={props.token ? NewComment : warning}>✔️</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        token: state.userReducer.token,
        _id: state.userReducer._id
    }

}

const mapDispatchToProps = {
    addCommentItinerary: itinerariesActions.addCommentItinerary,
    editComment: itinerariesActions.editComment,
    deleteComment: itinerariesActions.deleteComment,
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
