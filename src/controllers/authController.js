const express = require('express');

const User = require('../models/User');

const bcryptjs = require('bcryptjs');

const router = express.Router();

//registro
router.post('/register', async (req, res) => {
    const { email } = req.body;
    try {
        if(await User.findOne({ email }))
            return res.status(400).send({ error: 'User already exists.'});

        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({ user });

    } catch (err) {
        return res.status(400).send('register');
    }
});

//autenticaçao
router.post('/authenticate', async(req, res)=>{
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if(!user){
       return res.status(400).send({ error: 'User not found' });
    }


});


module.exports = app => app.use('/auth', router);