const express = require('express');
const Student = require('../models/student')

const getParticularUser = async(req,res)=>{
    try{
        console.log(req.params.id);
        const _id = req.params.id 
        const getThatUser = await Student.findById(_id);
        res.send(getThatUser);
    }
    catch(err){
        res.status(400).send(err)
    }
}

module.exports = { getParticularUser }

