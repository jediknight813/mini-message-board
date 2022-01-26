var express = require('express');
var router = express.Router();


var bodyParser = require('body-parser')
router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: Date()
  }
];

router.post('/', function (req, res, next) {
  console.log("here")
  messages.push({
    user: req.body.user,
    text: req.body.text,
    added: Date()
  })
  res.redirect("/")
});


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini-Message-Board', messages: messages });
});


module.exports = router;
