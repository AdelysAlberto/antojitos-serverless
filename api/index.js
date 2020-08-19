const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongoose');
const Routes = require('./Routes');

const app = express();
app.use(bodyParser.json());

mongodb.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology:true});
const router = express.Router();

router.get('/', (req,res)=> {
    res.send('Home')
})

app.use('/api', Routes)


module.exports = app;