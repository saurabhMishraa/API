const express = require('express');
const Student = require('../models/student')

const deleteUser = async(req,res)=>{
    try{
        const deleteUser = await Student.findByIdAndDelete(req.params.id);
        res.send(deleteUser);
    }
    catch(err){
        res.status(500).send(err)
    }
}

module.exports = { deleteUser }

