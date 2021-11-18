const { MongoClient } = require("mongodb");

let _db;

const mongoConnect = (callback) => {
  const url = process.env.MONGODB_URI;
  const client = new MongoClient(url, {
    ssl: true,
    sslValidate: false,
  });

  client
    .connect()
    .then((clientData) => {
      console.log("Connected");
      _db = clientData.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }

  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
