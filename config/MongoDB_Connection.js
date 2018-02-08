const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'twitter';

// Use connect method to connect to the server
exports.CreateConnectionToMongoDB = function (callback) {

    MongoClient.connect(url, function(err, client) {
        if(!err){
            console.log("Connected successfully to server");
            callback(client.db(dbName));
        }else {
            console.log(err);
        }
    });
}



