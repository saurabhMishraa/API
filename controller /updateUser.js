const express = require('express');
const Student = require('../models/student')

const updateUser = async(req,res)=>{
    try{
        const _id = req.params.id
        console.log(req.params.id);
        const updateUser = await Student.findByIdAndUpdate(_id,req.body, {new:true});
        res.send(updateUser);
    }
    catch(err){
        res.status(500).send(err)
    }
}

module.exports = { updateUser }

