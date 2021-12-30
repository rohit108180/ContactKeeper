const express =require('express');
const router = express.Router();

//@route  GET api/contacts
// @desc  get all users Contact
// @acces Private


router.get('/', (req,res)=>{
    res.send('Get all users contacts');
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
