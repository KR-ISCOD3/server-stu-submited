const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
const connectdb = require('./config/connection.js');
const router = require('./routes/dataroutes.js');

config();

const app = express();
const PORT = process.env.PORT || 3001;

connectdb();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});