const express = require("express");

const router = new express.Router();

// function
const getData = require("../controller /getUser");
const saveUserData = require("../controller /postUser");
const getOneUserData = require("../controller /getParticularUser");
const updateData = require("../controller /updateUser");
const deleteData = require("../controller /deleteUser");

// routes
router.get("/student", getData.getUser);
router.get("/student/:id", getOneUserData.getParticularUser);
router.post("/student", saveUserData.postUser);
router.patch("/student/:id", updateData.updateUser);
router.delete("/student/:id", deleteData.deleteUser);

// export
module.exports = router