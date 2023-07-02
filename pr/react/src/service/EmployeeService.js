import axios from 'axios';
const baseUrl="http://localhost:3002";

class EmployeeService{

    getEmployees()
    {
        return axios.get(baseUrl+"/employees");
    }

    getById(id)
    {
        return axios.get(baseUrl+"/employees/employee/"+id);
    }

    deleteById(id)
    {
        return axios.delete(baseUrl+"/employees/employee/"+id);
    }

    addEmployee(emp)
    {
        return axios.post(baseUrl+"/employees/employee/"+emp.empid,emp);
    }

    updateEmployee(emp)
    {
        return axios.put(baseUrl+"/employees/employee/"+emp.empid,emp);
    }



}

export default new EmployeeService;