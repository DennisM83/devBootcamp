const express = require("express");
const dotenv = require("dotenv");
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors')

// Load env vars

dotenv.config({ path: "./config/config.env" });

connectDB();

//Route files
const bootcamps = require('./routes/bootcamps')

const app = express();

//Body parser
app.use(express.json());

// Dev logging middleware 
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps', bootcamps);


const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.blue.bold)
);

// Control unhandled promise rejections 
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error ${err.message}`);
    // close server and exit
    server.close(() => process.exit(1));
});
