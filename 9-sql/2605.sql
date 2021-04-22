-- 2605 - Executive Representatives
-- URL - https://www.urionlinejudge.com.br/judge/en/problems/view/2605

SELECT PROD.name, PROV.name
FROM products AS PROD, providers as PROV
WHERE PROD.id_categories = 6
  AND PROD.id_providers = PROV.id;
