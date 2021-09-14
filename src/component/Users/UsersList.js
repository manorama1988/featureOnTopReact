import React ,{ useState } from 'react';

import Card from '../UI/Card';
import classes from './UsersList.module.css';
const UsersList = (props) => {
    const [like, setLike] = useState( [ ]);

    const likeButton =(event) => {
        // console.log(event.target.value,"like");
        // setLike(event.target.value);
       const likebutton = event.target.value;
        console.log(likebutton,"like ");
    }

    return (
        
        <div className={classes.users}>
    <ul>        
        
        {props.users.map((user)=> (
            <li key={user.id}>
                {user.name} ({user.age} years old) {user.content}
                <div className={classes.choice}>
                <button className={classes.like} onClick={likeButton}> {props.likebutton}</button>
                <button className={classes.unlike}>Unlike</button>
        </div> 
            </li>
            
        ))}
    
    
</ul>
    
    <br /></div>
    );
};
export default UsersList;