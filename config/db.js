const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Divya:Ads7685@in-aws.eadh1.mongodb.net/max-store')

const connection = mongoose.connection;

connection.on('connected',() => (console.log("DB Connected")))
connection.on('error',(error) => (console.log("DB Error" + error)))

module.exports = mongoose

