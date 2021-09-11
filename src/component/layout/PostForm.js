import React from 'react';

import classes from './PostForm.module.css';


const PostForm = (props) => {
    const submitData = (event) => {
        event.preventDefault();
        event.preventDefault();
        console.log("form submit");
    }
    const titleChangeHandler = (event) => {
            console.log(event.target.value);
         
    }
    return (
        <div className={classes.formbackground}>
                <form onFormSubmit={submitData}>
                    <input type="textarea" onChange={titleChangeHandler}/>
                    <button className={classes.submitButton}>Submit</button>
                </form>
        </div>
    );
};
export default PostForm;