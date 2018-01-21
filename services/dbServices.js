var MongoClient=require('mongodb').MongoClient;
exports.createConnection= function() {
MongoClient.connect("mongodb://ak:ak@ds145303.mlab.com:45303/projectakay").then(function(client){
    console.log("connected to mondgodb");
exports.database=client.db("projectakay");
//console.log("connected to mondgodb");
});
}
