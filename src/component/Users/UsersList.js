import React  from 'react';

import classes from './UsersList.module.css';


const UsersList = (props) => {
   
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return (
        
        <div className={classes.users} >
            {props.users.sort((a,b)=>(a.count > b.count ? -1 : 1)).map((user) => (
            <ul>        
                <li key={user.id}>
                    <p className={classes.postText}>{user.content} </p>
                    <div className={classes.choice}>
                            <button className={classes.like} onClick={()=>props.userLike(user.id)}> 👍</button>
                            <h1 className={classes.userchoice}>{user.count}</h1>
                            <button className={classes.unlike}  onClick={()=>props.userUnLike(user.id)}> 👎</button>
                    </div> 
                    <div className={classes.postDate}>
                        {year}-{month < 10 ? `0${month}` : `${month}`}-{date}
                    </div>

                </li>
            </ul>
            ))}
        </div>
    );
};
export default UsersList;