const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const mobile = Number(req.body.mobile);
  const email = req.body.email;
  const regType = req.body.regType;
  const numTickets = Number(req.body.numTickets);

  const newUser = new User({
    firstName,
    lastName,
    mobile,
    email,
    regType,
    numTickets,
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
