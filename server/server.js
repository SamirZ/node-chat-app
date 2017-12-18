const path = require('path');
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');


//NEW
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath));

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});

module.exports = { app };