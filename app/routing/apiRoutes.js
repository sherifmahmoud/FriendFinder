const Friend = require('../data/friends').Friend;
const friends = require('../data/friends').friends;
const addFriend = require('../data/friends').addFriend;
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        console.log('Sending friends json.');
        //get an array of all friends

        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        console.log('Posting a new user.');
        newFriend = new Friend(req.body.name, req.body.photo, req.body.scores);
        addFriend(newFriend);
        return res.json(newFriend.findClosestFriend());
    });
}//end module exports