var express = require("express");
var app = express();

app.use(express.logger());

app.get('/', function(request, response) {
    response.send("Hello World!");
});


app.listen(process.env.PORT, function() {
    console.log("Listening on " + port);
});
