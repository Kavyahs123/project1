import React, {useState,useEffect} from "react";
import './App.css';
import Data from './data.json';
import AddUser from './AddUser';

const DataTable=()=>{
 const[data,setData]=useState(Data);
 const handleAddUser = (newUser) => {
    setData([...data, newUser]); 
  };

    return(
        <div>
<table  id="tt" border="2px">
<tr>
<th>Name</th>
<th>Email</th>
<th>Phone No</th>
<th>Gender</th><th>Location</th>
<th>Qulaification</th>
<th>Company</th>
<th>CTC</th>
<th>Experience</th>
<th>DOB</th>
<th>Changes</th>
</tr>
{
    data.map((current)=>(
        <tr>
<td>{current.fname}</td>
<td>{current.email}</td>
<td>{current.phone}</td>
<td>{current.gender}</td>
<td>{current.location}</td>
<td>{current.qualification}</td>
<td>{current.company}</td>
<td>{current.ctc}</td>
<td>{current.experience}</td>
<td>{current.dob}</td>
<td>
    <button >Edit</button>
   
</td>
        </tr>
    ))
}
</table>

</div>
  );
}
export default DataTable;