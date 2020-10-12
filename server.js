const express = require('express');
const app = express();
const http = require('http');

const port = 3000;
//Loads the handlebars module
const handlebars = require('express-handlebars');
//Sets our app to use the handlebars engine
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

//Sets handlebars configurations (we will go through them later on)
app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
}));
app.use(express.static('public'))
app.get('/', (req, res) => {
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
res.render('placeholder', {layout: 'index'});
});

//app.listen(port, () => console.log(`App listening to port ${port}`));
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
  });