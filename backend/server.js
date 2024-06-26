const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//sql connection
const db = mysql.createConnection({
    host: "127.0.0.1",
    port:'3306',
    user: "root",
    password: "123",
    database: "dbms"
});
//fetching states from database
app.get('/states', (req, res) => {
    const query = 'SELECT StateName FROM State'; 
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json(results.map(row => row.StateName)); 
    });
  });
  //inserting details into table customer in database
app.post('/Main',(req,res) => {
    const sql ="INSERT INTO Customer (CustName,ShortName,CustType,Phone,Fax,email,URL,Address,City,State,Zip,Taxable,SalTaxId,ShpAddress,ShpCity,ShpState,ShpZip,Balance,CreditAmount,LastInvoice,LastSaleDate,PayTerms,SalesRep,LastModDate,LastModuser) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    const values=[
        req.body.CustName,
        req.body.ShortName,
        req.body.CustType,
        req.body.Phone,
        req.body.Fax,
        req.body.email,
        req.body.URL,
        req.body.Address,
        req.body.City,
        req.body.State,
        req.body.Zip,
        req.body.Taxable,
        req.body.SalTaxId,
        req.body.ShpAddress,
        req.body.ShpCity,
        req.body.ShpState,
        req.body.ShpZip,
        req.body.Balance,
        req.body.CreditAmount,
        req.body.LastInvoice,
        req.body.LastSaleDate,
        req.body.PayTerms,
        req.body.SalesRep,
        req.body.LastModDate,
        req.body.LastModuser

    ]
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error(err);
            return res.json(err);
        }
        return res.json(data);
    });
});

//inserting data into contact table in database
app.post('/Contact',(req,res) => {
    const sql ="INSERT INTO Contact (CustID,ContactType,ContactName,WorkPhone,CellPhone,Fax,email,Address,City,State,Zip,LastModDate,LastModuser) values (?,?,?,?,?,?,?,?,?,?,?,?,?)";
    const values=[
        req.body.CustID,
        req.body.ContactType,
        req.body.ContactName,
        req.body.WorkPhone,
        req.body.CellPhone,
        req.body.Fax,
        req.body.email,
        req.body.Address,
        req.body.City,
        req.body.State,
        req.body.Zip,
        req.body.LastModDate,
        req.body.LastModuser

    ]
    db.query(sql, values, (err, data) => {
        if(err)
        {
            console.log(err);
            return res.json({ error:"An error occurred while inserting data into the database"})
        }
        return res.json(data);
});
});

//fetching customer details from database using custid
app.post('/Customerdetails', (req, res) => {
    const { CustID } = req.body;
    const query = 'SELECT * FROM Customer WHERE CustID = ?';
   db.query(query, [CustID], (err, results) => {
        if (err) {
            console.error('Error fetching customer details:', err);
            res.status(500).send('Error fetching customer details');
            return;
        }
        res.json(results);
    });
});

// Fetch all customer details
app.get('/Customerdetailsall', (req, res) => {
    const query = 'SELECT * FROM Customer';
   db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching all customer details:', err);
            res.status(500).send('Error fetching all customer details');
            return;
        }
        res.json(results);
    });
});

//fetching contact details
app.post('/Contactdetails', (req, res) => {
    const { CustID } = req.body;
    const query = 'SELECT * FROM Contact WHERE CustID = ?';
   db.query(query, [CustID], (err, results) => {
        if (err) {
            console.error('Error fetching customer details:', err);
            res.status(500).send('Error fetching customer details');
            return;
        }
        res.json(results);
    });
});

//fetching all contact details from database
app.get('/Contactdetailsall', (req, res) => {
    const query = 'SELECT * FROM Contact';
   db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching all customer details:', err);
            res.status(500).send('Error fetching all customer details');
            return;
        }
        res.json(results);
    });
});



app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});