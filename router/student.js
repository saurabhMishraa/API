const express = require("express");

const router = new express.Router();

// function
const getUser = require("../controller /getUser");
const postUser = require("../controller /postUser");
const getParticularUser = require("../controller /getParticularUser");
const updateUser = require("../controller /updateUser");
const deleteUser = require("../controller /deleteUser");

// routes
router.get("/student", getUser.getUser);
router.get("/student/:id", getParticularUser.getParticularUser);
router.post("/student", postUser.postUser);
router.patch("/:student", updateUser.updateUser);
router.delete("/:student", deleteUser.deleteUser);

// export
module.exports = router