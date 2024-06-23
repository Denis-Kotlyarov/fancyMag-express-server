var express = require("express");
var router = express.Router();

const storeController = new (require("../controllers/StoreController"))();

router.get("/myOrders", storeController.getMyOrders);
router.get("/myFav", storeController.getMyFav); //!NOT WORK
router.post("/createOrder", storeController.createOrder);
router.post("/fav", storeController.addToFav);
router.post("/basket", storeController.addToBasket);
router.delete("/fav", storeController.deleteFromFav);
router.delete("/basket", storeController.deleteFromBasket);
router.post("/refusal", storeController.refusalOrder);

module.exports = router;

//!Схема
/**
 * @swagger
 * components:
 *  schemas:
 *     Order:
 *          type: object
 *          required:
 *              - status
 *              - sum
 *              - user_id
 *          properties:
 *              id:
 *                  type: number
 *                  primaryKey: true
 *                  autoIncrement: true
 *                  description: Автогенерируемое ID
 *              status:
 *                  type: string
 *                  description: Статус заказа
 *              sum:
 *                  type: number
 *                  description: Сумма заказа
 *              user_id:
 *                  type: number
 *                  description: ID пользователя
 *              updated_at:
 *                  type: string
 *                  format: date-time
 *                  description: Дата создания
 *              created_at:
 *                  type: string
 *                  format: date-time
 *                  description: Дата обновления
 */

//!Добавить в корзину или избранное
/**
 * @swagger
 * tags:
 *  name: Store
 *  description: Базавое API для функционала магазина
 * /store/fav:
 *  post:
 *      summary: Добавление товара в избранное (для примера, с корзиной тоже самое)
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          user_id:
 *                              type: number
 *                          product_id:
 *                              type: number
 *      tags: [Store]
 *      responses:
 *          201:
 *              description: Удачное добаление
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              status:
 *                                  type: number
 *                              data:
 *                                  type: string
 *                                  example: "Товар добавлен"
 *          400:
 *              description: Что-то пошло не так
 */

//!Удалить из корзины или избранного
/**
 * @swagger
 * tags:
 *  name: Store
 *  description: Базавое API для функционала магазина
 * /store/fav:
 *  delete:
 *      summary: Удаление товара из избранного (для примера, с корзиной тоже самое)
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          user_id:
 *                              type: number
 *                          product_id:
 *                              type: number
 *      tags: [Store]
 *      responses:
 *          204:
 *              description: Удачное удаление
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              status:
 *                                  type: number
 *                              data:
 *                                  type: string
 *                                  example: "Товар удален"
 *          404:
 *              description: Что-то пошло не так
 */

//!Создать заказ
/**
 * @swagger
 * tags:
 *  name: Store
 *  description: Базавое API для функционала магазина
 * /store/createOrder:
 *  delete:
 *      summary: Создание заказа
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          status:
 *                              type: string
 *                          sum:
 *                              type: number
 *      tags: [Store]
 *      responses:
 *          201:
 *              description: Удачное создание
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              status:
 *                                  type: number
 *                              data:
 *                                  $ref: "#/components/schemas/Order"
 *          400:
 *              description: Что-то пошло не так
 */

//!Отказаться от заказ
/**
 * @swagger
 * tags:
 *  name: Store
 *  description: Базавое API для функционала магазина
 * /store/refusal:
 *  post:
 *      summary: Создание заказа
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          order_id:
 *                              type: number
 *      tags: [Store]
 *      responses:
 *          201:
 *              description: Удачное добаление
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              status:
 *                                  type: number
 *                              data:
 *                                  $ref: "#/components/schemas/Order"
 *          404:
 *              description: Что-то пошло не так
 */

//!Получить свои заказы
/**
 * @swagger
 * tags:
 *  name: Store
 *  description: Базавое API для функционала магазина
 * /store/myOrders:
 *  get:
 *      summary: Получить свои заказы
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          order_id:
 *                              type: number
 *      tags: [Store]
 *      responses:
 *          200:
 *              description: Удачное добаление
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              status:
 *                                  type: number
 *                              data:
 *                                  type: array
 *                                  items:
 *                                      $ref: "#/components/schemas/Order"
 *          400:
 *              description: Что-то пошло не так
 */
