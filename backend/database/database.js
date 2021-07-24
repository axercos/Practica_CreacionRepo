/* connect MongoDB*/
const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string  
const PASSWORD = "root"
const url = `mongodb+srv://root:${PASSWORD}@cluster0.fopmx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(url);
const dbName = "EXAMPLE";
const collectionName = "Info"
client.connect();

//function to get all collection
function getAll(){
    return client.db(dbName).collection(collectionName).find({}).toArray();
}

//function to create something
function create(info){
    const Info = {
        name: info.name,
    };
    client.db(dbName).collection(collectionName).insertOne(Info);
}

//function to delete something
async function deleteByName(name){
    const Info = await client.db(dbName).collection(collectionName).deleteOne({name: `${name}`});
    return Info;
}

//Cada función realizada arriba se debe exportar para que pueda ser utilizada en otro módulo
module.exports = {
    getAll: getAll,
    create: create,
    deleteByName: deleteByName,
}