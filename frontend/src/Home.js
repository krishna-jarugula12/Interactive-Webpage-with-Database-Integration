import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css';

function Home()
{
    return (
        <div className="container1"> {/* Apply the container class */}
          <Link to="/Main" className="button">Enter details</Link>
          <Link to="/Contact" className="button">Enter Contact details</Link>
          <Link to="/Customerdetails" className="button"> Customer Details</Link>
          <Link to="/Contactdetails" className="button"> Customer Contact Details</Link>
        </div>
      );
}
export default Home;