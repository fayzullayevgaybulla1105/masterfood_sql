select
    o.order_id,
    o.order_paid,
    array_agg(s.steak_name) as steak_names,
    sum(os.count * s.steak_price) as price
from orders o
natural join order_sets os
inner join steaks s on s.steak_id =os.steak_id
group by o.order_id;



select 
* 
from steaks
limit 1;
-- steaksning birinchi limitini chiqarib olishimiz mumkin


--oxirgi 3ta elementini chiqarish uchun avval elementlarning id larini teskari chiqarib olamiz desc bilan.
-- keyin keraklicha sonni limitga kiritamiz. Aynan bizga kerakligicha chiqarib beradi

select
*
from steaks
order by steak_id desc
limit 3;


--offset chiqarilishi kerak bo`lgan qatorlar ichida bizga chiqishi muhim bo`lmaganlarini kiritamiz va
--ulardan keyin nechtasini chiqarib berishi kerakligini kiritib ketishimiz kerak
-- bizga birinchi pagega 2ta chiqsin deb so`rasak 
-- limit 2 offset 0; deb kiritishimiz kerak
select 
*
from steaks
limit 2 offset 2;

-- tablemizning uzunligini bilmoqchi bo`lsak count dan foydalanamiz

select
count(*)
from steaks;


select
true as result
where 'o' in ('a', 'o');


select
    case
        where 'a' in ('o') then true
    else false
    end as result;


-- order_sets ichidagi count =2 teng bo`lgan steack_id ni ol. steacks ning ichidagi 
steack_id subQuerydan chiqgan steack_id ga teng bo`lganlarini steak_namelarini chiqarib ber 

select
steak_name
from steaks 
where steak_id in (
    select 
    steak_id 
    from  order_sets
    where count = 2 
);