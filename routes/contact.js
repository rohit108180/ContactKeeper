const express =require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require("../models/User");
const Contact = require("../models/Contact");
const auth = require('../middleware/auth');


//@route  GET api/contacts
// @desc  get all users Contact
// @acces Private


router.get('/',auth , async (req,res)=>{
    try {
        
        const contacts = await Contact.find({user : req.user.id}).sort({date: -1});
        res.json(contacts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
        
    }
});



//@route  POST api/contacts
// @desc  add new contact
// @acces Private


router.post('/', (req,res)=>{
    res.send('add contact');
});



//@route  PUT api/contacts/:id
// @desc  Update contact
// @acces Private


router.put('/:id', (req,res)=>{
    res.send('Update Contact');
});



//@route  Delete api/contacts/:id
// @desc  Update contact
// @acces Private


router.delete('/:id', (req,res)=>{
    res.send('Delete a contact');
});


module.exports = router;



//  @route 
