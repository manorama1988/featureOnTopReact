import React from 'react';
import classes from './Header.module.css';



const Header = (props) => {
    const submitData = (event) => {
        event.preventDefault();
        event.preventDefault();
        console.log("form submit");
    }
    const titleChangeHandler = (event) => {
            console.log(event.target.value);
         
    }
   
    return (
        <div>
        <div className={classes['header-title']}>
            <h2> Feature on Top</h2>
        </div>
        <div className={classes.formbackground}>
                <form onFormSubmit={submitData}>
                    <input type="textarea" onChange={titleChangeHandler}/>
                    <button className={classes.submitButton}>Submit</button>
                </form>
        </div>
        </div>
    )
}
export default Header;