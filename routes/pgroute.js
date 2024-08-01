const express = require('express');
const { createResource, getAllResources, updateResource, deleteResource, getResourceById } = require('my-controllers');
const pguser = require('../models/pg');
const router = express.Router();

router.post('/pguser/new', async(req,res)=>{
    await createResource(req, res, pguser)
})

router.get('/allpgusers/list', async(req, res)=>{
    await getAllResources(req, res, pguser)
})

router.put('/updatepguser/:id', async(req, res)=>{
    await updateResource(req, res, pguser)
})

router.delete('/deletepguser/:id', async(req, res)=>{
    await deleteResource(req, res, pguser)
})

router.get('/getsinglepguser/:id', async(req, res)=>{
    await getResourceById(req, res, pguser)
})

module.exports = router;