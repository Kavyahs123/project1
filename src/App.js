import AddUser from './AddUser';
import React, { useState } from 'react';
import DataTable from './DataTable';

        function App() {
            const [showAddUser, setShowAddUser] = useState(false);
             const handleAddUserClick = () => {
             setShowAddUser(true);
             }
            
  return ( 
    <div>
      {!showAddUser && <button  id="two" onClick={handleAddUserClick}>Add Employee Details</button>}
      {showAddUser && <AddUser />}
    
     </div> 
  );
}
export default App;
