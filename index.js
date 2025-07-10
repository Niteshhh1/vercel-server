const express = require('express')
const cors = require('cors')
const dbconnect = require('./DB/dbconnect')
const adminCheck = require('./routes/adminRoute')
const createClient = require('./routes/clientRoutes')
const createProject = require('./routes/projectRoutes');
const createClientForm = require('./routes/clientFormRoute') 
const subscriberRoutes = require('./routes/subscriberRoutes')

const app = express();
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send("chal gya!")
})

dbconnect();

app.use('/api/get',adminCheck)
app.use('/api/clients',createClient);
app.use('/api/projects',createProject)
app.use('/api/client',createClientForm)
app.use('/api', subscriberRoutes);

app.listen(3000)