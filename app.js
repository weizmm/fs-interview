const createUser = require('./utils/create-user');
const express = require('express');

const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/api/users', (req, res) => {
    createUser(req.body);
    res.sendStatus(200);
});

app.listen(port, () => { console.log(`Listen on port ${port}`) });