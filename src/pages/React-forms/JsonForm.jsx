import React,{useState} from 'react';
import formfields from '../../assets/json/form-field.json';

export default function JsonForm() {

    const [formdata, setFormdata] =useState();

    const handlechange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        console.log(name, value);

        setFormdata({
            ...formdata,
            [name]: value
        }); 
    }

    const handlesubmit = (event) => {
        event.preventDefault();
        console.log(formdata);  
    }
    return (
        <div>
            <div>
                <h1>Json Form</h1>
            </div>
            <div>
                <form onSubmit={handlesubmit}>
                    {
                        formfields.map((value, index) => { 
                            return (
                                <div key={index}>
                                    <label htmlFor={value?.fieldId}>{value?.fieldLabel}</label>

                                    {
                                        value?.fieldType != "select" && 
                                        value?.fieldType != "textarea" && 
                                        (
                                            <input
                                                type={value?.fieldType}
                                                id={value?.fieldId}
                                                name={value?.fieldName}
                                                onChange={handlechange}
                                            />
                                        )
                                    }

                                    {
                                        value?.fieldType === "select" &&
                                        (
                                            <select id={value?.fieldId} name={value?.fieldName} onChange={handlechange}>
                                                {
                                                    value?.fieldOptions?.map((value, index) => (
                                                        <option key={index} value={value?.value}>
                                                            {value}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        )
                                    }

                                    {
                                        value?.fieldType === "textarea" &&
                                        (
                                            <textarea
                                                id={value?.fieldId}
                                                name={value?.fieldName}
                                                rows={10}
                                                cols={10}
                                                onChange={handlechange}
                                            />
                                        )   
                                    }

                                </div>
                            );
                        })
                    }
                </form>
            </div>
        </div>
    );
}