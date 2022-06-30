const express = require("express");
const axios = require('axios')
const app = express();
const callNumbers = require('./callNumbers')
// Setting the view enginer to ejs
app.set("view engine", "ejs");

const port = 3000;

const database = [
  {phoneNumber: "13018040009",
  status: "idle"},
  {phoneNumber: "19842068287",
  status: "idle"},
  {phoneNumber: "15512459377",
  status: "idle"},
  {phoneNumber: "19362072765",
  status: "idle"},
  {phoneNumber: "18582210308",
  status: "idle"},
  {phoneNumber: "13018040009",
  status: "idle"},
  {phoneNumber: "19842068287",
  status: "idle"},
  {phoneNumber: "15512459377",
  status: "idle"},
  {phoneNumber: "19362072765",
  status: "idle"},
]


app.use(express.json());

// route for index page
app.get("/", (req, res, next) => {
  console.log("Hello world");
  res.render("index", { phoneNumbers: database });
})

// Route for sending a webhook URL to listen for status updates
app.post("/call", async (req, res, next) => {
  callNumbers()
  res.status(200).send("Call successful");
})

// receiving or listening to the webhook event 
app.post("/received/:phone_number", (req, res, next) => {
  console.log("webhook received")
  console.log('req: ', req.body)

  // when a webhook comes in
  // - we update the calls array (calls array: phone, id and status) 
  // - we find the phone number in the database and update the status // this is literally for long term

})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})