import React, { useState } from "react";
import itinerariesActions from "../redux/actions/itinerariesActions";
import { connect } from "react-redux";
import {FaHeart} from 'react-icons/fa'
import { FcLike } from "react-icons/fc";
import toasty from "./Toast"

const Likes = (props) => {
    const {itinerary, token, likeItinerary, _id} = props

    const [itinerariesLikes, setItinerariesLikes] = useState(itinerary.iLikeIt)
    const [likeIcon, setLikeIcon] = useState(true)

    const like= itinerariesLikes.includes(_id) ? <FcLike className="pointer"/> : <FaHeart className="pointer"/> 

    const likeI = async ()=>{
      setLikeIcon(false)
      if(!token){
          toasty('error', 'You must be registered to like this activity')
      }else{
          let response = await likeItinerary(itinerary._id, token)
          setItinerariesLikes(response.data.response)
      }
      setLikeIcon(true)
    }
    return (
        <div onClick={(likeIcon ? likeI : null )} className="likes">
        {like}<p>{itinerariesLikes.length}</p>
        </div>
    )
}

const mapDispatchToProps = {

    likeItinerary: itinerariesActions.likeItinerary,
  };
  
const mapStateToProps = (state) => {
    return {
      token: state.userReducer.token,
      _id: state.userReducer._id,
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(Likes)
