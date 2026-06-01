import React, { useState } from 'react';

export default function BasicForm() {

    const[loginData, setLoginData] = useState({});

    const handleChange = (event) => {
        const fieldname = event.target.name;
        const fieldvalue = event.target.value;

        setLoginData({
            ...loginData,
            [fieldname]: fieldvalue
        }); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted", loginData);
    };

    return (
        <div>
            <h1>Basic Form</h1>
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="Username">Username:</label>
                    <input type="text" id="Username" name="Username" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" onChange={handleChange}     />
                </div>

                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
}



