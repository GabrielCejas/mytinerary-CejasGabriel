import axios from "axios";
const itinerariesActions = {
  getItinerariesCity: (id) => {
    return async (dispatch, getState) => {
      let res = await axios.get(`http://localhost:4000/api/itineraries/${id}`);
      if (!res.data.success) {
        throw new Error("Database problems");
      }
      dispatch({ type: "GetItineraries", payload: res.data.response });
    };
  },
  likeItinerary: (id, token) => {
    return async () => {
      try {
        let res = await axios.put(
          `http://localhost:4000/api/itinerary/like/${id}`,
          {},
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        return res;
      } catch (error) {
        console.log(error);
      }
    };
  },
  getActivitiesItinerary: (id) => {
    return async () => {
      try {
        let res = await axios.get(`http://localhost:4000/api/activities/${id}`);
        if (res.data.success) {
          return res.data.response;
        }
      } catch (error) {
        console.log(error);
      }
    };
  },
  addCommentItinerary: (id, comment, token) => {
    return async () => {
      try {
        let response = await axios.put(
          `http://localhost:4000/api/itinerary/comments/${id}`,
          { comment, type: "addComment" },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        return response.data.response;
      } catch (error) {
        console.log(error);
      }
    };
  },
  editComment: (id, comment, token) => {
    return async () => {
      try {
        let response = await axios.put(
          `http://localhost:4000/api/itinerary/comments/${id}`,
          { comment, type: "editComment" },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(response);
        if (response.data.success)
          return { success: true, res: response.data.response };
      } catch (error) {
        console.log(error);
      }
    };
  },
  deleteComment: (id, token, commentId) => {
    return async () => {
      try {
        let response = await axios.put(
          `http://localhost:4000/api/itinerary/comments/${id}`,
          { commentId, type: "deleteComment" },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        if (response.data.success) {
          return response.data;
        }
      } catch (error) {
        console.log(error);
      }
    };
  },
};

export default itinerariesActions;