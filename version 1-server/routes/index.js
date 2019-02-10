var express = require('express');
var router = express.Router();
var mysql = require('promise-mysql');
var session = require('express-session')
pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  connectionLimit: 10
});
/* GET home page. */
router.get('/', function (req, res, next) {


});

router.post('/adduser', async function (req, res, next) {
  let insertquery = `INSERT INTO flightsdb.users (isAdmin,name,last,username,password)
  VALUES ('false','${req.body.name}','${req.body.last}','${req.body.username}','${req.body.password}')`;
  try {
    let data = await pool.query(insertquery)
    res.send(data)
    let username = req.body.username;
    let password = req.body.password;
    req.session.userobj =
      {
        username: username,
        password: password
       
      };
  } catch (err) {
    console.log(err)
  }
});

router.get('/checkuser', async function (req, res, next) {
  let select = `
    SELECT * FROM flightsdb.users 
    WHERE username='${req.query.username}';
 `
try {
  let data = await pool.query(select)


  res.send(data)
}
catch (err) {
  console.log(err)

}
});

router.get('/allflights', async function (req, res, next) {
  let select = `
    SELECT * FROM flightsdb.flights 
 `
try {
  let data = await pool.query(select)
  res.json(data)
}
catch (err) {
  console.log(err)

}
});



router.post('/login', async function (req, res, next) {
    let select = `
      SELECT * FROM flightsdb.users 
      WHERE username='${req.body.username}' AND password='${req.body.password}';
   `
  try {
    let data = await pool.query(select)


    res.send(data)
  }
  catch (err) {
    console.log(err)

  }
});

router.post('/addflight', async function (req, res, next) {


    
  let insertquery = `INSERT INTO flightsdb.flights (description,price,destination,img,startDate,endDate,followers)
    VALUES ('${req.body.description}',${req.body.price},'${req.body.destination}','${req.body.img}',
    '${req.body.startDate}','${req.body.endDate}','${req.body.followers}')`;
  try {
    let data = await pool.query(insertquery)
    res.send(data)
  }
  catch (err) {
    console.log(err)

  }
});

router.put('/updatefollowers', async function (req, res, next) {
  let insertQuery = `
  UPDATE flightsdb.flights
  SET followers = '${req.body.newfollow}'
  WHERE ID = ${req.body.flightsid};

`;
  try {
    let data = await pool.query(insertQuery);
    res.json(data);

  }
  catch (err) {
    console.log(err)
  }
});





module.exports = router;


//**********************************create tables*********************************/
// router.get('/createtableS', async function(req, res, next) {
//   let insertquery=`CREATE TABLE flightsdb.flights (
//       ID int NOT NULL AUTO_INCREMENT,
//       description varchar(255) NOT NULL,
//       price int NOT NULL,
//       destination varchar(255) NOT NULL,
//       img varchar(255) NOT NULL,
//       startDate varchar(30) NOT NULL,  
//       endDate varchar(30) NOT NULL,
//       followers varchar(30) NOT NULL,
//       PRIMARY KEY (ID)
//   );`

//   let data= await pool.query(insertquery)
//     res.send(data)

//   });
// router.get('/createtableS', async function(req, res, next) {
//     let insertquery=`CREATE TABLE flightsdb.users (
//         ID int NOT NULL AUTO_INCREMENT,
//         isAdmin varchar(30) NOT NULL,
//         name varchar(255) NOT NULL,
//         last varchar(255) NOT NULL,
//         username varchar(30) NOT NULL,
//         password varchar(30) NOT NULL,
//         PRIMARY KEY (ID)
//     );`

//     let data= await pool.query(insertquery)
//       res.send(data)

//     });