import React ,{ useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from  './AddUser.module.css';



const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState(' ');
    const [enteredAge, setEnteredAge] = useState(' ');
    const [enteredContent, setEnteredContent] = useState(' ');
    const addUserHandler =(event) => {
        event.preventDefault(); 
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 || enteredContent.trim().length === 0){
            return;
        }
        if(+enteredAge < 1){
            return;
        }
        

        // console.log(enteredUsername, enteredAge, enteredContent);
        props.onAddUser(enteredUsername, enteredAge, enteredContent);
        setEnteredUsername(' ');
        setEnteredAge(' ');
        setEnteredContent(' ');
    }

    const usernameChangeHandler = (event) =>{
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };
    const contentChangeHandler = (event) => {
        setEnteredContent(event.target.value);
    };

    return ( 
            <Card className={classes.a}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username"> Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>   
                    <label htmlFor="userage"> Age (year)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>   
                    <label htmlFor="usertext"> Title</label>
                    <input id="usertext" type="text" value={enteredContent} onChange={contentChangeHandler}/>  
                    <Button type="submit" className={classes.submitButton}>Add User</Button>                 
                </form>
             </Card>
    );
};
export default AddUser;