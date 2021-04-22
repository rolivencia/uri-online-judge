-- 2606 - Categories
-- URL - https://www.urionlinejudge.com.br/judge/en/problems/view/2606

SELECT products.id, products.name
FROM products
JOIN categories
ON products.id_categories = categories.id
WHERE categories.name LIKE 'super%';
