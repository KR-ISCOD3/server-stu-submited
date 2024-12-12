const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
const connectdb = require('./config/connection.js');
const router = require('./routes/dataroutes.js');

config();

const corsOptions = {
    origin: ['https://form-submit-project.vercel.app/','https://etec-submit-project-form.netlify.app'], // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Allow cookies and credentials if needed
  };
  
const app = express();
const PORT = process.env.PORT || 3001;

connectdb();
app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});