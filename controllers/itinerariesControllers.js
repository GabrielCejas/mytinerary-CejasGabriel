const Itinerary = require("../models/Itinerary");

const itinerariesControllers = {
  getItineraries: async (req, res) => {
    let response;
    try {
      response = await Itinerary.find().populate("cities");
    } catch (err) {
      console.log(err);
    }
    res.json(response);
  },
  uploadItineraries: async (req, res) => {
    const itinerary = req.body;
    let response;
    try {
      response = await new Itinerary(itinerary).save();
    } catch (err) {
      console.log(err);
    }
    res.json(response);
  },
  getUniqueItinerary: (req, res) => {
    const id = req.params.id;
    Itinerary.findOne({ _id: id })
      .then((response) => res.json({ response }))
      .catch((err) => console.log(err));
  },
  getItineraryByCity: async (req, res) => {
    const id = req.params.id;
    let itinerarios;
    try {
      itinerarios = await Itinerary.find({ cities: id }).populate('comments.userId');
    } catch (err) {
      console.error(err);
    }
    res.json({ response: itinerarios, success: true });
  },
  deleteItinerary: async (req, res) => {
    let response;
    const id = req.params.id;
    try {
      response = await Itinerary.findOneAndDelete({ _id: id });
    } catch (error) {
      console.log(error);
    }
    res.json({ response: response, success: true });
  },
  changeItinerary: async (req, res) => {
    let id = req.params.id;
    let itinerary = req.body;
    try {
      await Itinerary.findOneAndUpdate({ _id: id }, { ...itinerary });
    } catch (error) {
      console.log(error);
    }
  },

  modifyComment: async (req, res) => {
    switch (req.body.type) {
      case "addComment":
        try {
          const newComment = await Itinerary.findOneAndUpdate(
            { _id: req.params.id },
            {$push: { comments: { comment: req.body.comment, userId: req.user._id }}},{ new: true }).populate('comments.userId');
          if (newComment) {
            res.json({ success: true, response: newComment.comments });
          } else {
            throw new Error();
          }
        } catch (error) {
          res.json({ success: false, response: error });
        }

        break;
      case "editComment":
        try {
          const updatedComment = await Itinerary.findOneAndUpdate(
            { "comments._id": req.params.id },
            { $set: { "comments.$.comment": req.body.comment } },
            { new: true }
          );
          if (updatedComment) {
            res.json({ success: true, response: updatedComment.comments });
          } else {
            throw new Error();
          }
        } catch (error) {
          res.json({ success: false, response: error.message });
        }
        break;
      case "deleteComment":
        try {
          const commentDeleted = await Itinerary.findOneAndUpdate(
            { "comments._id": req.body.idComment },
            { $pull: { comments: { _id: req.body.idComment } } }
          );
          if (commentDeleted) {
            res.json({ success: true });
          } else {
            throw new Error();
          }
        } catch (error) {
          res.json({ success: false, response: error });
        }
        break;
    }
  },

  likeItinerary:(req,res) =>{
    Itinerary.findOne({_id: req.params.id})
    .then((itinerary) =>{
        if(itinerary.iLikeIt.includes(req.user._id)){
           Itinerary.findOneAndUpdate({_id:req.params.id}, {$pull:{iLikeIt:req.user._id}},{new:true})
           .then((newLike)=> res.json({success:true, response:newLike.iLikeIt}))
           .catch((error) => console.log(error))
        }else{
            Itinerary.findOneAndUpdate({_id: req.params.id}, {$push:{iLikeIt:req.user._id}},{new:true})
            .then((newLike) => res.json({success:true, response:newLike.iLikeIt}))
            .catch((error) => console.log(error))
        }
    })
    .catch((error) => res.json({success:false, response:error}))
},
};
module.exports = itinerariesControllers;
