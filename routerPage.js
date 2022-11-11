const express = require('express');
const router = express.Router();

const schema = require('./schemaPage');

// router.get('/', (req, res)=>{
//     console.log('Router Working')
// });

//Post method
try{
    router.post('/', async (req, res)=>{
        const postData = await new schema({
            Name: req.body.Name,
            Age: req.body.Age,
            City: req.body.City
        });
    
       const saveData = postData.save();
       res.status(200).json(saveData);
    })
}catch(err){
     res.json({'err': err});
}

//Get Method
try{
    router.get('/', async (req, res)=>{
        const getData = await schema.find();
        res.status(200).json(getData);
    })
}catch(err){
res.json({'err': err})
}

//Update method

try{
 router.put('/:id', async (req, res)=>{
    const updateData = await schema.updateOne({_id: req.params.id}, 
        {$set: {Name: req.body.Name, Age: req.body.Age, City: req.body.City}});

        res.status(200).json(updateData);
 });
         
}catch(err){
    res.json({'err': err})
}

//Delete method

try{
  router.delete('/:id', async (req, res)=>{
    const deleteOne = await schema.deleteOne({
        _id: req.params.id
    })
    res.status(200).json(deleteOne);
  })
}catch(err){
  res.json({'err': err})
}







module.exports = router;