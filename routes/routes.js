
var appRouter = function (app) {
/*
    //Database connection
    var mariadb      = require('mariadb');
    var connection = mariadb.createConnection({
        host     : '192.168.0.214',
        user     : 'API',
        password : 'MijnWachtwoord-01',
        database : 'API'
});
*/
    //connection.connect();
/*
    connection.connect(err => {
        if (err) {
          console.log("not connected due to error: " + err);
        } else {
          console.log("connected ! connection id is " + conn.threadId);
        }});
  
  
  app.use(function(req, res, next){
      res.locals.connection = mysql.createConnection({
          host     : '192.168.0.214',
          port     : '3306',
          user     : 'API',
          password : 'MijnWachtword-01',
                  
      });
      res.locals.connect();
      next();
  });
*/
  //app.use('/api/v1/users', users);
  
  app.get("/", function (req, res) {
    res.status(200).send({ message: 'Welcome to our restful API' });
  });

  app.get("/api/", function (req, res) {
    res.status(200).send(JSON.stringify(myJSON));
  });
  
  app.get("/api/lights/", function (req, res) {
    res.status(200).send(JSON.stringify(myJSON.Lights));
    //return lights from DB
  });

  app.get("/api/lights/:num", function (req, res) {
    res.status(200).send(JSON.stringify(myJSON.Lights[req.params.num]));
  });
  
  app.get("/api/lights/:num/state", function (req, res) {
    res.status(200).send(JSON.stringify(myJSON.Lights[req.params.num].state));
  });  

  app.get("/api/lights/:num/state/on", function (req, res) {
    res.status(200).send(JSON.stringify(myJSON.Lights[req.params.num].state.on));
  });    

  app.get("/api/lights/:num/state/rgb", function (req, res) {
    res.status(200).send(JSON.stringify(myJSON.Lights[req.params.num].state.rgb));
  });  
  
  app.put("/api/lights/:num/state", function (req, res) {
    returnChanges = {};
    returnChanges.Lights = {};
    returnChanges.Lights[req.params.num] = {};
    returnChanges.Lights[req.params.num].state = {};     

    if (typeof req.body.on == "boolean" && req.body.on != undefined){       
        console.log(returnChanges.Lights[req.params.num].state.on = myJSON.Lights["" + req.params.num].state.on = req.body.on);
    }

    if (typeof req.body.rgb == "object" && req.body.rgb != undefined){       
        console.log(returnChanges.Lights[req.params.num].state.rgb = myJSON.Lights["" + req.params.num].state.rgb = JSON.parse(JSON.stringify(req.body.rgb)));
    }
    
    res.status(200).send(/* Return this*/JSON.stringify(returnChanges));
  });    
}

module.exports = appRouter;