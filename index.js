const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const admin = require("firebase-admin");
const serviceAccount = require("url-shortner-338c1-firebase-adminsdk-yfrrz-cc29eab9ce.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


const staticFolder = express.static("public");
app.use(staticFolder);
app.use(bodyParser.json());

app.get('/:short_url', (req,res) => {
    console.log(res.params.short_url);
    const short_url = res.params.short_url;
    res.send(short_url);
})

app.post('/admin/urls/', (req, res) => {
    console.log(req.body);
    res.send('Hello From Another World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})