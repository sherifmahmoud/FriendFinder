const Friend = require('../data/friends').Friend;
const friends = require('../data/friends').friends;
const addFriend = require('../data/friends').addFriend;
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        //send back an array of all friends in a json object
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        console.log('Posting a new user.');
        //create a new Friend with the data from the survey page
        newFriend = new Friend(req.body.name, req.body.photo, req.body.scores);
        //find the most compatible friend
        var closestFriend = newFriend.findMostCompatible();
        //add the new person to the list
        addFriend(newFriend);
        //return the most compatible friend as a json object
        return res.json(closestFriend);
    });
}//end module exports