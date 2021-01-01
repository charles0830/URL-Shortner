const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

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