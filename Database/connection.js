const mongoose = require('mongoose')

const connectionSring = process.env.DATABASE
mongoose.connect(connectionSring, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("Mongodb Atles connected successfully..🚀 ");
}).catch((err) => {
    console.log(`Mongodb Atles connection failed...⚠️, ${err} `);
})
