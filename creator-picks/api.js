// api.js

const BASE_URL = 'https://dummyjson.com';

// GET products
export const fetchProducts = async () => {
  try {
    const res = await fetch(`${BASE_URL}/products`);

    if (!res.ok) throw new Error('Failed to fetch products');

    const data = await res.json();
    return data.products;
  } catch (err) {
    throw err;
  }
};

// POST login (fake)
export const login = async (username, password) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!res.ok) throw new Error('Login failed');

    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};