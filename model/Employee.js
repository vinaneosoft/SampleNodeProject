class Employee{
    _id;
    emp_name;
    dept_code;
    emp_salary;
    experience;
    emp_email;
    joining_date;
    secrete_code;
    employee_pic;
    constructor(_id,  emp_name, dept_code,emp_salary, experience, emp_email, secrete_code, joining_date, employee_pic){
        this._id=id;
        this.emp_name=emp_name;
        this.emp_email=emp_email;
        this.emp_salary=emp_salary;
        this.dept_code=dept_code;
        this.experience=experience;
        this.joining_date=joining_date;
        this.secrete_code=secrete_code;
        this.employee_pic=employee_pic;
    }
}

module.exports=Employee;
