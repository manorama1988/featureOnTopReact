import React ,{ useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from  './AddUser.module.css';



const AddUser = (props) => {
   
    const [enteredContent, setEnteredContent] = useState(' ');
    const addUserHandler =(event) => {
        event.preventDefault(); 
        if( enteredContent.trim().length === 0){
            return;
        }
        props.onAddUser( enteredContent);

        setEnteredContent(' ');
    }

 
    const contentChangeHandler = (event) => {
        setEnteredContent(event.target.value);
    };

    return ( 
            <Card className={classes.a}>
                <form onSubmit={addUserHandler}>
                   
                    <label htmlFor="usertext"> My Post</label>
                    <textarea id="usertext" type="text" cols="20"
          rows="3"
          maxLength="180"
          required value={enteredContent} onChange={contentChangeHandler}/>  
          
                    <Button type="submit" className={classes.submitButton}>Add Post</Button>                 
                </form>
             </Card>
    );
};
export default AddUser;