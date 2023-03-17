const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.json('hello')
})

app.listen(3000, () => {
    console.log('app listen port 3000')
})