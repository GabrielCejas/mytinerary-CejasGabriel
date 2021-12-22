import { useRef } from "react"
import { useState, useEffect } from "react"
import { connect } from "react-redux";
import Swal from 'sweetalert2'

const Comment = (props) => {
    console.log(props)
    const inputHandler = useRef() 
    const[inputChange, setInputChange] = useState(false)
    const userValid = props.commentNew.userId._id === props._id


    const confirmToast = () =>{
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                props.deleteComment(props.idItinerary, props.token,props.commentNew._id)
              Swal.fire('Deleted!','Your comment has been deleted.',)}})
    }

    useEffect(()=>{
        setInputChange(false)
    }, [props.renderComments])

    const commentUser = (
        <div className="inputChange2">
          {!inputChange ? (<p>{props.commentNew.comment}</p>) : (
            <div>
              <input type="text"  className="inputEdit" defaultValue={props.commentNew.comment} ref={inputHandler} />
              <button onClick={()=> props.editComment(props.commentNew._id, inputHandler.current.value, props.token)}>✔️</button>
            </div>
          )}
          <div className="IconCommentContenedor">
          <button className="IconComment" onClick={()=>setInputChange(!inputChange)}>✏️</button>
          <button className="IconComment" onClick={confirmToast}>🗑️</button>
          </div>
        </div>
      );
    
    const validComment = userValid ? (commentUser) : (<p>{props.commentNew.comment}</p>)

    return (

        <div className="usersimgName">
            <img className="imgUsersComment" src={props.commentNew.userId.photo} alt="..."/>
            <span className="nameUsersComment">{props.commentNew.userId.firstName}</span>
        <div className="comentario">{validComment}</div>
        </div>

    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        token: state.userReducer.token,
        _id: state.userReducer._id
    }

}
export default connect(mapStateToProps)(Comment)
