import React, { useState } from "react";
import axios from "axios";
import './CustomerDetails.css'; // Import the CSS file

function CustomerDetails() {
    const [values, setValues] = useState({
        CustID: ''
    });
    const [customers, setCustomers] = useState([]);

    const handleSearchById = async () => {
        axios.post('http://localhost:8081/Customerdetails', { CustID: values.CustID })
            .then((res) => {
                if (res.data.length > 0) {
                    setCustomers(res.data);
                } else {
                    alert("No customer found");
                }
            })
            .catch((err) => console.log(err));
    };

    const handleFetchAll = async () => {
        axios.get('http://localhost:8081/Customerdetailsall')
            .then((res) => {
                if (res.data.length > 0) {
                    setCustomers(res.data);
                } else {
                    alert("No customers found");
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
                    <button onClick={handleFetchAll}>Fetch All Customers</button>
                </div>
            </div>
            <div className="results-section">
                <table>
                    <thead>
                        <tr>
                            <th>CustID</th>
                            <th>CustName</th>
                            <th>ShortName</th>
                            <th>CustType</th>
                            <th>Phone</th>
                            <th>Fax</th>
                            <th>email</th>
                            <th>URL</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip</th>
                            <th>Taxable</th>
                            <th>SalTaxId</th>
                            <th>ShpAddress</th>
                            <th>ShpCity</th>
                            <th>ShpState</th>
                            <th>ShpZip</th>
                            <th>Balance</th>
                            <th>CreditAmount</th>
                            <th>LastInvoice</th>
                            <th>LastSaleDate</th>
                            <th>PayTerms</th>
                            <th>SalesRep</th>
                            <th>LastModDate</th>
                            <th>LastModuser</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.CustID}>
                                <td>{customer.CustID}</td>
                                <td>{customer.CustName}</td>
                                <td>{customer.ShortName}</td>
                                <td>{customer.CustType}</td>
                                <td>{customer.Phone}</td>
                                <td>{
customer.Fax}</td>
<td>{customer.email}</td>
<td>{customer.URL}</td>
<td>{customer.Address}</td>
<td>{customer.City}</td>
<td>{customer.State}</td>
<td>{customer.Zip}</td>
<td>{customer.Taxable ? 'Yes' : 'No'}</td>
<td>{customer.SalTaxId}</td>
<td>{customer.ShpAddress}</td>
<td>{customer.ShpCity}</td>
<td>{customer.ShpState}</td>
<td>{customer.ShpZip}</td>
<td>{customer.Balance}</td>
<td>{customer.CreditAmount}</td>
<td>{customer.LastInvoice}</td>
<td>{customer.LastSaleDate}</td>
<td>{customer.PayTerms}</td>
<td>{customer.SalesRep}</td>
<td>{customer.LastModDate}</td>
<td>{customer.LastModuser}</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
);
}

export default CustomerDetails;