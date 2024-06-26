import React, { useState } from "react";
import axios from "axios";
import './CustomerDetails.css'; // Import the CSS file

function Contactdetails() {
    const [values, setValues] = useState({
        CustID: ''
    });
    const [contacts, setContacts] = useState([]);

    const handleSearchById = async () => {
        axios.post('http://localhost:8081/Contactdetails', { CustID: values.CustID })
            .then((res) => {
                if (res.data.length > 0) {
                    setContacts(res.data);
                } else {
                    alert("No contact found");
                }
            })
            .catch((err) => console.log(err));
    };

    const handleFetchAll = async () => {
        axios.get('http://localhost:8081/Contactdetailsall')
            .then((res) => {
                if (res.data.length > 0) {
                    setContacts(res.data);
                } else {
                    alert("No contacts found");
                }
            })
            .catch((err) => console.log(err));
    };

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="container">
            <div className="search-section">
                <label>CustID:
                    <input
                        type="number"
                        name="CustID"
                        value={values.CustID}
                        onChange={handleChange}
                        required
                    />
                </label>
                <div className="button-group">
                    <button onClick={handleSearchById}>Search by CustID</button>
                    <button onClick={handleFetchAll}>Fetch All Contacts</button>
                </div>
            </div>
            <div className="results-section">
                <table>
                    <thead>
                        <tr>
                            <th>CustID</th>
                            <th>ContactType</th>
                            <th>ContactName</th>
                            <th>WorkPhone</th>
                            <th>CellPhone</th>
                            <th>Fax</th>
                            <th>email</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip</th>
                            <th>LastModDate</th>
                            <th>LastModuser</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <tr key={contact.CustID}>
                                <td>{contact.CustID}</td>
                                <td>{contact.ContactType}</td>
                                <td>{contact.ContactName}</td>
                                <td>{contact.WorkPhone}</td>
                                <td>{contact.CellPhone}</td>
                                <td>{contact.Fax}</td>
                                <td>{contact.email}</td>
                                <td>{contact.Address}</td>
                                <td>{contact.City}</td>
                                <td>{contact.State}</td>
                                <td>{contact.Zip}</td>
                                <td>{contact.LastModDate}</td>
                                <td>{contact.LastModuser}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Contactdetails;
