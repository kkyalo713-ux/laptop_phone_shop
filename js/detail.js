// js/detail.js — loads one product by ID from Firestore

import { db, doc, getDoc } from "./firebase.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const el = document.getElementById("product-detail");

// Seller info — hardcoded for now, will be editable in Phase 3
const seller = {
  name: "Mwananchi Digital Solutions TechHub",
  phone: "+254114135647",
  whatsapp: "+254757287455",
  location: "Kisii Town, Kisii",
  lat: -0.6765765971166046,
  lng: 34.77214077728914,
};

async function loadProduct() {
  if (!id) {
    el.innerHTML = `<p class="not-found">No product selected. <a href="index.html">Go back</a></p>`;
    return;
  }

  try {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      el.innerHTML = `<p class="not-found">Product not found. <a href="index.html">Go back</a></p>`;
      return;
    }

    const p = docSnap.data();

    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${seller.lat},${seller.lng}`;

    const waNumber = seller.whatsapp.replace(/\D/g, "");
    const waText = encodeURIComponent(
      `Hi ${seller.name}, I want to order:\n\n` +
      `📱 ${p.name}\n` +
      `💰 KSh ${p.price.toLocaleString()}\n\n` +
      `Please share payment and delivery details.`
    );
    const waUrl = `https://wa.me/${waNumber}?text=${waText}`;

    el.innerHTML = `
      <div class="detail">
        <img src="${p.image}" alt="${p.name}" />
        <div class="info">
          <h1>${p.name}</h1>
          <p class="specs">${p.specs}</p>
          <p class="desc">${p.description}</p>
          <p class="price">KSh ${p.price.toLocaleString()}</p>

          <div class="actions">
            <a class="btn whatsapp" href="${waUrl}" target="_blank" rel="noopener">💬 Order on WhatsApp</a>
            <a class="btn" href="tel:${seller.phone}">📞 Call Seller</a>
            <a class="btn maps" href="${mapsUrl}" target="_blank" rel="noopener">📍 Get Directions to Seller</a>
          </div>

          <div class="seller">
            <h3>Seller</h3>
            <p><strong>${seller.name}</strong></p>
            <p>${seller.location}</p>
          </div>
        </div>
      </div>
    `;
  } catch (error) {
    console.error("Error loading product:", error);
    el.innerHTML = `<p class="not-found">Could not load product. Check the browser console (F12).</p>`;
  }
}

loadProduct();