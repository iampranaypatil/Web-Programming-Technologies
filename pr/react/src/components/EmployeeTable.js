//import library
import React from "react";
import EmployeeService from "../service/EmployeeService";

//class
class EmployeeTable extends React.Component{
    constructor(props){
    super(props);
    this.state={
        earr:[],
        searcharr:[]
    }}

   //fetchdata
   fetchdata=()=>{
    EmployeeService.getEmployees()
    .then((result)=>{
        console.log(result.data);
        this.setState({...this.state,earr:result.data,searcharr:result.data})
    })
    .catch(()=>{})
   }

//componentdidm
componentDidMount(){
    console.log("in component did mount");
    this.fetchdata();
}

//deletedat
deleteEmp=(id)=>{
    EmployeeService.deleteById(id)
    .then(()=>{
        this.fetchdata();
    })
    .catch();
}
//render 
render(){
    return(
        <table>
            <thead>
                <tr>
                    <th>EmpNO</th>
                    <th>EnaME</th>
                    <th>SaL</th>
                </tr>
            </thead>
            <tbody>
                
                {this.state.searcharr.map((emp)=>
                <tr key={emp.empid}>
                    <td>{emp.empid}</td>
                    <td>{emp.ename}</td>
                    <td>{emp.sal}</td>
                    <td>
                        <button type="button" name="btn" id="btn" onClick={()=>{this.deleteEmp(emp.empid)}}>Del</button>
                    </td>
                 </tr>
                )}
               
            </tbody>
        </table>
    )
}
}


//export
export default EmployeeTable;