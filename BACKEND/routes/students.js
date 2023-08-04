const router = require("express").Router();
let Student = require("../models/Student.js");


router.route("/add").post((req,res) =>{

    const name = req.body.name;
    const email= req.body.email;
    const dob = req.body.dob;
    const grade = req.body.grade;
    const gender= req.body.gender;
    const telephone = req.body.telephone;
    const password = req.body.password;
 

    const newStudent = new Student({
        name,
        email,
        dob, 
        grade,
        gender,
        telephone,
        password
     
    })

    newStudent.save().then(()=>{
        res.json("Student Registered")
    }).catch((err)=>{
        console.log(err);
    })
  
})

router.route("/view").get((req,res) =>{

    Student.find().then((Student)=>{
        res.json(Student)
    }).catch((err) =>{
        console.log(err)
    })
})
router.route("/update/:id").put(async(req,res) =>{

    let studentId = req.params.id;
    const { name,email,dob, grade,gender,telephone,password} = req.body;

        const updateStudent = {
            name,
            email,
            dob, 
            grade,
            gender,
            telephone,
            password
        }
        
        const update = await Student.findByIdAndUpdate(studentId,updateStudent)

        .then(() =>{
            res.status(200).send({status:"Student Updated data",})
        }).catch((err) =>{
            console.log(err);
            res.status(500).send({status : "Error with updating ", error: err.message});
        })
})

router.route("/delete/:id").delete(async(req,res) =>{

    let studentId = req.params.id;
    await Student.findByIdAndDelete(studentId)
    .then(() =>{
        res.status(200).send({status:"Student Deleted",})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status : "Error with deleting ", error: err.message});
    })
})


router.route("/get/:id").get(async(req,res)=>{
    let studentId = req.params.id;
    const user = await Student.findById(studentId)
    .then((student)=>{
        res.json(student);
    }).catch(()=>{
        console.log(err.message); 
        res.status(500).send({status:"Error",error:err.message});
    })
})
 
    module.exports = router;