const express = require('express');
const { MongoClient } = require('mongodb')
// dbpass
const PORT = 8080;

const app = express();

app.get("/api/get/offercards", (req, res) => {


});


app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));