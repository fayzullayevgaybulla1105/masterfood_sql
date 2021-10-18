const db = require('../lib/postgres.js')

const STEAKS = `
select * from steaks`


const InsertSteak = `
insert into steaks (steak_name, steak_price, steak_img) values($1,$2,$3) returning *`


const getSteaks = async () => {return await db.connection(STEAKS)}

const insertSteaks = ({steak_name, steak_price, steak_img}) => {
   return  db.connection(InsertSteak, [steak_name, steak_price, steak_img])
}


module.exports = {
    getSteaks,
    insertSteaks
}