import React, { useState } from "react"

function Form(props) {
    const company = props.companies.filter(
        (company) => company._id.$oid === props.id
    );
    const [newOne, setNewOne] = useState({
        _id: {
            $oid: props.editing ? company[0]._id.$oid : null,
        },
        CIN: props.editing ? company[0].CIN: "",
        name: props.editing ? company[0].name: "",
        email: props.editing ? company[0].email: "",
        phone: props.editing ? company[0].phone: "",
        address: props.editing ? company[0].address: "",
        zipcode: props.editing ? company[0].zipcode: "",
    })

    const handleChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setNewOne({ ...newOne, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addEdit(newOne);
    };

    return (
        <div style={formContainer}>
            <form style={formStyle} onSubmit={habdleSubmit}>
                <legend>{props.editing ? "Edit Company": "New Company"} </legend>
                <div style={{ display: "flex" }}>
                    <div style={columnStyle}>
                        <label>CIN: </label>
                        <input
                            type="number"
                            name="cin"
                            value={newOne.CIN}
                            onChange={handleChange}
                        />
                        <label>Name: </label>
                        <input
                            type="text"
                            name="name"
                            value={newOne.name}
                            onChange={handleChange}
                        />
                        <label>Email: </label>
                        <input
                            type="text"
                            name="email"
                            value={newOne.email}
                            onChange={handleChange}
                        />
                        <label>Phone: </label>
                        <input
                            type="number"
                            name="phone"
                            value={newOne.phone}
                            onChange={handleChange}
                        />
                        <label>Address: </label>
                        <input
                            type="text"
                            name="address"
                            value={newOne.address}
                            onChange={handleChange}
                        />
                        <label>Zipcode: </label>
                        <input
                            type="text"
                            name="zipcode"
                            value={newOne.zipcode}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div style={btnContainer}>
                    <button style={btnStyle} type="submit">
                        Submit
                    </button>
                    <button style={btnStyle} type="button" onClick={props.toggleForm}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

const formContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#CED6DC",
    border: "1px #707070 solid",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "15px"
};

const formStyle = {
    display: "flex",
    flexDirection: "column",
    margin: "20px"
};

const btnContainer = {
    display: "flex",
};

const btnStyle = {
    display: "flex",
    justifyContent: "center",
    background: "#fff",
    padding: "5px",
    margin: "0 3px",
    borderWidth: "1px",
    borderRadius: "5px",
    overflow: "hidden",
    cursor: "pointer",
};

export default Form;