const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const admin = require("firebase-admin");
const serviceAccount = require("./url-shortner-338c1-firebase-adminsdk-yfrrz-cc29eab9ce.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const staticFolder = express.static("public");

const urlsdb = admin.firestore().collection("urlsdb")

app.use(staticFolder);
app.use(bodyParser.json());

app.get('/:short_url', (req,res) => {
    const short_url = req.params.short_url;
    const doc = urlsdb.doc(short_url)

    doc.get().then(response=>{
        const data = response.data()
        if (data && data.url){
            res.redirect(301,data.url);
        }
    })
});

app.post('/admin/urls/', (req, res) => {
    console.log(req.body);
    res.send('Hello From Another World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})