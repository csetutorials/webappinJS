
const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getTutorials(){
  const rows = await db.query(
    `SELECT id, name, expertiselevel, duration, benefits 
    FROM tutorials`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

module.exports = {
    getTutorials
}
