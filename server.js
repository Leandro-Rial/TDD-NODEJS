const database = require('./database');
const makeApp = require('./app');

const app = makeApp(database)

app.listen(3000, () => console.log("Listening on port 3000"))