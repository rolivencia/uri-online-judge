SELECT PROD.name, PROV.name
FROM products AS PROD, providers as PROV
WHERE PROD.id_categories = 6
  AND PROD.id_providers = PROV.id;
