const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoUrl = 'mongodb://localhost:27017/';
const dbName = 'oha';
const colName = 'people';
//{useUnifiedTopology: true} =DeprecationWarning
const client = new MongoClient(mongoUrl,{useUnifiedTopology: true});




client.connect().catch((err) => {
  console.log('Error: MongoDB connection failed');
  process.exit(1);
});

module.exports = {
  getPeoplelastname,
  getPeoplefirstname,
  addPeople,
  teste
};

function getPeoplelastname(lastname) {
  const db = client.db(dbName);
  const collection = db.collection(colName);

  return collection.find({lastname: lastname}).toArray();
}
function getPeoplefirstname(firstname) {
    const db = client.db(dbName);
    const collection = db.collection(colName);

    return collection.find({firstname: firstname}).toArray();
}

function addPeople(firstname, lastname) {
  const db = client.db(dbName);
  const collection = db.collection(colName);

  return collection.insertOne({firstname: firstname, lastname: lastname});
}


function teste (){
  const db = client.db(dbName);
  const collection = db.collection(colName);
  return collection.find().toArray();

  
 
}

  