var db = require("../models");

module.exports = function(app){
    //all post
    app.get("/api/newpost", function(req, res){
        console.log("post")
        var query = {};
        if (req.query.user_id){
            query.UserID = req.query.user_id;
        }
        db.newPost.findAll({where: query, include:[db.user]}).then(function(dbnewPost){
            res.json(dbnewPost)
        });
    });
    //single post
    app.get("/api/newpost/:id", function(req, res) {
        db.newPost.findOne({where: {id: req.params.id}, include: [db.user]}).then(function(dbnewPost) {
          res.json(dbnewPost);
        });
      });
    //delete post
      app.delete("/api/newpost/:id", function(req, res) {
        db.newPost.destroy({where: {id: req.params.id}}).then(function(dbnewPost) {
          res.json(dbnewPost);
        });
      });

    //creating post
    app.post("/api/newpost", function(req, res) {
        db.newPost.create(req.body).then(function(dbnewPost) {
          res.json(dbnewPost);
        });
      });

    //update post
    app.put("/api/newpost", function(req, res) {
        db.newPost.update(
          req.body,{where: {id: req.body.id}}).then(function(dbnewPost) {
          res.json(dbnewPost);});
      });
    
}