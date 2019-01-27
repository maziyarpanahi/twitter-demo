let mongoConnectionHelper = require("./../config/MongoDB_Connection");
mongoConnectionHelper.CreateConnectionToMongoDB(function (db) {
    exports.IndexTweetsIntoMongoDB = function (colName, tweet) {
        db.collection(colName).insertOne(tweet, function(err, res) {
            if (err) throw err;
        });
    }

});
