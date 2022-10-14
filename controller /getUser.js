const express = require('express');
const Student = require('../models/student')

const getUser = async(req,res)=>{
    try{
        const getUser = await Student.find({})
        res.send({totalStudents:getUser.length,getUser});
    }
    catch(err){
        res.status(400).send(err)
    }
}

module.exports = { getUser }

