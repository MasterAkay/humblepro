var movies = require('./movieData');
var dbServices= require('../services/dbServices');

exports.getAllMovies  = function(req, res, next){
var db=dbServices.database;
var movieCollection=db.collection("movies");
movieCollection.find().toArray().then(function(result){
//    console.log("RESULT:",result);
var outputJSON={
    "isSuccess":true,
    "data":result
}

return res.json(outputJSON);
});
};
exports.addNewMovie=function(req,res,next){
    var db=dbServices.database;
    movie=req.body;
    var movieCollection=db.collection("movies");
    movieCollection.insert(movie).then(function(save_data){
        return res.json({
            "isSuccess":true
        });
    });




}
