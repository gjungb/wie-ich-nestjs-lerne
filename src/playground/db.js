// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Pool } = require('pg');
// pools will use environment variables
// for connection information
const pool = new Pool();
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  pool.end();
});
