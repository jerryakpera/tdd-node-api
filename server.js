const db = require('./db/dbConn');
const app = require('./index');

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
