const express = require('express');
const app = express();
const MongoClient= require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js')

const cors = require('cors')

app.use(express.json());
app.use(cors())

MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology: true})
.then((client) => {
    const db =client.db('dinos');
    const dinosaursCollection = db.collection('dinosaurs');
    const dinosaursRouter= createRouter(dinosaursCollection);
    app.use('/api/dinosaurs', dinosaursRouter)
})

app.listen(5000, function (){
    console.log(`listening on port ${ this.address().port}`);
})

