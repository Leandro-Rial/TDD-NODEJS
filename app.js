const express = require('express');
const app = express();

app.use(express.json())

app.post('/users', (req, res) => {
    const { password, username } = req.body;

    if(!password || !username) {
        return res.sendStatus(400)
    }

    res.send({userId: 0})
})

module.exports = app