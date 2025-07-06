
## 📝 README.md for Your CRUD API Project

```md
# 🚀 Simple User CRUD API with Express.js

This is a beginner-friendly Node.js project that demonstrates how to perform full CRUD (Create, Read, Update, Delete) operations using **Express.js** and **Postman**. It stores user data in a local mock JSON file (`MOCK_DATA.js`) and dynamically updates it using Node's file system.

---

## 📦 Features

- ✅ `GET /api/users` — Fetch all users  
- ✅ `GET /api/users/:id` — Fetch a specific user by ID  
- ✅ `POST /api/users` — Create a new user  
- ✅ `PATCH /api/users/:id` — Update an existing user  
- ✅ `DELETE /api/users/:id` — Delete a user  

All API endpoints can be tested using **Postman**.

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **JavaScript Modules**
- **File System (`fs`)** for persistent storage
- **Postman** for API testing

---

## 📁 File Structure

```

.
├── index.js             # Main server file
├── MOCK\_DATA.js         # Array of user objects (export default \[...])
├── package.json         # Dependencies and script info

````

---

## 📦 Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/express-crud-api.git
   cd express-crud-api
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the server**

   ```bash
   npm start
   ```

4. The server runs at:

   ```
   http://localhost:3000
   ```

---

## 🧪 How to Test with Postman

### 📍 1. Get All Users

* **Method:** `GET`
* **URL:** `http://localhost:3000/api/users`
* **Response:** JSON array of all users

---

### 🔍 2. Get a User by ID

* **Method:** `GET`
* **URL:** `http://localhost:3000/api/users/1`
* **Response:** JSON of that specific user

---

### ➕ 3. Create a User

* **Method:** `POST`
* **URL:** `http://localhost:3000/api/users`
* **Body:** (raw JSON)

```json
{
  "first_name": "Yasra",
  "last_name": "Khan",
  "email": "yasra@example.com"
}
```

* **Response:** Newly created user with an auto-incremented `id`

---

### ♻️ 4. Update a User

* **Method:** `PATCH`
* **URL:** `http://localhost:3000/api/users/1`
* **Body:** (raw JSON)

```json
{
  "email": "yasra.updated@example.com"
}
```

* **Response:** Updated user data

---

### ❌ 5. Delete a User

* **Method:** `DELETE`
* **URL:** `http://localhost:3000/api/users/1`
* **Response:** Confirmation + deleted user info

---

## ✨ Bonus: HTML View (Optional)

* Visit `http://localhost:3000/users` to see a simple HTML list of users rendered on the browser.

---

## 🧠 Learning Outcomes

* How to set up and use Express routes
* How to read and write to files using Node’s `fs` module
* How to test backend APIs using Postman
* How CRUD works at the API level

---

## ✅ Todo (Optional Improvements)

* Add validation for required fields
* Use UUIDs instead of numeric IDs
* Move to a `.json` file instead of `.js`
* Connect to a real database (e.g. MongoDB)

---

## 👩‍💻 Author

**Yasra Khan**

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

````

---

## 🧩 Add This to Your `package.json` (if not already):

```json
"scripts": {
  "start": "node index.js"
}
````

---

