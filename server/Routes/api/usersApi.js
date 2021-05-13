const router = require('express').Router();
const { User } = require('../../Models');
// require an auth method *it goes here* not the main focus at the moment.

// get all users.
router.get('/', (req, res) => {

    User.findAll({
        attributes: { exclude: ['password']}
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(err);
    });
});

// POST new user 
router.post('/', (req, res) => {

    User.create({
        username: req.body.username,
        password: req.body.password
    })
    // .then(dbUserData => {
    //      this is to build session storage so that after making a new account it logs you in and you get right into the meat of things.
    //      unfortunately this part will have to wait for now since i have not yet set up the authoraties methods yet, in time it will be implimented.
    //  })
})