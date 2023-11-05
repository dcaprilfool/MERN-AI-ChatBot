import { connect } from "http2";
import app from "./app.js"
import { connectToDB, disconnectFromDB } from "./db/connection.js";

const PORT = process.env.PORT || 5000;

connectToDB().then( ()=> {
  app.listen(PORT, () => console.log("Server Open"));
})
.catch((err) => {console.log(err)});



