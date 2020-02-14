const express = require('express');
const db = require('./db');

const jsonMiddleware = express.json();
const portNumber = 4444;
const app =express()
//extended: provide extended option server.js:8:17
app.use(express.urlencoded({ extended: true }));

app.get('/userslastname/:userlastname/infos', (req, res) => {
    console.log('Fetching information for', req.params.userlastname);
    db.getPeoplelastname(req.params.userlastname)
      .then((users) => {
        if (users.length) {
          return res.status(200).json(users[0]);
        } else {
          return res.status(404).send('User ' + req.params.userlastname + ' not found');
        }
      })
      .catch((err) => {
        return res.status(500).send(err);
      });
  });
  app.get('/usersfirstname/:userfirstname/infos', (req, res) => {
    console.log('Fetching information for', req.params.userfirstname);
    db.getPeoplefirstname(req.params.userfirstname)
      .then((users) => {
        if (users.length) {
          return res.status(200).json(users[0]);
        } else {
          return res.status(404).send('User ' + req.params.userfirstname + ' not found');
        }
      })
      .catch((err) => {
        return res.status(500).send(err);
      });
  });
 

  app.post('/users', (req, res) => {
    if (!req.body || !req.body.firstname || typeof req.body.firstname !== 'string' || req.body.firstname.length < 1) {
      return res.status(400).send('Parameter "firstname" is required, should be a string with length > 0')
    }
    if (!req.body || !req.body.lastname || typeof req.body.lastname !== 'string' || req.body.lastname.length < 1) {
      return res.status(400).send('Parameter "lastname" is required, should be a string with length > 0')
    }
    
  
    db.addPeople(req.body.firstname, req.body.lastname)
      .then((response) => {
        console.log("first name :"+req.body.firstname);
        console.log("last name :"+req.body.lastname);
        
        return res.status(200).json({ firstname:req.body.firstname, lastname:req.body.lastname});
      })
      .catch((err) => {
        return res.status(500).send(err);
      })
  });

  



  app.listen(portNumber, () => {
    console.log('Express application listening on port', portNumber);
  });

  app.get("/", (req, res) => {  

    
    
    res.sendFile(__dirname + "/index.html");

  });



  app.get('/:view-feedbacks', (req,res)=>{
    db.teste()
    .then((response)=>{
      return res.status(200).send(response)
    })
    .catch((err) => {
      return res.status(500).send(err);
    })

  
})