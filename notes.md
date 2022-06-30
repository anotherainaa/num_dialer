# PEDAC

Problem
- Create a server and client that makes calls in a specific way and also updates the status of that call using a webhook.

Server
- Provide the webhook url to listen on the status of the phone call 
- Handling of the data
  - holds the phone numbers to call 
  - once client initiates the dialing, the server makes a post call to the API 
  - holding / updating statuses of all the phone calls that it receives through the webhook URL 

Client 
- Displays all the phone numbers and shows the status of phone calls
- A single call button to start calling 

Requirements
- Everytime the call button is pressed, 3 calls are made in order of the list
- There must always be 3 calls at the same time
- Fewer than 3 can be made when there are fewer then 3 numbers left. 
- All calls statuses are idle until the call begins. 
- After the call begins, the status goes from ringing, to answered to completed. (Asynchronously through the webhook URL)
- Once a call is complete it can decrement from the number current calls
  - Therefore, a new call can be initiated to meet the 3 calls at a time requiremetn. 

UI 
- After dialing has started, the call button must be disabled or removed. 
  - it never need to be re-enabled. 
  (The caller never gets a choice when the phone call stops)
- A table with the phone numbers and status. 

Tech Stack
- Server - express
- hold data in memory (list that gets mutated by express middleware etc)
- Front end - ?
  - Static html page + vanilla JS
  - Handlebars or EJS or Pug + vanilla JS
  - React


generic advice
- EJS for templating language recommended
- server sent events to update statuses, it is the opposite of polling, use templating language to render phone numbers for first time but subsequent updates will need to have https://stackoverflow.com/questions/36249684/simple-way-to-implement-server-sent-events-in-node-js


