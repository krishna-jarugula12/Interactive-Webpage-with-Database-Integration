import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './Main.css';

function Main() {
  const [formData, setFormData] = useState({
    CustName: '',
    ShortName: '',
    CustType: '',
    Phone: '',
    Fax: '',
    email: '',
    URL: '',
    Address: '',
    City: '',
    State: '',
    Zip: '',
    Taxable: false,
    SalTaxId: '',
    ShpAddress: '',
    ShpCity: '',
    ShpState: '',
    ShpZip: '',
    Balance: '',
    CreditAmount: '',
    LastInvoice: '',
    LastSaleDate: '',
    PayTerms: '',
    SalesRep: '',
    LastModDate: '',
    LastModuser: ''
  });
  const [isValid, setIsValid] = useState(true);

  const [states, setStates] = useState([]);
  //request for fetching states from database
  useEffect(() => {
    
    axios.get('http://localhost:8081/states')
      .then(response => {
        setStates(response.data);
      })
      .catch(error => {
        console.error('Error fetching states:', error);
      });
  }, []);

  //assigning values for variables
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    validateEmail(formData.email);
  };

  //validating email 
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^.\s@]+(\.[^\s@]+)+$/;
    setIsValid(emailRegex.test(email));
  };

  //send request to database to store info after clicking submit button 

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isValid) {
    try {
      const response = await axios.post('http://localhost:8081/Main', formData);
      console.log(response.data);
      if(response.data.errno == 1062)
      {
        alert("Customer already exists");
      }
      
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }
  else {
    alert('Email is invalid');
  }
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
      <h1>Details of Customer:</h1>
       
        <label>
          Customer Name:
          <input type="text" name="CustName" value={formData.CustName} onChange={handleChange} className="input-field" />
        </label>

        <label>
          Short Name:
          <input type="text" name="ShortName" value={formData.ShortName} onChange={handleChange} className="input-field" />
        </label>

        <label>
          Customer Type:
          <input type="text" name="CustType" value={formData.CustType} onChange={handleChange} className="input-field" />
        </label>

        <label>
          Phone:
          <input type="text" name="Phone" value={formData.Phone} onChange={handleChange} className="input-field" />
        </label>

        <label>
          Fax:
          <input type="text" name="Fax" value={formData.Fax} onChange={handleChange} className="input-field" />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="input-field" />
        </label>

        <label>
          URL:
          <input type="text" name="URL" value={formData.URL} onChange={handleChange} className="input-field" />
        </label>

        <label>
          Address:
          <input type="text" name="Address" value={formData.Address} onChange={handleChange} className="input-field" />
        </label>

        <label>
          City:
          <input type="text" name="City" value={formData.City} onChange={handleChange} className="input-field" />
        </label>

        <label>
        State:
          <select name="State" value={formData.State} onChange={handleChange} className="input-field">
            <option value="">Select State</option>
            {states.map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))}
          </select>
        </label>

        <label>
          Zip:
          <input type="text" name="Zip" value={formData.Zip} onChange={handleChange} className="input-field" />
        </label>

        <label>
          Taxable:
          <input type="checkbox" name="Taxable" checked={formData.Taxable} onChange={handleChange} className="input-field" />
        </label>

        <label>
          Sales Tax ID:
          <input type="text" name="SalTaxId" value={formData.SalTaxId} onChange={handleChange} className="input-field" />
        </label>

        <label>
          Shipping Address:
          <input type="text" name="ShpAddress" value={formData.ShpAddress} onChange={handleChange} className="input-field" />
        </label>

        <label>
          Shipping City:
          <input type="text" name="ShpCity" value={formData.ShpCity} onChange={handleChange} className="input-field" />
        </label>

        <label>
        Shipping State:
          <select name="ShpState" value={formData.ShpState} onChange={handleChange} className="input-field">
            <option value="">Select State</option>
            {states.map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))}
          </select>        
          </label>

        <label>
          Shipping Zip:
          <input type="text" name="ShpZip" value={formData.ShpZip} onChange={handleChange} className="input-field" />
        </label>

        <label>
          Balance:
          <input type="text" name="Balance" value={formData.Balance} onChange={handleChange} className="input-field" />
        </label>

        <label>
          Credit Amount:
          <input type="text" name="CreditAmount" value={formData.CreditAmount} onChange={handleChange} className="input-field" />
        </label>

        <label>
          Last Invoice:
          <input type="text" name="LastInvoice" value={formData.LastInvoice} onChange={handleChange} className="input-field" />
        </label>

        <label>
          Last Sale Date:
          <input type="datetime-local" name="LastSaleDate" value={formData.LastSaleDate} onChange={handleChange} className="input-field" />
        </label>

        <label>
          Payment Terms:
          <input type="text" name="PayTerms" value={formData.PayTerms} onChange={handleChange} className="input-field" />
        </label>

        <label>
          Sales Rep:
          <input type="text" name="SalesRep" value={formData.SalesRep} onChange={handleChange} className="input-field" />
        </label>

        <label>
          Last Modification Date:
          <input type="datetime-local" name="LastModDate" value={formData.LastModDate} onChange={handleChange} className="input-field" />
        </label>

        <label>
          Last Modification User:
          <input type="text" name="LastModuser" value={formData.LastModuser} onChange={handleChange} className="input-field" />
        </label>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Main;
