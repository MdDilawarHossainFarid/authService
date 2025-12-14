
const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) => {
    let sum = 1 + 2;
    res.send(sum )
})

app.listen(port, () => {
    console.log(`app is runing on port ${port}`)
})
