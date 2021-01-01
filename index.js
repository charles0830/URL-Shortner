const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const admin = require("firebase-admin");
const serviceAccount = require("");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


const staticFolder = express.static("public");
app.use(staticFolder);
app.use(bodyParser.json());


app.post('/admin/urls/', (req, res) => {
    console.log(req.body);
    res.send('Hello From Another World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})