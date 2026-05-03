# Creator Picks App

A React Native mobile app that simulates an influencer-driven e-commerce browsing experience. Users can browse products, search items, view detailed product information, and navigate between screens.

---

## 📱 Features

- 🔐 Login screen (simulated authentication with async logic)
- 📦 Product list fetched from a real public API
- 🔍 Search functionality to filter products
- 📄 Detail screen for each product
- ⏳ Loading state using ActivityIndicator
- ❌ Error handling for failed API requests
- 🔄 Clean architecture with API logic separated in `api.js`

---

## 🌐 API Used

This app uses the DummyJSON API:

https://dummyjson.com/products

It provides realistic e-commerce data such as:
- Product title
- Price
- Rating
- Description
- Thumbnail image

---

## 🧠 Technical Concepts

This project demonstrates:

- `fetch()` with **async/await**
- **GET request** (fetching product data)
- **POST request** (login simulation)
- **try/catch** for error handling
- **FlatList** for rendering lists
- **ActivityIndicator** for loading state
- **React Navigation** for screen navigation
- Passing data via **navigation params**
- Separation of concerns using a dedicated `api.js` file

---

## 📂 Project Structure
# Creator-pick
IT320-5
