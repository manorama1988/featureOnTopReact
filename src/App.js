import { getByDisplayValue } from '@testing-library/dom';
import { Fragment , useState} from 'react';

import AddUser from './component/Users/AddUser';
import UsersList from './component/Users/UsersList';

const App = () => {

  const [apiData , setApiData ] = useState([ ]);
  
  const [usersList, setUsersList] = useState([ ]); 
  const addUserHandler = ( enteredContent, enteredTitle, enteredImage, enteredCategory) => { 
    console.log(enteredImage,"image");
      setUsersList((prevUsersList) => {
        return [...prevUsersList, {
            content: enteredContent,
            title: enteredTitle,
            image: enteredImage,
            category: enteredCategory,
            id: Math.random().toString()}];
      });
  };

 
 async  function fetchApiDataHandler() {
  const response = await fetch(
     {
        method: "get",
        url: "https://peerup-web-dev-srv.herokuapp.com/parse/classes/PostIt",
        headers: {
          "X-Parse-Application-Id": "MVV6avFp",
          "Content-Type": "application/json"
        }
      }
  )
  const data = await response.json();
    const transfromApiData = data.results.map(apiData => {
      return {
        id:apiData.objectId,
          title: apiData.title,
          description: apiData.description,
          category: apiData.category,
          image: apiData.image,
      }
    });
    setApiData(transfromApiData);

 

  return (
    <Fragment>
       
        <AddUser onAddUser={addUserHandler} onClick={fetchApiDataHandler}/>
     
        <UsersList users={usersList} />
    </Fragment>
  );
}
}
export default App;
