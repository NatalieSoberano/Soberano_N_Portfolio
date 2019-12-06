var express = require('express');
var router = express.Router();
var auth = require('../config/mailcreds');
var mailer = require('nodemailer');
var path = require('path');

const sql = require('../utils/sql');

// set up the nodemailer stuff
const transporter = mailer.createTransport({
	service: 'gmail',
	auth: {
		user: auth.user,
		pass: auth.pass
	}
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Natalie Soberano - Portfolio' });
});

router.get('/svgdata/:target', (req, res) => {
  //here is where we set up the query
  let query = `SELECT * FROM tbl_works_lightbox WHERE id="${req.params.target}"`;

  sql.query(query, (err, result) => {
    if (err) console.log(err); // something broke

    console.log('result: ', result); // this should be the database row

    res.json(result[0]); // send that row back to the calling function
  })
})

router.post('/mail', (req, res) => {
	console.log('hit mail route');
	console.log('body: ', req.body);

	// get the mail options from the form -> the url params using bodyParser middleware

	const mailOptions = {
		from: req.body.usermail,
		to: auth.user,
		replyTo: req.body.usermail,
		subject: `From portfolio site: Subject = ${req.body.subject || 'none'}`, // Subject line
		text: req.body.message
	};

	transporter.sendMail(mailOptions, function (err, info) {
		if (err) {
			console.log("failed... ", err);
			res.json(err);
		} else {
			console.log("success! ", info);
			res.json(info);
		}
	});
})


module.exports = router;
