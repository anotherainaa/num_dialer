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


// Route for sending a webhook URL to listen for status updates
app.post("/call", async (req, res, next) => {
  // let { data } = await axios.post("http://localhost:4830/call", {
  //   phone: "dynnamically generated data"
  //   webhookURL: "dynamically generated data"
  // })
  



  /*
helper function to make the actual axios call to initiate the call to an individual phone number

function to add the id to a call object

ON FRONT END: function to listen for server side update events 
ON BACK END: function to send server side update events (for call object status changes)

function to update status on a call object

function to control the execution order/timing of the above functions in accordance with 
the three call rule etc along with termination rules



  */

  // {
  //   "phone": "13018040009",
  //   "webhookURL": "http://localhost:3000/received/13018040009"
  // )
  // console.log("data received from 4830 num dialer", data)

  // // update the database with the id
  // let callToUpdate = database.find(number => number === res.body.phone ;
  // callToUpdate.id = data.id
  

  // res.status(200).json(callToUpdate)
})

const callNumbers = async () => {
  const calls = [];

  // add 3 calls 
  // if there is less than 3 calls or there are less than 3 numbers left, then the loping will stop? 

  // as long as there are calls in the calls array
    //   for each of the call objects:
    //   -perform axios post call to individual phone number
    //   -save the id from the axios response to the call object
    // control this timing

}
/*
call array that manages the calls 
[{id: 2345, phone "37246732684", status: "idle"}, {id: 34324, phone "37246732684", status: "ringing"}, {id: 142343, phone "37246732684", status: "idle"},]


{
  callId1: {phoneNum: '342', status: 'sdfadsf'},
  callId2: ...
}

*/
}

module.exports = callNumbers