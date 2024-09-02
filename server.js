const express=require("express");
const cors=require("cors");
require("./config/mongodb");
var mysqlapi=require("./api/EmpAPI")
const mongodbapi= require("./api/EmployeesAPI");
const multer=require("multer");

const app=express();
const port=5000;
app.use(cors()); // cors controller
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.listen(port, ()=>console.log(`application server started on port ${port} ...`))

app.post("/employees/add", async function(request, response){
    console.log("addemployee",request.body);
    const data=await mongodbapi.addEmployee(request.body);
    response.send(data);
});
app.put("/employees/update/:_id", async function(request, response){
    // console.log("from client:", request.body); 
    console.log(request.body);
     const {_id, ...employee}=request.body;
     console.log(employee);
     const data=await mongodbapi.updateEmployee(request.params._id ,employee);
     response.send(data);
 });
app.get("/employees/getall", async function(request, response){
            //await mysqlapi.getAllEmployees();
    const data=await mongodbapi.getAllEmployees();
    response.send(data);
});

app.delete("/employees/delete/:_id", async function(request, response){
    const data=await mongodbapi.deleteEmployeeById(request.params._id);
    response.send(data);
});

app.get("/employees/get/:_id", async function(request, response){
    const data=await mongodbapi.getEmployeeById(request.params._id);
    response.send(data);
});

const upload=multer();
app.put("/employees/upload/:_id", upload.single('employee_pic'), async function(request, response){
    console.log("in file upload");
    console.log(request.params._id);
    console.log(request.file);
    const data=await mongodbapi.uploadEmployeePic(request.params._id,request.file.buffer);
   response.send(data);
});
