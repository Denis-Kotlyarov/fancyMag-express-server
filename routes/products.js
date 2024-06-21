const express = require("express");
const router = express.Router();
//подключение валидатора
const validator = require ("../middleware/validator")

const ProductsController = new (require("../controllers/productsController"))();

router.get("/:id(\\d+)", ProductsController.getProducts);
router.post("/", validator.products, ProductsController.postProducts);
router.patch("/:id(\\d+)", validator.products, ProductsController.patchProducts);
router.delete("/:id(\\d+)", ProductsController.deleteProducts);

module.exports = router;

//!Схема
/**
 * @swagger
 * components:
 *  schemas:
 *     Product:
 *          type: object
 *          required:
 *              - name
 *              - status
 *              - description
 *              - price
 *              - popularity
 *              - seller
 *              - type
 *              - is_fav
 *              - img_url
 *          properties:
 *              id:
 *                  type: number
 *                  primaryKey: true
 *                  autoIncrement: true
 *                  description: Автогенерируемое ID
 *              name:
 *                  type: string
 *                  description: Наименование товара
 *              description:
 *                  type: string
 *                  description: Описание
 *              price:
 *                  type: number
 *                  description: Цена
 *              popularity:
 *                  type: number
 *                  description: Популярность у масс
 *              seller:
 *                  type: string
 *                  description: Продавец
 *              type:
 *                  type: string
 *                  description: Тип товара
 *              is_fav:
 *                  type: boolean
 *                  description: Переключатель изб.
 *              img_url:
 *                  type: string
 *                  description: Ссылка на фото товара
 */

//!Получить товар по ID + БАЗОВОЕ ОПИСАНИЕ
/**
 * @swagger
 * tags:
 *  name: Products
 *  description: Базавое API для модели товаров
 * /products/{id}:
 *  get:
 *      summary: Получение товара по ID
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          schema:
 *              type: integer
 *              format: int64
 *              minimum: 1
 *          description: Уникальный идентификатор товара.
 *      tags: [Products]
 *      responses:
 *          200:
 *              description: Удачное получение
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/Product"
 *          404:
 *              description: Не найден
 */

//!Создать товар
/**
 * @swagger
 * tags:
 *  name: Products
 *  description: Базавое API для модели товаров
 * /products:
 *  post:
 *      summary: Создать новый товар
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          description:
 *                              type: string
 *                          price:
 *                              type: number
 *                          seller:
 *                              type: string
 *                          type:
 *                              type: string
 *                          img_url:
 *                              type: string
 *      tags: [Products]
 *      responses:
 *          201:
 *              description: Удачное создание
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/Product"
 *          400:
 *              description: Некоректный запрос
 */

//!Обновить заказ
/**
 * @swagger
 * tags:
 *  name: Products
 *  description: Базавое API для модели товаров
 * /products/{id}:
 *  put:
 *      summary: Обновить товар
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          schema:
 *              type: integer
 *              format: int64
 *              minimum: 1
 *          description: Уникальный идентификатор товара.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          description:
 *                              type: string
 *                          price:
 *                              type: number
 *                          seller:
 *                              type: string
 *                          type:
 *                              type: string
 *                          img_url:
 *                              type: string
 *      tags: [Products]
 *      responses:
 *          201:
 *              description: Товар обновлен
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/Product"
 *          404:
 *              description: Товар не найден
 */

//!Удалить заказ
/**
 * @swagger
 * tags:
 *  name: Products
 *  description: Базавое API для модели товаров
 * /products/{id}:
 *  delete:
 *      summary: Удалить заказ
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          schema:
 *              type: integer
 *              format: int64
 *              minimum: 1
 *          description: Уникальный идентификатор товара.
 *      tags: [Products]
 *      responses:
 *          204:
 *              description: Товар удален
 *          404:
 *              description: Товар не найден
 */
