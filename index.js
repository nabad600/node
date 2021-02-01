const express = require('express')
const app = express()

app.get('/',(req, res) => res.send(process));

app.listen(3000, () => {
    console.log('My Rest API running on port 3000!')
})
