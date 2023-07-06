-- -------------------------------------------
-- Usuários e perfis
-- -------------------------------------------
INSERT INTO tb_user (first_name, last_name, cpf, birth_day, phone, email, password) VALUES ('Alex', 'Brown', '12345678', TIMESTAMP WITH TIME ZONE '2022-07-25T13:00:00Z', '31971734658', 'alex@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (first_name, last_name, cpf, birth_day, phone, email, password) VALUES ('Maria', 'Green', '87654321', TIMESTAMP WITH TIME ZONE '2022-07-25T13:00:00Z', '31978455484', 'maria@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_OPERATOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

-- -----------------------------------------------------
-- Endereços
-- -----------------------------------------------------
INSERT INTO tb_address(cep, logradouro,complemento, bairro, localidade, uf, user_id) VALUES ('34001090','Rua Levy Firmino Alves', 'casa A', 'Parque Santo Antônio', 'Nova Lima', 'MG', 1);
INSERT INTO tb_address(cep, logradouro,complemento, bairro, localidade, uf, user_id) VALUES ('34012856','Rua Seis', 'casa B', 'Santa Rita', 'Nova Lima', 'MG', 2);

INSERT INTO tb_product_details(flavor, wheight, brand, gluten, lactose, vegan) VALUES ('chocolate', 20.00, 'Max', true, true, false);
INSERT INTO tb_product_details(flavor, wheight, brand, gluten, lactose, vegan) VALUES ('chocolate', 20.00, 'Max', true, true, false);

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
INSERT INTO tb_product (sku, name, description, image, favorite, units_in_stock, unit_price, category_id, date_created, sales_count, details_id) VALUES ('01', 'Creatina 150g - Max titanium', 'Creatina', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1681736110/body_1_yfdrjb.jpg', true, 50, 39.90, 1, NOW(), 3,1);
INSERT INTO tb_product (sku, name, description, image, favorite, units_in_stock, unit_price, category_id, date_created, sales_count, details_id) VALUES ('02', 'Creatina 300g - Max titanium', 'Creatina', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1681736110/body_1_yfdrjb.jpg', false, 50, 39.90, 1,NOW(), 3, 1);

-- -----------------------------------------------------
-- Pré-treino
-- -----------------------------------------------------
INSERT INTO tb_product (sku, name, description, image, favorite, units_in_stock, unit_price, category_id, date_created, sales_count, details_id) VALUES ('04', 'Creatina 150g - Max titanium', 'Creatina', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1681736110/body_1_yfdrjb.jpg', true, 50, 39.90, 2,NOW(),3, 1);
INSERT INTO tb_product (sku, name, description, image, favorite, units_in_stock, unit_price, category_id, date_created, sales_count, details_id) VALUES ('05', 'Creatina 150g - Max titanium', 'Creatina', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1681736110/body_1_yfdrjb.jpg', false, 50, 39.90,2,NOW(), 3,1);
INSERT INTO tb_product (sku, name, description, image, favorite, units_in_stock, unit_price, category_id, date_created, sales_count, details_id) VALUES ('06', 'Creatina 150g - Max titanium', 'Creatina', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1681736110/body_1_yfdrjb.jpg', false, 50, 39.90, 2,NOW(), 3,1);

-- -----------------------------------------------------
-- Hipercalórico
-- -----------------------------------------------------
INSERT INTO tb_product (sku, name, description, image, favorite, units_in_stock, unit_price, category_id, date_created, sales_count, details_id) VALUES ('07', 'Creatina 150g - Max titanium', 'Creatina', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1681736110/body_1_yfdrjb.jpg', true, 50, 39.90, 3,NOW(),3, 1);
INSERT INTO tb_product (sku, name, description, image, favorite, units_in_stock, unit_price, category_id, date_created, sales_count, details_id) VALUES ('08', 'Creatina 150g - Max titanium', 'Creatina', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1681736110/body_1_yfdrjb.jpg', false, 50, 39.90, 3,NOW(),3, 1);
INSERT INTO tb_product (sku, name, description, image, favorite, units_in_stock, unit_price, category_id, date_created, sales_count, details_id) VALUES ('09', 'Creatina 150g - Max titanium', 'Creatina', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1681736110/body_1_yfdrjb.jpg', false, 50, 39.90, 3,NOW(),3, 1);

-- -----------------------------------------------------
-- Proteína - Albumina
-- -----------------------------------------------------
INSERT INTO tb_product (sku, name, description, image, favorite, units_in_stock, unit_price, category_id, date_created, sales_count, details_id) VALUES ('10', 'Creatina 150g - Max titanium', 'Creatina', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1681736110/body_1_yfdrjb.jpg', true, 50, 39.90, 4,NOW(), 3,1);
INSERT INTO tb_product (sku, name, description, image, favorite, units_in_stock, unit_price, category_id, date_created, sales_count, details_id) VALUES ('11', 'Creatina 150g - Max titanium', 'Creatina', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1681736110/body_1_yfdrjb.jpg', false, 50, 39.90, 4,NOW(),3, 1);
INSERT INTO tb_product (sku, name, description, image, favorite, units_in_stock, unit_price, category_id, date_created, sales_count, details_id) VALUES ('12', 'Creatina 150g - Max titanium', 'Creatina', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1681736110/body_1_yfdrjb.jpg', false, 50, 39.90, 4, NOW(),3,1);

-- -----------------------------------------------------
-- Proteína - Concentrada
-- -----------------------------------------------------
INSERT INTO tb_product (sku, name, description, image, favorite, units_in_stock, unit_price, category_id, subcategory_id, date_created, sales_count, details_id) VALUES ('13', 'Creatina 150g - Max titanium', 'Creatina', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1681736110/body_1_yfdrjb.jpg', true, 50, 39.90, 4,2, NOW(), 3, 1);
INSERT INTO tb_product (sku, name, description, image, favorite, units_in_stock, unit_price, category_id, subcategory_id, date_created, sales_count, details_id) VALUES ('14', 'Creatina 150g - Max titanium', 'Creatina', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1681736110/body_1_yfdrjb.jpg', false, 50, 39.90, 4,2,NOW(),3, 1);
INSERT INTO tb_product (sku, name, description, image, favorite, units_in_stock, unit_price, category_id, subcategory_id, date_created, sales_count, details_id) VALUES ('15', 'Creatina 150g - Max titanium', 'Creatina', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1681736110/body_1_yfdrjb.jpg', false, 50, 39.90, 4,2,NOW(),3, 1);

-- -----------------------------------------------------
-- Proteína - Isolada
-- -----------------------------------------------------
INSERT INTO tb_product (sku, name, description, image, favorite, units_in_stock, unit_price, category_id, date_created, sales_count, details_id) VALUES ('16', 'Creatina 150g - Max titanium', 'Creatina', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1681736110/body_1_yfdrjb.jpg', false, 50, 39.90, 4, NOW(),3,1);
INSERT INTO tb_product (sku, name, description, image, favorite, units_in_stock, unit_price, category_id, date_created, sales_count, details_id) VALUES ('17', 'Creatina 150g - Max titanium', 'Creatina', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1681736110/body_1_yfdrjb.jpg', true, 50, 39.90, 4, NOW(),3,1);
INSERT INTO tb_product (sku, name, description, image, favorite, units_in_stock, unit_price, category_id, date_created, sales_count, details_id) VALUES ('18', 'Creatina 150g - Max titanium', 'Creatina', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1681736110/body_1_yfdrjb.jpg', false, 50, 39.90, 4,NOW(),3, 1);

-- -----------------------------------------------------
-- Proteína - Blend
-- -----------------------------------------------------
INSERT INTO tb_product (sku, name, description, image, favorite, units_in_stock, unit_price, category_id, date_created, sales_count, details_id) VALUES ('19', 'Creatina 150g - Max titanium', 'Creatina', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1681736110/body_1_yfdrjb.jpg', false, 50, 39.90, 4,NOW(),3, 1);
INSERT INTO tb_product (sku, name, description, image, favorite, units_in_stock, unit_price, category_id, date_created, sales_count, details_id) VALUES ('20', 'Creatina 150g - Max titanium', 'Creatina', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1681736110/body_1_yfdrjb.jpg', true, 50, 39.90, 4,NOW(),3, 1);
INSERT INTO tb_product (sku, name, description, image, favorite, units_in_stock, unit_price, category_id, date_created, sales_count, details_id) VALUES ('21', 'Creatina 150g - Max titanium', 'Creatina', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1681736110/body_1_yfdrjb.jpg', false, 50, 39.90, 4,NOW(),3, 1);

-- -----------------------------------------------------
-- Acessórios
-- -----------------------------------------------------
INSERT INTO tb_product (sku, name, description, image, favorite, units_in_stock, unit_price, category_id, date_created, sales_count, details_id) VALUES ('22', 'Creatina 150g - Max titanium', 'Creatina', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1681736110/body_1_yfdrjb.jpg', true, 50, 39.90, 5,NOW(), 3, 1);
INSERT INTO tb_product (sku, name, description, image, favorite, units_in_stock, unit_price, category_id, date_created, sales_count, details_id) VALUES ('23', 'Creatina 150g - Max titanium', 'Creatina', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1681736110/body_1_yfdrjb.jpg', false, 50, 39.90, 5,NOW(), 3, 1);
INSERT INTO tb_product (sku, name, description, image, favorite, units_in_stock, unit_price, category_id, date_created, sales_count, details_id) VALUES ('24', 'Creatina 150g - Max titanium', 'Creatina', 'https://res.cloudinary.com/dsn6s7rnw/image/upload/v1681736110/body_1_yfdrjb.jpg', false, 50, 39.90, 5, NOW(), 3,1);

-- -----------------------------------------------------
-- Reviews
-- -----------------------------------------------------
--INSERT INTO tb_review (comment, rating, product_id, user_id) VALUES ('Adorei o conjuntinho de bebê.', 3, 1, 1);
--INSERT INTO tb_review (comment, rating, product_id, user_id) VALUES ('Gostei e recomendo!', 4, 1, 2);
--INSERT INTO tb_review (comment, rating, product_id, user_id) VALUES ('Que linda roupa!!!', 5, 3, 1);
-- -----------------------------------------------------
-- Discounts
-- -----------------------------------------------------
INSERT INTO tb_discount (code, discount_value, expiration_date, product_id) VALUES ('DESCONTO20', 0.2,'2024-07-25T13:00:00', 1);
INSERT INTO tb_discount (code, discount_value, expiration_date, product_id) VALUES ('DESCONTO30', 0.3,'2024-07-25T13:00:00', 2);
INSERT INTO tb_discount (code, discount_value, expiration_date, product_id) VALUES ('DESCONTO40', 0.4,'2024-07-25T13:00:00', 3);