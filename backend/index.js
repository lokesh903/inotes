const express = require("express")
const connectToMongo = require("./db")
const bodyParser = require("body-parser");
const app = express();


connectToMongo()
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));




// Available Routes
app.use('/api/auth/', require("./routes/auth"));
app.use('/api/note/', require("./routes/note"));


app.get("/", (req, res) => {
    res.send("Hello");
})

app.listen(3000, ()=> {
    console.log("Server started on port 3000");
})