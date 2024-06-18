var express = require("express");
var router = express.Router();

const userController = new (require("../controllers/UserController"))();

router.get("/", userController.getAll);
router.get("/:id", userController.getOne);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;

//!Схема
/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          required:
 *              - first_name
 *              - last_name
 *              - email   
 *              - password
 *          properties:
 *              id:
 *                  type: number
 *                  primaryKey: true
 *                  autoIncrement: true
 *                  description: Автогенерируемое ID
 *              first_name:
 *                  type: string
 *                  description: Имя пользователя
 *              last_name:
 *                  type: string
 *                  description: Фамилия пользователя
 *              email:
 *                  type: string
 *                  unique: true
 *                  description: Email пользователя
 *              password:
 *                  type: string
 *                  description: Пароль пользователя (в хеше)
*/

//!Все пользователи + БАЗОВОЕ ОПИСАНИЕ
/**
 * @swagger
 * tags:
 *  name: Users
 *  description: Базавое API для модели пользователей
 * /users:
 *  get:
 *      summary: Получениe списка всех пользователей
 *      tags: [Users]
 *      responses:
 *          200:
 *              description: Удачное получение
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
 *                                      $ref: "#/components/schemas/User"
 *          400:
 *              description: Что-то пошло не так
*/

//!Пользователь по ID
/**
 * @swagger
 * tags:
 *  name: Users
 * /users/{id}:
 *  get:
 *      summary: Получить пользователя по ID
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          schema:
 *              type: integer
 *              format: int64
 *              minimum: 1
 *          description: Уникальный идентификатор пользователя.
 *      tags: [Users]
 *      responses:
 *          200:
 *              description: Удачное получение
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              status:
 *                                  type: number
 *                              data:
 *                                  $ref: "#/components/schemas/User"
 *          404:
 *              description: Пользователь не найден
*/

//!Создать пользователя
/**
 * @swagger
 * tags:
 *  name: Users
 * /users:
 *  post:
 *      summary: Создать пользователя
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          first_name:
 *                              type: string
 *                          last_name:
 *                              type: string
 *                          email:
 *                              type: string
 *                          password:
 *                              type: string
 *      tags: [Users]
 *      responses:
 *          201:
 *              description: Пользователь создан
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              status:
 *                                  type: number
 *                              data:
 *                                  $ref: '#/components/schemas/User'
 *          400:
 *              description: Неправильный запрос
*/

//!Обновить пользователя
/**
 * @swagger
 * tags:
 *  name: Users
 * /users/{id}:
 *  put:
 *      summary: Обновить пользователя
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          schema:
 *              type: integer
 *              format: int64
 *              minimum: 1
 *          description: Уникальный идентификатор пользователя.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          first_name:
 *                              type: string
 *                          last_name:
 *                              type: string
 *                          email:
 *                              type: string
 *                          password:
 *                              type: string
 *      tags: [Users]
 *      responses:
 *          201:
 *              description: Пользователь обновлен
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              status:
 *                                  type: number
 *                              data:
 *                                  type: String
 *          400:
 *              description: Неправильный запрос
*/

//!Удалить пользователя
/**
 * @swagger
 * tags:
 *  name: Users
 * /users/{id}:
 *  delete:
 *      summary: Удалить пользователя
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          schema:
 *              type: integer
 *              format: int64
 *              minimum: 1
 *          description: Уникальный идентификатор пользователя.
 *      tags: [Users]
 *      responses:
 *          201:
 *              description: Пользователь удален
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              status:
 *                                  type: number
 *                              data:
 *                                  type: String
 *          404:
 *              description: Пользователь не найден
*/