# Task Management API

A RESTful Task Management API built with Node.js, Express.js, MongoDB, Mongoose, JWT Authentication, and Swagger/OpenAPI.

## Features

* User registration
* User login with JWT authentication
* Password hashing with bcrypt
* Protected API routes
* Create, read, update, and delete tasks
* Task validation
* MongoDB database with Mongoose
* Centralized error handling
* Swagger/OpenAPI documentation
* Postman collection for API testing

## Technologies

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* bcryptjs
* Swagger / OpenAPI
* Postman

## Project Structure

```text
src/
├── config/
│   ├── db.js
│   └── swagger.js
├── controllers/
│   ├── auth.controller.js
│   └── task.controller.js
├── middleware/
│   ├── auth.middleware.js
│   ├── error.middleware.js
│   └── task.validation.js
├── models/
│   ├── user.model.js
│   └── task.model.js
├── routes/
│   ├── auth.route.js
│   └── task.route.js
└── server.js
```

## Installation

Clone the repository:

```bash
git clone https://github.com/mtrkali/task-api
cd task-api
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

Do not commit the `.env` file to GitHub.

## Run the Project

Development mode:

```bash
npm run dev
```

The API will run on:

```text
http://localhost:5000
```

## API Documentation

Swagger documentation:

```text
http://localhost:5000/api-docs
```

## Authentication

### Register

```http
POST /api/auth/register
```

Request body:

```json
{
    "name": "Tarak",
    "email": "user@example.com",
    "password": "123456"
}
```

### Login

```http
POST /api/auth/login
```

Request body:

```json
{
    "email": "user@example.com",
    "password": "123456"
}
```

The login response provides a JWT token.

For protected routes, send:

```text
Authorization: Bearer <your-jwt-token>
```

## Task API

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| POST   | `/api/tasks`     | Create a task     |
| GET    | `/api/tasks`     | Get all tasks     |
| GET    | `/api/tasks/:id` | Get a single task |
| PATCH  | `/api/tasks/:id` | Update a task     |
| DELETE | `/api/tasks/:id` | Delete a task     |

All task endpoints require JWT authentication.

## Task Request Example

```json
{
    "title": "Learn REST API",
    "description": "Build a task management API",
    "status": "pending"
}
```

Allowed status values:

```text
pending
in-progress
completed
```

## Error Handling

The API uses appropriate HTTP status codes, including:

* `200` — Successful request
* `201` — Resource created
* `400` — Bad request
* `401` — Unauthorized
* `404` — Resource not found
* `409` — Conflict
* `500` — Internal server error

## Postman Collection

A Postman collection is included in the project:

```text
task-management-api.postman_collection.json
```

Import this file into Postman to test the API.

## Author

Tarak

GitHub: https://github.com/mtrkali
