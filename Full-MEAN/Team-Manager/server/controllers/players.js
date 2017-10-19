var mongoose = require('mongoose');
var Player = mongoose.model('Player');

module.exports = {

    getPlayers: function(req,res){
        Player.find({}, function(err,players){
            res.json(players);
        })
    },

    addPlayer: function(req,res){
        var newPlayer = new Player();
        newPlayer.name = req.body.name
        if (req.body.position){
            newPlayer.position = req.body.position
        }
        newPlayer.save(function(err){
            if (err){
                res.json({error:"Error Saving"});
            } else {
                res.json({good:"Everything good"});
            }
        })
    },

    deletePlayer: function(req,res){
        Player.remove({_id: req.body._id}, function(err){
            if (err){
                res.json({error: ''})
            } else {
                res.json({good: ''})
            }
        })
    }
};