const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const pgConfig = {
    user:process.env.PGUSER,
    password:process.env.PGPASSWORD,
    database:process.env.PGDATABASE,
    host:process.env.PGHOST,
    port : process.env.PGPORT
}

module.exports = {
    pgConfig
}