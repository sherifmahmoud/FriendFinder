const NUM_QUESTIONS = 10;
let friends = [];//will be used to save the friends data

initialize();//initializes the friends array with seed data
function Friend(name, photo, scores) {
    this.name = name;
    this.photo = photo;
    this.scores = scores;
    this.findMostCompatible = findMostCompatible;
}

function calculateScoresDifference(friend1, friend2) {
    var difference = 0;
    for (var q = 0; q < NUM_QUESTIONS; q++) {
        difference += Math.abs(friend1.scores[q] - friend2.scores[q]);
    }
    return difference;
}

function addFriend(friend) {
    friends.push(friend);
}

function initialize() {
    //start by adding 10 people
    friends[0] = new Friend('Sherif Mahmoud', 'https://randomuser.me/api/portraits/men/29.jpg', []);
    friends[1] = new Friend('Tom Hanks', 'https://randomuser.me/api/portraits/men/45.jpg', []);
    friends[2] = new Friend('Nicole Kidmann', 'https://randomuser.me/api/portraits/women/72.jpg', []);
    friends[3] = new Friend('Russel Crowe', 'https://randomuser.me/api/portraits/men/34.jpg', []);
    friends[4] = new Friend('Orlando Bloom', 'https://randomuser.me/api/portraits/men/32.jpg', []);
    friends[5] = new Friend('Dianne Kruger', 'https://randomuser.me/api/portraits/women/91.jpg', []);
    friends[6] = new Friend('Brad Pitt', 'https://randomuser.me/api/portraits/men/71.jpg', []);
    friends[7] = new Friend('Eric Bana', 'https://randomuser.me/api/portraits/men/46.jpg', []);
    friends[8] = new Friend('Catherine Zeta Jones', 'https://randomuser.me/api/portraits/women/76.jpg', []);
    friends[9] = new Friend('Brian Cox', 'https://randomuser.me/api/portraits/men/8.jpg', []);

    //give each friend random ten scores between 1-5 inclusive
    friends.forEach(function (friend) {
        for (var i = 0; i < friends.length; i++) {
            //make an array of 10 scores 1-5 inclusive
            var randomScores = [];
            for (var q = 0; q < 10; q++) {
                randomIntegerInRange(1, 5);
                randomScores.push(score);
            }
            //set the scores of the current friend
            friend.scores = randomScores;
        }
    });
}

function randomIntegerInRange(min, max) {
    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.floor() will give a uniform distribution!
     */
    score = Math.floor(Math.random() * (max - min + 1)) + min;
}
function findMostCompatible() {
    var lowestScoreDifference = 40;//start with the max total difference between two persons
    var mostCompatibleFriend;
    //loop on all friends
    for (var i = 0; i < friends.length; i++) {
        //if it's not the current friend
        if (this.name !== friends[i]) {
            var scoreDifference = calculateScoresDifference(this, friends[i]);
            if (scoreDifference < lowestScoreDifference) {
                mostCompatibleFriend = friends[i];
                lowestScoreDifference = scoreDifference;
            }
        }
    }
    return mostCompatibleFriend;
}
module.exports.Friend = Friend;
module.exports.friends = friends;
module.exports.addFriend = addFriend;