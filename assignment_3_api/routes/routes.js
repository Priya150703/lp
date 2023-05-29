const express = require('express');
const Model = require('../models/model');
const router = express.Router();

//Post Method
router.post('/post', async (req, res) => { //to duserya kadhun gheto 

  const { name, age, rollno } = req.body;

  const data = new Model({
    name,
    age,
    rollno
  })
    const dataToSave = await data.save();
    res.status(200).json(dataToSave)
   })

//Get all Method
router.get('/getAll', async (req, res) => {

    const data = await Model.find();
    res.json(data)
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
  
    const data = await Model.findById(req.params.id);
    res.json(data)
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
   //patch for updating only one specified data n not whole data
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true }; // NEW TYPE OF DATA WILL ADD 


    const result = await Model.findByIdAndUpdate(
      id, updatedData, options
    )
    res.send(result)
  
})
//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {

    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id)
    res.send(`Document has been deleted..`)
})

module.exports = router;