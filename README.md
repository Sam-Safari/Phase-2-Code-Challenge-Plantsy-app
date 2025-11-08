# 🌿 Phase 2 Code Challenge: Plantsy 

## Demo

This is the **Phase 2 Code Challenge (Plantsy)** app

The goal is to create an admin dashboard for managing plants using **React** and a **JSON Server** backend.

---

## 🚀 Setup Instructions

1. Install dependencies:
   ```bash

   npm install

Start the backend (port 6001):

npm run server

In another terminal, start the frontend:

npm start

Visit:

[http://localhost:3000]

Backend runs on:

(http://localhost:6001/plants)

## 🌱 Core Features

- View all plants when the app starts
- Add a new plant via the form
- Mark a plant as "Sold Out" or "In Stock"
- Filter/search plants by name

## 🌼 Advanced Features

- Update plant price (PATCH request)
- Delete plant (DELETE request)

## 🧠 API Endpoints

| Method | Endpoint      | Description      |
| ------ | ------------- | ---------------- |
| GET    | `/plants`     | Fetch all plants |
| POST   | `/plants`     | Add new plant    |
| PATCH  | `/plants/:id` | Update price     |
| DELETE | `/plants/:id` | Remove plant     |


## 🧰 Technologies Used

- React 18

- JSON Server

- Fetch API

- Jest (testing)

- 🧪 Run Tests

npm test

## 🧩 Project Structure
```
plantsy
│
├── .github
│  
├── public/
│   ├── images/
│   │   ├── aloe.jpg
│   │   ├── zz-plant.jpg
│   │   └── monstera.jpg
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── __tests__
│   │   └── App.test.js
│   ├── components/
│   │   ├── PlantCard.js
│   │   ├── PlantForm.js
│   │   └── SearchBar.js
│   ├── index.css
│   ├── index.js
│   └── App.js
│
├── config.json
├── .gitignore
├── README.md
├── babel.config.js
├── db.json
├── demo.gif
├── jest.setup.js
├── package-lock.json
└── package.json
```
## 👩🏽‍💻 Author: Sam Safari

## 📅 Updated: November 2025

## 🪴 "Grow your React skills one plant at a time!"