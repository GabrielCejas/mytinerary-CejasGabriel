import axios from "axios"

const citiesActions = {
    fetchCities: () => {
        return (dispatch, getState) =>{
            axios.get("http://localhost:4000/api/cities")
            .then(res => dispatch({type:'fetch', payload: res.data.response}))
        }
    },
    fetchCitiesID: (id)=> {
        return (dispatch, getState) =>{
            axios.get("http://localhost:4000/api/itinerary/cities/" + id)
            .then(res => dispatch({type:'fetchID', payload: res.data.response}))
        }
    },
    filterCities: (value) =>{
        console.log(value)
        return (dispatch, getState) =>{
            dispatch({type:'filterCities', payload: value})
        }
    }
}

export default citiesActions;