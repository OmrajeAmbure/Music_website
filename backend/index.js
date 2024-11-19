const express = require("express");
const app = express();  
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    console.log(`Email: ${req.query.email}`);
    res.send('Check the console for the logged email!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
