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
                <li key={user.id} className={classes.cardPost}>
                    <p className={classes.cardPostImage}>{user.image} </p>
                        <div className={classes.cardPostContent}>
                            <div className={classes.cardPostText}>
                                 <p className={classes.cardPostTitle}>{user.title} </p>
                                 <p className={classes.cardPostDate}>{year}-{month < 10 ? `0${month}` : `${month}`}-{date} </p>
                            </div>
                            <div className={classes.cardPostDescription}>
                                 <p className={classes.cardDescription}>{user.content} </p>
                            </div>
                            <div className={classes.cardPostCategory}>
                                 <p className={classes.cardCategory}>{user.category} </p>
                            </div>   
                        </div>
                    
                    
                   
                    
                    {/* <div className={classes.postDate}>
                        {year}-{month < 10 ? `0${month}` : `${month}`}-{date}
                    </div> */}

                </li>
            </ul>
            ))}
        </div>
    );
};
export default UsersList;