import { Fragment , useState} from 'react';

import AddUser from './component/Users/AddUser';
import UsersList from './component/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([ ]);
  
  const addUserHandler = (uName, uAge, uContent) => { 
      setUsersList((prevUsersList) => {
        return [...prevUsersList, {name: uName, age: uAge, content: uContent, id: Math.random().toString()}];
      });
  };
  return (
    <Fragment>
       
        <AddUser onAddUser={addUserHandler}/>
     
        <UsersList users={usersList}/>
    </Fragment>
  );
}

export default App;
