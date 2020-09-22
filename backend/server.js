const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();
const bodyParser = require('body-parser');


const app = express();

app.use(cors());
app.use(express.json()); 
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
// create mongodb database - on cloud Amazon server(MongodB atlas)
const uri = process.env.ATLAS_URI;
mongoose.connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
//   check connection to mongo Atlas
const connection = mongoose.connection;
connection.once("open", () => {
console.log("Succesfully connected to Data base ");
});
// require and use modules
const exersizeRouter = require("./routes/exersizes");
const userRouter = require("./routes/users");
app.use("/exersizes",exersizeRouter);
app.use("/users",userRouter);

app.get("/", (req,res) =>{
    res.send("Hello world");
});

const port = process.env.PORT || 5000;
app.listen(port, () =>{
console.log(`Server is now running on port: ${port}`);
});