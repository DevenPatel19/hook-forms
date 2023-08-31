import React, { useState } from  'react';
import UserFormDisplayComponent from "../components/UserFormDisplayCompenent";
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("")
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newUser = { 
            username, 
            email, 
            password,
            confirmPassword
        };
        console.log("Welcome", newUser);
    };
    
    return(
        <><form onSubmit={createUser}>
            <div className="box">
                <label> Username: </label>
                <input
                    name="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                {
                    // ternary operator for front end form validation
                }
            </div>
            <div className="box">
                <label>Email Address: </label>
                <input
                    name="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="box">
                <label>Password: </label>
                <input
                    name="password"
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="box">
                <label>Confirm Password: </label>
                <input
                    name="confirmPassword"
                    type="text"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>

        </form>
        <UserFormDisplayComponent username={username} email={email} password={password} confirmPassword={confirmPassword} /></>
    );
};
    
export default UserForm;
