import React, { useState } from 'react';
import './Contact.css';
import axios from "axios"; 

function Contact() {
    const [formData, setFormData] = useState({
        CustID: '',
        ContactType: '',
        ContactName: '',
        WorkPhone: '',
        CellPhone: '',
        Fax: '',
        email: '',
        Address: '',
        City: '',
        State: '',
        Zip: '',
        LastModDate: '',
        LastModuser: ''
    });

    //handling input from frontend

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    //sending request to backend to  store data in the database

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/Contact',formData)
        .then((response) => {
            console.log(response);
        })
        .catch(error => console.log(error));
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label>CustID
                    <input type="number" name="CustID" value={formData.CustID} onChange={handleChange} required />
                </label>
                <label>ContactType
                    <input type="text" name="ContactType" value={formData.ContactType} onChange={handleChange} required />
                </label>
                <label>ContactName
                    <input type="text" name="ContactName" value={formData.ContactName} onChange={handleChange} />
                </label>
                <label>WorkPhone
                    <input type="tel" name="WorkPhone" value={formData.WorkPhone} onChange={handleChange} />
                </label>
                <label>CellPhone
                    <input type="tel" name="CellPhone" value={formData.CellPhone} onChange={handleChange} />
                </label>
                <label>Fax
                    <input type="tel" name="Fax" value={formData.Fax} onChange={handleChange} />
                </label>
                <label>Email
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <label>Address
                    <input type="text" name="Address" value={formData.Address} onChange={handleChange} />
                </label>
                <label>City
                    <input type="text" name="City" value={formData.City} onChange={handleChange} />
                </label>
                <label>State
                    <input type="text" name="State" value={formData.State} onChange={handleChange} />
                </label>
                <label>Zip
                    <input type="text" name="Zip" value={formData.Zip} onChange={handleChange} />
                </label>
                <label>LastModDate
                    <input type="datetime-local" name="LastModDate" value={formData.LastModDate} onChange={handleChange} />
                </label>
                <label>LastModuser
                    <input type="text" name="LastModuser" value={formData.LastModuser} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
