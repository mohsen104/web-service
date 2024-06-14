
# Web-Service

A simple and attractive example of node js, express js and mongoose


## Getting Started

First, run the development server:

```bash
npm run dev
```
Open [http://localhost:3000/api/user](http://localhost:3000/api/user) with your browser to see the result.
## API Reference

#### Get all users

```http
  GET /api/user
```

#### Get one user

```http
  GET /api/user/:username
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. username of user to fetch |

#### Post one user

```http
  POST /api/user/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. username of user to fetch |
| `email`      | `string` | **Required**. Email must be unique |
| `password`      | `string` | **Required** *minlength:6* |


#### Put one user

```http
  PUT /api/user/
```

**for edit email or password**

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. username of user to fetch |
| `email`      | `string` | **Required**. Email must be unique |
| `password`      | `string` | **Required** *minlength:6* |

#### Delete one user

```http
  DELETE /api/user/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `identifier`      | `string` | **Required**. username or email . |
| `password`      | `string` | **Required** *minlength:6* |
