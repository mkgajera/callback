var express = require('express');

var app = express();
var router = express.Router();
var cors = require('cors');
app.set('port', process.env.PORT || 8000);


//app.use(cors());

app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    //res.setHeader('*');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


/*
router.get('/login',function(req,res){
	  res.sendFile("login.html", {"root": 'views'});
});*/

router.get('/', function(req, res) {
    res.sendFile("index.html", { "root": 'app' });
});

app.use('/', router);
app.use("/node_modules", express.static(__dirname + '/node_modules'));
app.use("/js", express.static(__dirname + '/app/assets/js'));
app.use("/css", express.static(__dirname + '/app/assets/css'));
app.use("/tpl", express.static(__dirname + '/app/assets/tpl'));
app.use("/img", express.static(__dirname + '/app/assets/img'));
app.use("/fonts", express.static(__dirname + '/app/assets/fonts'));
app.use('/favicon', express.static(__dirname + '/app/assets/favicon'));
app.use("/assets", express.static(__dirname + '/app/assets'));

/*
app.use('/img',express.static(path.join(__dirname, '/app/assets/img')));
app.use('/js',express.static(path.join(__dirname, 'app/assets/js')));
app.use('/css',express.static(path.join(__dirname, 'app/assets/css')));
*/
//******** End Admin Panel ******//


app.listen(app.get('port'));
console.log("App Started on ArtFlow-ui", app.get('port'));