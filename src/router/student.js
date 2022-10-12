const express = require("express");

const router = new express.Router();
const Student = require("../models/student");

// router.post("/student",(req,res)=>{

//     console.log(req.body)
//     const user= new Student(req.body)
//     console.log(user);
//     user.save()
//     .then(()=>{
//         res.status(201).send(user)
//     })
//     .catch((err)=>{
//     res.status(400).send(err)
//     });
//     // res.send("hello from the other side")
// })

router.post("/student", async (req, res) => {
  try {
    const user = new Student(req.body);
    const studentUser = await user.save();
    res.status(201).send(req.body);
    console.log(req.body);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/student", async (req, res) => {
  try {
    const studentDetails = await Student.find();
    res.send(studentDetails);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const StudentDetails = await Student.findById(_id);
    res.status(201).send(StudentDetails);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/student/findByName/:name", async (req, res) => {
  const nm = req.params.name;
  const detailsByName = await Student.find({ name: nm });
  res.send(detailsByName);
});

router.put("/student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const update = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(update);
  } catch (e) {
    res.status(404).send(req.body);
    console.log("error");
  }
});

router.delete("/student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteDetails = await Student.findByIdAndDelete(_id);
    if (!deleteDetails) {
      res.status(400).send();
    }
    res.status(200).send(deleteDetails);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
