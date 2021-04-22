-- 2604 - Under 10 or Greater Than 100
-- URL - https://www.urionlinejudge.com.br/judge/en/problems/view/2604

SELECT id, name
FROM products
WHERE price < 10 OR price > 100;
