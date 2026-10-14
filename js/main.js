// js/main.js — loads products from Firestore and renders the grid

import { db, collection, getDocs } from "./firebase.js";

const grid = document.getElementById("product-grid");

async function loadProducts() {
  try {
    const snapshot = await getDocs(collection(db, "products"));

    grid.innerHTML = ""; // clear existing

    if (snapshot.empty) {
      grid.innerHTML = `<p class="not-found">No products yet. Add some in the Firebase Console.</p>`;
      return;
    }

    snapshot.forEach((docSnap) => {
      const p = docSnap.data();
      const id = docSnap.id;

      const card = document.createElement("a");
      card.href = `product.html?id=${id}`;
      card.className = "card";
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <h3>${p.name}</h3>
        <p class="specs">${p.specs}</p>
        <p class="price">KSh ${p.price.toLocaleString()}</p>
      `;
      grid.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading products:", error);
    grid.innerHTML = `<p class="not-found">Could not load products. Check the browser console (F12).</p>`;
  }
}

loadProducts();