const express = require('express');
const connectDB = require('./config/db');

const app = express();



// Connect dataBase
connectDB(); 

// Init Middleware

app.use(express.json({extended : false})); 


app.get('/', (req, res) => res.send({msg: 'Welcome to the the conatact keeper API...'}));



// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contact'));

const PORT = process.env.PORT || 5000;

app.listen( PORT , () => console.log( `Server Started on port ${PORT}`));

