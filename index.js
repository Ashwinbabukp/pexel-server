require('dotenv').config()
require('./Database/connection')
const express = require('express');
const cors = require('cors');
const router = require('./Routes/router');

const server = express()

const PORT = 3000 || process.env.PORT
server.use(cors())
server.use(express.json())
server.use(router)


server.listen(PORT, () => {
    console.log(`server running at ${PORT}.....🚀`);
})