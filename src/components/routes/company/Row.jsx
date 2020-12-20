import React from "react";

function Row(props) {
    const {
        CIN,
        name,
        email,
        phone,
        address,
        zipcode
    } = props.company;

    return (
        <tr style={rowStyle}>
            <td style={cellStyle}>{CIN}</td>
            <td style={cellStyle}>{name}</td>
            <td style={cellStyle}>{email}</td>
            <td style={cellStyle}>{phone}</td>
            <td style={cellStyle}>{address}</td>
            <td style={cellStyle}>{zipcode}</td>
            <td style={cellStyle}>
                <button
                    style={btnStyle}
                    onClick={() => {
                        props.toggleForm();
                        props.captureId(props.company._id.$oid);
                    }}
                    >
                        Create
                    </button>
            </td>
            <td style={cellStyle}>
                <button
                    style={btnStyle}
                    onClick={() => {
                        props.delItem(props.company._id.$oid);
                    }}
                >
                    Eliminate
                </button>
            </td>
        </tr>
    );
}

const cellStyle = {
    padding: "5px 20px"
};

const rowStyle = {
    background: "#CED6DC",
    lineHeight: "25px",
    border: "1px #707070 solid"
};

const btnStyle = {
    display: "flex",
    justifyContent: "center",
    background: "#ccc",
    padding: "4px",
    margin: "0 3px",
    borderWidth: "1px",
    borderRadius: "5px",
    overflow: "hidden",
    cursor: "pointer"
};

export default Row;