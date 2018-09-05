var router = require('express').Router()
const User = require('../../models/user').User;

//GET ./api/users
router.get('/users', function(req, res) {
    // list users
    // according to http://stackoverflow.com/questions/5830513/how-do-i-limit-the-number-of-returned-items
    User
    //.find({"publicacion.publicado":true})
    .find({})
    .sort({'email': 'asc'})
    .limit(200)
    .exec(function(err, users) {
        if (err)
            return res.json({
                error: "Error fetching users",
                error: err
            });
        else if (!users)
            return res.json({
                error: "Error finding users",
                error: err
            });
        //console.log('users', users);
        res.send(users);
    })
})

module.exports = router