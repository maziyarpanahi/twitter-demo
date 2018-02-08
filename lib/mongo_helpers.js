let mongoConnectionHelper = require("./../config/MongoDB_Connection");
mongoConnectionHelper.CreateConnectionToMongoDB(function (db) {
    exports.IndexTweetsIntoMongoDB = function (tweet) {
        db.collection("tweets").insertOne(tweet, function(err, res) {
            if (err) throw err;
        });
    }

});
