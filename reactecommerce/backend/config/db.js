const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()
const USER_NAME = process.env.DB_USERNAME;
const USER_PASSWORD = process.env.DB_PASSWORD

const connection = mongoose.connect(`mongodb://${USER_NAME}:${USER_PASSWORD}@ac-zz8nrip-shard-00-00.z8ix4yv.mongodb.net:27017,ac-zz8nrip-shard-00-01.z8ix4yv.mongodb.net:27017,ac-zz8nrip-shard-00-02.z8ix4yv.mongodb.net:27017/?ssl=true&replicaSet=atlas-32amtb-shard-0&authSource=admin&retryWrites=true&w=majority`)
module.exports = connection;