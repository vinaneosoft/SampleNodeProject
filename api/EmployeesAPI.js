const EmployeeModel=require("../mongodbmodel/EmployeeModel");
const fs=require("fs/promises")

let abc="hi";
async function getAllEmployees(){
    return await EmployeeModel.find({}).exec();
}
async function getEmployeeById(_id){
    return await EmployeeModel.findById(_id).exec(); // _id
}
async function deleteEmployeeById(_id){
    return await EmployeeModel.deleteOne({_id:_id});
}
async function updateEmployee(_id, employee){
    const filter={_id:_id};
    const updates=employee; // id must not be there
    return await EmployeeModel.updateOne(filter,updates);
}
async function addEmployee(employee){
   // console.log(employee.employee_pic);
  //  readFile(employee.employee_pic)
  try{
    const EmployeeDoc=new EmployeeModel(employee);
    return await EmployeeDoc.save();
  }
  catch(error){
     console.log(error);
  }
}

async function uploadEmployeePic(_id, employee_pic){
    const filter={_id:_id};
    const updates={employee_pic:employee_pic};
    return await EmployeeModel.updateOne(filter,updates);
}



module.exports={uploadEmployeePic,getAllEmployees,getEmployeeById, deleteEmployeeById,updateEmployee, addEmployee}

// module contains single file 
// EmployeesAPI. js ==> EmployeesAPI