-- 2604 - Under 10 or Greater Than 100

SELECT id, name
FROM products
WHERE  amount < 10 OR amount > 100
