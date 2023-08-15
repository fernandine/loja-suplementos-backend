-- -------------------------------------------
-- Usuários e perfis
-- -------------------------------------------
INSERT INTO tb_user (first_name, last_name, cpf, birth_day, phone, email, password) VALUES ('Alex', 'gray', '12345678', NOW(), '31971734658', 'alex@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (first_name, last_name, cpf, birth_day, phone, email, password) VALUES ('Maria', 'green', '87654321', NOW(), '31978455484', 'maria@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_CLIENT');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

-- -----------------------------------------------------
-- Endereços
-- -----------------------------------------------------
INSERT INTO tb_address(cep, logradouro,complemento, bairro, localidade, uf, user_id) VALUES ('34001090','Rua Levy Firmino Alves', 'casa A', 'Parque Santo Antônio', 'Nova Lima', 'MG', 1);
INSERT INTO tb_address(cep, logradouro,complemento, bairro, localidade, uf, user_id) VALUES ('34012856','Rua Seis', 'casa B', 'Santa Rita', 'Nova Lima', 'MG', 2);

INSERT INTO tb_product_details(flavors, wheight, brand, gluten, lactose, vegan) VALUES ('CHOCOLATE', 20.00, 'Max', true, true, false);
INSERT INTO tb_product_details(flavors, wheight, brand, gluten, lactose, vegan) VALUES ('SEM_SABOR', 20.00, 'Max', true, true, false);
INSERT INTO tb_product_details(flavors, wheight, brand, gluten, lactose, vegan) VALUES ('MORANGO', 20.00, 'Max', true, true, false);
INSERT INTO tb_product_details(flavors, wheight, brand, gluten, lactose, vegan) VALUES ('BAUNILHA', 20.00, 'Max', true, true, false);

INSERT INTO tb_price_range(min_price, max_price) VALUES (10, 40);
INSERT INTO tb_price_range(min_price, max_price) VALUES (40, 100 );
INSERT INTO tb_price_range(min_price, max_price) VALUES (100, 200 );
INSERT INTO tb_price_range(min_price, max_price) VALUES (200, 300 );
INSERT INTO tb_price_range(min_price, max_price) VALUES (300, 400 );

-- -----------------------------------------------------
-- Categorias
-- -----------------------------------------------------
INSERT INTO tb_category(name) VALUES ('Creatina');
INSERT INTO tb_category(name) VALUES ('Pré-treino');
INSERT INTO tb_category(name) VALUES ('Hipercalóricos');
INSERT INTO tb_category(name) VALUES ('Proteína');
INSERT INTO tb_category(name) VALUES ('Acessórios');

-- -----------------------------------------------------
-- Sub-categorias
-- -----------------------------------------------------
INSERT INTO tb_subcategory(name, category_id) VALUES ('Albumina', 4);
INSERT INTO tb_subcategory(name, category_id) VALUES ('Concentrada', 4);
INSERT INTO tb_subcategory(name, category_id) VALUES ('Isolada', 4);
INSERT INTO tb_subcategory(name, category_id) VALUES ('Blend', 4);

-- -----------------------------------------------------
-- Creatina
-- -----------------------------------------------------
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('01', 'Creatina 150g - Max titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836245/creatine-150g_xdj1fu.webp', true, true, false, 50, 39.90, 1, NOW(), 3,1, 1);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('02', 'Creatina 300g - Max titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836245/creatine-150g_xdj1fu.webp', false, false, true, 50, 39.90, 1,NOW(), 3, 2, 1);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('01', 'Creatina 150g - Max titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836245/creatine-150g_xdj1fu.webp', true, true, false, 50, 39.90, 1, NOW(), 3,3, 1)
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('02', 'Creatina 300g - Max titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836245/creatine-150g_xdj1fu.webp', false, false, true, 50, 39.90, 1,NOW(), 3, 4, 1);
-- -----------------------------------------------------
-- Pré-treino
-- -----------------------------------------------------
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('04', 'Hórus 150g - Max titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836199/horus_frutas_vermelhas_150g_yya5j2.png', true, true, false, 50, 139.90, 2,NOW(),3, 1, 2);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('05', 'Hórus 300g - Max titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836199/horus_frutas_vermelhas_150g_yya5j2.png', false, true, false, 50, 139.90,2,NOW(), 3,2, 2);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('06', 'Pré Workout 150g - Max titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836200/%C3%A9gide_150g_tncpml.png', false, false, true, 50, 139.90, 2,NOW(), 3,3, 2);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('04', 'Hórus 150g - Max titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836199/horus_frutas_vermelhas_150g_yya5j2.png', true, true, false, 50, 139.90, 2,NOW(),3, 4, 2);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('05', 'Hórus 300g - Max titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836199/horus_frutas_vermelhas_150g_yya5j2.png', false, true, false, 50, 139.90,2,NOW(), 3,1, 2);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('06', 'Pré Workout 150g - Max titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836200/%C3%A9gide_150g_tncpml.png', false, false, true, 50, 139.90, 2,NOW(), 3,1, 2);
-- -----------------------------------------------------
-- Hipercalórico
-- -----------------------------------------------------
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('07', 'Mass Titanium 17500 Refil 1,4Kg - Max titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836245/mass_titanium_chocolate_1_4kg_ny9uhf.webp', true, true, false, 50, 239.90, 3,NOW(),3, 1, 3);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('08', 'Mass Titanium 17500 Pote 3Kg - Max titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836245/mass_titanium_chocolate_1_4kg_ny9uhf.webp', false, true, false, 50, 239.90, 3,NOW(),3, 2, 3);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('09', 'Mass Titanium 17500 Refil 1,4Kg - Max titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836245/mass_titanium_chocolate_1_4kg_ny9uhf.webp', false, false, true, 50, 239.90, 3,NOW(),3, 3, 3);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('07', 'Mass Titanium 17500 Refil 1,4Kg - Max titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836245/mass_titanium_chocolate_1_4kg_ny9uhf.webp', true, true, false, 50, 239.90, 3,NOW(),3, 4, 3);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('08', 'Mass Titanium 17500 Pote 3Kg - Max titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836245/mass_titanium_chocolate_1_4kg_ny9uhf.webp', false, true, false, 50, 239.90, 3,NOW(),3, 1, 3);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('09', 'Mass Titanium 17500 Refil 1,4Kg - Max titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836245/mass_titanium_chocolate_1_4kg_ny9uhf.webp', false, false, true, 50, 239.90, 3,NOW(),3, 1, 3);
-- -----------------------------------------------------
-- Proteína - Albumina
-- -----------------------------------------------------
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('10', 'Albumix Powder 500g Refil - Integral Medical', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836739/ALBUMIX_g4qmzf.png', true, true, false, 50, 339.90, 4,NOW(), 3,1, 4);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('11', 'Albumix Powder 500g Refil - Integral Medical', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836739/ALBUMIX_g4qmzf.png', false, true, false, 50, 339.90, 4,NOW(),3, 2, 4);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('12', 'Albumix Powder 500g Refil - Integral Medical', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836739/ALBUMIX_g4qmzf.png', false, false, true, 50, 339.90, 4, NOW(),3,3, 4);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('10', 'Albumix Powder 500g Refil - Integral Medical', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836739/ALBUMIX_g4qmzf.png', true, true, false, 50, 339.90, 4,NOW(), 3,4, 4);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('11', 'Albumix Powder 500g Refil - Integral Medical', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836739/ALBUMIX_g4qmzf.png', false, true, false, 50, 339.90, 4,NOW(),3, 1, 4);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('12', 'Albumix Powder 500g Refil - Integral Medical', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836739/ALBUMIX_g4qmzf.png', false, false, true, 50, 339.90, 4, NOW(),3,1, 4);
-- -----------------------------------------------------
-- Proteína - Concentrada
-- -----------------------------------------------------
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, subcategory_id, date_created, sales_count, details_id, price_range_id) VALUES ('13', 'Top whey 3w + performance pote 900g - Max Titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836245/top_whey_3w_perf_900g_pote_sabor_chocolate_m3b13d.png', true, true, false, 50, 439.90, 4,2, NOW(), 3, 1, 5);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, subcategory_id, date_created, sales_count, details_id, price_range_id) VALUES ('14', 'Top whey 3w + performance pote 900g - Max Titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836245/top_whey_3w_perf_900g_pote_sabor_chocolate_m3b13d.png', false, true, false, 50, 439.90, 4,2,NOW(),3, 2, 5);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, subcategory_id, date_created, sales_count, details_id, price_range_id) VALUES ('15', 'Top whey 3w + performance pote 900g - Max Titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836245/top_whey_3w_perf_900g_pote_sabor_chocolate_m3b13d.png', false, false, true, 50, 439.90, 4,2,NOW(),3, 3, 5);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, subcategory_id, date_created, sales_count, details_id, price_range_id) VALUES ('13', 'Top whey 3w + performance pote 900g - Max Titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836245/top_whey_3w_perf_900g_pote_sabor_chocolate_m3b13d.png', true, true, false, 50, 439.90, 4,2, NOW(), 3, 4, 5);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, subcategory_id, date_created, sales_count, details_id, price_range_id) VALUES ('14', 'Top whey 3w + performance pote 900g - Max Titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836245/top_whey_3w_perf_900g_pote_sabor_chocolate_m3b13d.png', false, true, false, 50, 439.90, 4,2,NOW(),3, 1, 5);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, subcategory_id, date_created, sales_count, details_id, price_range_id) VALUES ('15', 'Top whey 3w + performance pote 900g - Max Titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836245/top_whey_3w_perf_900g_pote_sabor_chocolate_m3b13d.png', false, false, true, 50, 439.90, 4,2,NOW(),3, 1, 5);
-- -----------------------------------------------------
-- Proteína - Isolada
-- -----------------------------------------------------
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('16', 'Suplemento 100% Whey 900g - Max titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836183/100_WHEY_REFIL_900G_SABOR_cookies_rtggkc.webp', false, true, false, 50, 39.90, 4, NOW(),3,1, 1);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('17', 'Suplemento 100% Whey 900g - Max titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836183/100_WHEY_REFIL_900G_SABOR_cookies_rtggkc.webp', true, true, false, 50, 39.90, 4, NOW(),3,2, 1);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('18', 'Suplemento 100% Whey 900g - Max titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836183/100_WHEY_REFIL_900G_SABOR_cookies_rtggkc.webp', false, false, true, 50, 39.90, 4,NOW(),3, 3, 1);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('16', 'Suplemento 100% Whey 900g - Max titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836183/100_WHEY_REFIL_900G_SABOR_cookies_rtggkc.webp', false, true, false, 50, 39.90, 4, NOW(),3,4, 1);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('17', 'Suplemento 100% Whey 900g - Max titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836183/100_WHEY_REFIL_900G_SABOR_cookies_rtggkc.webp', true, true, false, 50, 39.90, 4, NOW(),3,1, 1);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('18', 'Suplemento 100% Whey 900g - Max titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836183/100_WHEY_REFIL_900G_SABOR_cookies_rtggkc.webp', false, false, true, 50, 39.90, 4,NOW(),3, 1, 1);
-- -----------------------------------------------------
-- Proteína - Blend
-- -----------------------------------------------------
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('19', 'Whey Blend 900g - Max titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836245/whey_blend_chocolate_refil_900g_ctait7.webp', false, true, false, 50, 39.90, 4,NOW(),3, 1, 1);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('20', 'Whey Blend 900g - Max titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836245/whey_blend_chocolate_refil_900g_ctait7.webp', true, true, false, 50, 39.90, 4,NOW(),3, 2, 1);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('21', 'Whey Blend 900g - Max titaniumm', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836245/whey_blend_chocolate_refil_900g_ctait7.webp', false, false, true, 50, 39.90, 4,NOW(),3, 3, 1);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('19', 'Whey Blend 900g - Max titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836245/whey_blend_chocolate_refil_900g_ctait7.webp', false, true, false, 50, 39.90, 4,NOW(),3, 4, 1);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('20', 'Whey Blend 900g - Max titanium', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836245/whey_blend_chocolate_refil_900g_ctait7.webp', true, true, false, 50, 39.90, 4,NOW(),3, 1, 1);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('21', 'Whey Blend 900g - Max titaniumm', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836245/whey_blend_chocolate_refil_900g_ctait7.webp', false, false, true, 50, 39.90, 4,NOW(),3, 1, 1);
-- -----------------------------------------------------
-- Acessórios
-- -----------------------------------------------------
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('22', 'STRAP GRIP EM COURO', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836245/whey_blend_chocolate_refil_900g_ctait7.webp', true, true, false, 50, 39.90, 5,NOW(), 3, 1, 1);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('23', 'Garrafa Squeeze 600ml', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836183/100_WHEY_REFIL_900G_SABOR_cookies_rtggkc.webp', false, true, false, 50, 39.90, 5,NOW(), 3, 2, 1);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('24', 'Garrafa Squeeze 600ml', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836245/top_whey_3w_perf_900g_pote_sabor_chocolate_m3b13d.png', false, false, true, 50, 39.90, 5, NOW(), 3,3, 1);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('22', 'STRAP GRIP EM COURO', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836245/whey_blend_chocolate_refil_900g_ctait7.webp', true, true, false, 50, 39.90, 5,NOW(), 3, 4, 1);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('23', 'Garrafa Squeeze 600ml', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836183/100_WHEY_REFIL_900G_SABOR_cookies_rtggkc.webp', false, true, false, 50, 39.90, 5,NOW(), 3, 1, 1);
INSERT INTO tb_product (sku, name, description, image, favorite, feature, sale, units_in_stock, unit_price, category_id, date_created, sales_count, details_id, price_range_id) VALUES ('24', 'Garrafa Squeeze 600ml', 'Descrição...', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1688836245/top_whey_3w_perf_900g_pote_sabor_chocolate_m3b13d.png', false, false, true, 50, 39.90, 5, NOW(), 3,1, 1);
-- -----------------------------------------------------
-- Reviews
-- -----------------------------------------------------
INSERT INTO tb_review (comment, rating, product_id, user_id) VALUES ('O Whey Protein da Max é uma delícia!.', 3, 1, 1);
INSERT INTO tb_review (comment, rating, product_id, user_id) VALUES ('Gostei e recomendo!', 4, 1, 2);
INSERT INTO tb_review (comment, rating, product_id, user_id) VALUES ('Realmente muito saboroso.', 5, 3, 1);
INSERT INTO tb_review (comment, rating, product_id, user_id) VALUES ('O Whey Protein da Max é uma delícia!.', 3, 1, 1);
INSERT INTO tb_review (comment, rating, product_id, user_id) VALUES ('Gostei e recomendo!', 4, 1, 2);
INSERT INTO tb_review (comment, rating, product_id, user_id) VALUES ('Realmente muito saboroso.', 5, 3, 1);
-- -----------------------------------------------------
-- Discounts
-- -----------------------------------------------------
INSERT INTO tb_discount (code, discount_value, expiration_date, product_id) VALUES ('DESCONTO20', 0.2,'2024-07-25T13:00:00', 1);
INSERT INTO tb_discount (code, discount_value, expiration_date, product_id) VALUES ('DESCONTO30', 0.3,'2024-07-25T13:00:00', 2);
INSERT INTO tb_discount (code, discount_value, expiration_date, product_id) VALUES ('DESCONTO40', 0.4,'2024-07-25T13:00:00', 3);

-- -----------------------------------------------------
-- Orders
-- -----------------------------------------------------
INSERT INTO tb_order (moment, status, client_id) VALUES (TIMESTAMP WITH TIME ZONE '2022-07-25T13:00:00Z', 1, 1);
INSERT INTO tb_order (moment, status, client_id) VALUES (TIMESTAMP WITH TIME ZONE '2022-07-29T15:50:00Z', 3, 2);
INSERT INTO tb_order (moment, status, client_id) VALUES (TIMESTAMP WITH TIME ZONE '2022-08-03T14:20:00Z', 0, 1);

INSERT INTO tb_order_item (order_id, product_id, quantity, price) VALUES (1, 1, 2, 90.5);
INSERT INTO tb_order_item (order_id, product_id, quantity, price) VALUES (1, 3, 1, 1250.0);
INSERT INTO tb_order_item (order_id, product_id, quantity, price) VALUES (2, 3, 1, 1250.0);
INSERT INTO tb_order_item (order_id, product_id, quantity, price) VALUES (3, 1, 1, 90.5);

INSERT INTO tb_payment (order_id, moment) VALUES (1, TIMESTAMP WITH TIME ZONE '2022-07-25T15:00:00Z');
INSERT INTO tb_payment (order_id, moment) VALUES (2, TIMESTAMP WITH TIME ZONE '2022-07-30T11:00:00Z');