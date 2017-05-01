const express = require( 'express' );
const app = express();
var morgan = require('morgan');
const path = require('path');
var bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
var models = require('./models/index.js');
const router = require('./routes/index.js');
//router.wikiRouter, router.userRouter


app.engine('html', nunjucks.render); 
app.set('view engine', 'html'); 
nunjucks.configure('views', { noCache: true });
app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/',router.router);


models.db.sync({force:true})
.then(function () {
    app.listen(3000, function () {
        console.log('Server is listening on port 3001!');
    });
})
.catch(console.error);

app.get('/',function(req,res,next){
	res.render('index');
})



