const express = require('express');
const path = require('path');

const app = express();
const port = 3029;

const staticpath = path.join(__dirname, "../public");
console.log(staticpath);

app.use(express.static(staticpath));


app.listen(port,() => {
    console.log('listening the port');
});