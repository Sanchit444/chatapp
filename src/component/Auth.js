const sql = require('mssql');

const config = {
  user: 'sanchit',
  password: 'Target@2019',
  server: 'chatapplication.database.windows.net',
  database: 'chatapp',
  options: {
    encrypt: true
  }
};

const pool = new sql.ConnectionPool(config);

async function authenticateUser(username, password) {
  await pool.connect();
  const result = await pool.request()
    .input('username', sql.VarChar, username)
    .input('password', sql.VarChar, password)
    .query('SELECT * FROM ssers WHERE username = @username AND password = @password');

  if (result.recordset.length > 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = { authenticateUser };
