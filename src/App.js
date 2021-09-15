import { Fragment , useState} from 'react';

import AddUser from './component/Users/AddUser';
import UsersList from './component/Users/UsersList';

const App = () => {
  const [usersList, setUsersList] = useState([ ]); 
  let count = 1;
  const addUserHandler = ( uContent) => { 
      setUsersList((prevUsersList) => {
        return [...prevUsersList, {content: uContent, id: Math.random().toString(), count}];
      });
  };

 const like = (contentID) => {
      console.log("like id ", contentID);
      const updateChoice = usersList.map((post) => {
        if(post.id === contentID){
          return {...post, count:post.count+1}
        };
        return post;
      });
      setUsersList(updateChoice);
 };

  const unLike = (contentID) => {
    console.log("unLike id ", contentID);
    const updateChoice = usersList.map((post) => {
      if(post.id === contentID){
        return {...post, count:post.count-1}
      };
      return post;
    });
    setUsersList(updateChoice);
  };

  return (
    <Fragment>
       
        <AddUser onAddUser={addUserHandler}/>
     
        <UsersList users={usersList} userLike={like} userUnLike={unLike}/>
    </Fragment>
  );
}

export default App;
