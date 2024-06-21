const express = require("express");
const router = express.Router();
// const ProductsController = new (require("../controllers/productsController"))();
const OrdersController = new (require("../controllers/OrdersController"))();

// router.get("/products/:id(\\d+)", ProductsController.getProducts);
// router.post("/products", ProductsController.postProducts);
// router.patch("/products/:id(\\d+)", ProductsController.patchProducts);
// router.delete("/products/:id(\\d+)", ProductsController.deleteProducts);

router.get("/:id(\\d+)", OrdersController.getOrders);
router.post("/", OrdersController.postOrders);
router.patch("/:id(\\d+)", OrdersController.patchOrders);
router.delete("/:id(\\d+)", OrdersController.deleteOrders);

module.exports = router;

//!Схема
/**
 * @swagger
 * components:
 *  schemas:
 *      Order:
 *          type: object
 *          required:
 *              - user_id
 *              - status
 *              - sum
 *          properties:
 *              id:
 *                  type: number
 *                  primaryKey: true
 *                  autoIncrement: true
 *                  description: Автогенерируемое ID
 *              user_id:
 *                  type: number
 *                  description: ID пользователя
 *              status:
 *                  type: string
 *                  description: Статус заказа
 *              sum:
 *                  type: number
 *                  description: Сумма заказа
 */

//!Получить заказ по ID + БАЗОВОЕ ОПИСАНИЕ
/**
 * @swagger
 * tags:
 *  name: Orders
 *  description: Базавое API для модели заказов
 * /orders/{id}:
 *  get:
 *      summary: Получение заказ по ID
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          schema:
 *              type: integer
 *              format: int64
 *              minimum: 1
 *          description: Уникальный идентификатор заказ.
 *      tags: [Orders]
 *      responses:
 *          200:
 *              description: Удачное получение
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/Order"
 *          404:
 *              description: Не найден
 */

//!Создать заказ
/**
 * @swagger
 * tags:
 *  name: Orders
 *  description: Базавое API для модели заказов
 * /orders:
 *  post:
 *      summary: Создать новый заказ
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          user_id:
 *                              type: number
 *                          status:
 *                              type: string
 *                          sum:
 *                              type: number
 *      tags: [Orders]
 *      responses:
 *          201:
 *              description: Удачное создание
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/Order"
 *          400:
 *              description: Некоректный запрос
 */

//!Обновить заказ
/**
 * @swagger
 * tags:
 *  name: Orders
 *  description: Базавое API для модели заказов
 * /orders/{id}:
 *  put:
 *      summary: Обновить заказ
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          schema:
 *              type: integer
 *              format: int64
 *              minimum: 1
 *          description: Уникальный идентификатор заказа.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          user_id:
 *                              type: number
 *                          status:
 *                              type: string
 *                          sum:
 *                              type: number
 *      tags: [Orders]
 *      responses:
 *          201:
 *              description: Пользователь обновлен
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/Order"
 *          404:
 *              description: Заказ не найден
 */

//!Удалить заказ
/**
 * @swagger
 * tags:
 *  name: Orders
 *  description: Базавое API для модели заказов
 * /orders/{id}:
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
 *          description: Уникальный идентификатор заказа.
 *      tags: [Orders]
 *      responses:
 *          204:
 *              description: Заказ удален
 *          404:
 *              description: Заказ не найден
 */
