const router = require('express').Router();
const User = require('../models/userSchema');
const UserInfo = require('../models/contactSchema')

router.get('/', (req,res)=>{
     res.send('API strated')
})


router.post('/login',(req,res,next)=> {
    
   
    User.find().sort({createdOn:-1}).then(data =>{
        res.status(200).json({message:"Login", data: data, })
      }).catch(err => next(err))
  })  


router.post('/signup',(req,res,next)=>{
     let data = req.body;

     let newUser = new User(data);
    newUser.save().then(data => {
        res.status(201).json({message:"User Creacted Successfully", data: data})
    }) .catch(err => next(err))
});

router.post('/contact', (req,res,next) => {
    let data = req.body;
    
    let newUserInfo = new UserInfo(data);
    newUserInfo.save().then(data => {
        res.status(201).json({message:"UserInfo Creacted Successfully", data: data})
    }) .catch(err => next(err))
})
module.exports = router;