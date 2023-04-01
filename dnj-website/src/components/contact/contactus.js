import React, { useState } from "react"

/* useState Hook to keep track of each inputs value and provide a "single Truth" for the entire application. */

function Contactus() {
    const[inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name= event.target.name;
        const value = event.target;
        const textarea = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }

    const [textarea, setTextarea] = useState(
        "Leave us a message Here !"
    );

    return(
        <form onSubmit={handleSubmit}>
            <label>First Name:
                <input 
                type="text"
                name="First Name"
                value={inputs.firstname || ""}
                onChange={handleChange}
                />
            </label>
            <label>Last Name:
                <input
                type="text"
                name="Last Name"
                value={inputs.lastname || ""}
                onChange={handleChange}
                />
            </label>
            <textarea value={textarea} onChange={handleChange} />
            <input type="submit" />
        </form>
    )
}

export default Contactus;