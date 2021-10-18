const { Pool } = require('pg')
const { pgConfig } = require('../config.js')
const pool = new Pool(pgConfig);


let User_order = `
select
    o.order_id,
    o.order_paid,
    array_agg(s.steak_name) as steak_names,
    sum(os.count * s.steak_price) as price
from orders o
natural join order_sets os
inner join steaks s on s.steak_id =os.steak_id
group by o.order_id`

let limit = `
select 
* 
from steaks
limit 3
`


let elements = `
select
*
from steaks
order by steak_id desc
limit 3`

let offset = `
select 
*
from steaks
limit 2 offset 2`


let count = `
select
count(*)
from steaks`


let ichidaBormi = `
select
true as result
when 'o' in ('a', 'o');`

let results =
    `select
case
when 'a' in ('o') then true
else false
end as result`

let two = `

select
steak_name
from steaks 
where steak_id in (
    select 
    steak_id 
    from  order_sets
    where count = 2 
)`;

/*-- order_sets ichidagi count =2 teng bo`lgan steack_id ni ol. steacks ning ichidagi 
steack_id subQuerydan chiqgan steack_id ga teng bo`lganlarini steak_namelarini chiqarib ber 
 */

let steack_name = `
select
steak_name
from steaks 
where steak_id in (
    select 
    steak_id 
    from  order_sets
    where count = 2 
);`

async function connection(query, array) {
    const client = await pool.connect();
    try {
        const { rows } = await client.query(query, array ? array : null);
        return rows;

    } catch (error) {
        console.log(error);
    }
    finally {
        await client.release()
    }
}

module.exports = {
    connection
};