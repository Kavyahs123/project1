import ReactDOM from 'react-dom/client';
import './App.css';
import React, { useState} from 'react';
import DataTable from './DataTable';


function Add(){
const element=(
<div>
  <DataTable/>
</div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
}

function Submit(){
   const myElement= (
  <div> 
  <strong class="bar">Submitted Succesfully...!</strong>
 </div>
  );
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(myElement);
   }

const AddUser=()=>
{
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const[gender,setGender]=useState('');
  const[location,setLocation]=useState('');
  const[qualification,setQualification]=useState('');
  const[company,setCompany]=useState('');
  const[ctc,setCtc]=useState('');
  const[dob,setDateOfBirth]=useState('');
  const[experience,setExperience]=useState('');
 
  const isFormValid = name && email && phone && gender && location && qualification && company && ctc && experience;
  
  const handleKeyPress = (event) => {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  };

  return(
    <div id="bg">
        <form id="myForm" class="three" >
             <div id="four">
                <h1>Employee Details</h1><hr/>  
        </div>
            <div style={{padding:10}}>
      <label class="ten">Enter Name <input type="text" class="five"
        placeholder="Full Name" 
        name="fname"
        value={name}
            onChange={(e) => setName(e.target.value)}/>
      </label>
      </div>
    <div style={{padding:10}}>
      <label class="ten">Enter Email <input type="text" class="five" name="email"
      placeholder="@email.com" 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
      </label>
      </div>
      <div style={{padding:10}}>
      <label class="ten">Phone NO <input type="text" id="five" name="phone"
      placeholder="+91" 
      maxLength="10"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      onKeyPress={handleKeyPress}
      />
      </label>
      </div>
      <div style={{padding:10}}>
      <label class="ten">Gender <input type="text" id="six" placeholder="F/M" name="gender"
      value={gender}
      onChange={(e) => setGender(e.target.value)}/>
    </label>
      </div>
      <div style={{padding:10}}>
      <label class="ten">Date Of Birth <input type="text" id="twelve" placeholder="DD/MM/YY" name="dob"
      value={dob}
      onChange={(e) => setDateOfBirth(e.target.value)}/>
    </label>
      </div>
      <div style={{padding:10}}>
      <label class="ten">Current Location <input type="text" placeholder="Bengaluru" id="seven" name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}/>
      </label>
      </div>
      <div style={{padding:10}}>
      <label class="ten">Qualification <input type="text" placeholder="Highest qualifictn"  id="eight" name="qualification"
         value={qualification}
         onChange={(e) => setQualification(e.target.value)}/>
      </label>
      </div>
      <div style={{padding:10}}>
      <label class="ten">Work Experience <input type="text"  placeholder="in years"  id="nine" name="experience"
       value={experience}
       onChange={(e) => setExperience(e.target.value)}
       onKeyPress={handleKeyPress}
       />
      </label>
      </div>
      <div style={{padding:10}}>
      <label class="ten">Current Company <input type="text" placeholder="Compny Name"  id="ten" name="company"
         value={company}
         onChange={(e) => setCompany(e.target.value)}/>
      </label>
      </div>
      <div style={{padding:10}}>
      <label class="ten">Current Ctc <input type="text"  placeholder="LPA"  id="eleven" name="ctc"
         value={ctc}
         onChange={(e) => setCtc(e.target.value)}
         onKeyPress={handleKeyPress}/>
      </label>
      </div>
      <div style={{padding:10}}>
        <label>
     <input id="one" type="submit" value="Submit" onClick={Submit} disabled={!isFormValid}/>
     </label>
     <label>
   <button id="bu" onClick={Add} >Add</button>
     </label>
      </div>
    </form>
    </div>
    );
}
export default AddUser;