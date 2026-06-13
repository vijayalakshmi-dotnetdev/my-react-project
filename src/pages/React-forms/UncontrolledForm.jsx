import React, { useRef } from 'react';

export default function UncontrolledForm() {

    const formRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            Username: formRef.current[0].value,
            password: formRef.current[1].value
        };
   
        console.log("formData======>", formData);
    };

    return (
        <div>
            <h1>Basic Form</h1>
            <form onSubmit={handleSubmit} ref={formRef} >
                <div>
                    <label htmlFor="Username">Username:</label>
                    <input type="text" id="Username" name="Username" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>

                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
}



