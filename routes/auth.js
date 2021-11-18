const express =require('express');
const router = express.Router();

// @route  GET api/auth
// @desc  get logged in user
// @acces Private

router.get('/', (req,res)=>{
    res.send('get logged in user');
});



// @route  POST api/auth
// @desc  Auth user & get token
// @acces Private

router.post('/', (req,res)=>{
    res.send('get logged in user');
});




module.exports = router;
