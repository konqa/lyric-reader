const express = require('express')
const app = express();
const port = process.env.PORT || 4500;

app.use(express.static(__dirname + '/'));
app.listen(port, () => console.log(`App running on port: ${port}`));
