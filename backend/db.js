var mongoose= require('mongoose')
const connectionUrl = "mongodb://localhost/inote"
function connectToMongo(){
    mongoose.connect(connectionUrl)
}
module.exports = connectToMongo