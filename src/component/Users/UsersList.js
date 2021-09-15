import React ,{ useState } from 'react';

import Card from '../UI/Card';
import classes from './UsersList.module.css';
const UsersList = (props) => {
    const [count, setCount] = useState( 0 );

    const likeButton =(event) => {
        setCount(count + 1);
       console.log("click me" + count);
    }
    const unLikeButton = () => {
        setCount(count - 1);
        console.log("un click me" + count);
    }

    return (
        
        <Card className={classes.users}>
    <ul>        
        
        {props.users.map((user)=> (
            <li key={user.id}>
           
                <div className={classes.choice}>
                    <h1>{count}</h1>
                        <button className={classes.like} onClick={likeButton}> Like</button>
                        <button className={classes.unlike} onClick={unLikeButton}>Unlike</button>
                 </div> 
            </li>
            
        ))}
    
    
</ul>
    
    </Card>
    );
};
export default UsersList;