import React from "react";
import Row from "./Row.jsx";

function Table(props) {
    const companies = props.companies.map((company) => (
        <Row
            key={company._id.$oid}
            company={company}
            toggleForm={props.toggleForm}
            captureId={props.captureId}
            delItem={props.delItem}
        />
    ));

    return (
        <div>
            <button
                style={btnStyle}
                onClick={() => {
                    props.toggleForm();
                    props.captureId(null);
                }}
            >
                New Company
            </button>
            <table style={tableStyle}>
                <thead style={headerStyle}>
                    <tr>
                        <th>CIN</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Zipcode</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>{companies}</tbody>
            </table>
        </div>
    );
}

const btnStyle = {
    display:"flex",
    justifyContent: "center",
    background: "#fff",
    padding: "4px",
    marginBottom: "10px",
    borderWidth: "1px",
    borderRadius: "5px",
    overflow: "hidden",
    cursor: "pointer"
};

const headerStyle = {
    background: "#708DA6",
    color: "#fff",
    lineHeight: "40px"
};

const tableStyle = {
    border: "1px solid gray",
    textAlign: "center"
};

export default Table;