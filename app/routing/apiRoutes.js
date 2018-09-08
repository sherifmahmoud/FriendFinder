module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        console.log('Sending friends json.');
        return res.json();
    });

    app.post("/api/friends", function (req, res) {
        console.log('Posting a new user.');
        return res.json();
    });
}