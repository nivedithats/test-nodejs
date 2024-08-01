const express = require('express');
const { createResource, getAllResources, getResourceById, deleteResource, getResourcesByProperty, 
 } = require('my-controllers');
const usermodel = require('../models/user');
const router = express.Router();

router.post('/post', async(req,res)=>{
    await createResource(req, res, usermodel)
})
 
router.get('/users/list', async(req,res)=>{
     await getAllResources(req, res, usermodel)
})

router.get('/users/singleuser/:id', async(req, res)=>{
    await getResourceById(req, res, usermodel)
})


router.put('/users/update/:id', async(req, res)=>{
    await updateResource(req, res, usermodel)
})

router.delete('/users/delete/:id', async(req, res)=>{
    await deleteResource(req, res, usermodel)
})

router.get('/users/byemail', async(req, res)=>{
    await getResourcesByProperty(req, res, usermodel, 'email', 'rachana@gmail.com')
})

module.exports = router;