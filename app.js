const express = require('express');


module.exports = function (database) {
    
    const app = express();
    
    app.use(express.json())
    
    app.post('/users', async (req, res) => {
        const { password, username } = req.body;
    
        if(!password || !username) {
            return res.sendStatus(400)
        }

        const userId = await database.createUser(username, password)
    
        res.send({ userId })
    })

    return app
}