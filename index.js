const express = require('express')
const app = express()
const port = 3000

const staticFolder = express.static("public");

app.use(staticFolder)


app.get('/another', (req, res) => {
    res.send('Hello From Another World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})