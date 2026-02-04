import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'

// ✅ HashRouter evita los 404 en GitHub Pages
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
function normalizeMsdynHashToQuery() {
  const url = new URL(window.location.href);
  const rawHash = (url.hash || "");

  // Ejemplos que pueden venir del correo:
  // #msdynmkt_trackingcontext=...
  // #$msdynmkt_trackingcontext=...
  // #/msdynmkt_trackingcontext=...
  const cleaned = rawHash.replace(/^#\/?\$?/, ""); // quita "#", optional "/", optional "$"
  const lower = cleaned.toLowerCase();

  const isMsdyn =
    lower.startsWith("msdynmkt_") ||
    lower.includes("msdynmkt_trackingcontext") ||
    lower.includes("msdynmkt_prefill");

  if (!isMsdyn) return;

  // Pasar params del "hash" a querystring
  const fromHash = new URLSearchParams(cleaned);
  const sp = new URLSearchParams(url.search);

  for (const [k, v] of fromHash.entries()) {
    if (k) sp.set(k, v ?? "");
  }

  url.search = sp.toString();
  url.hash = ""; // elimina hash para no romper router

  // Importante: esto corre ANTES de React, así que no hay "primer render malo"
  window.history.replaceState(null, "", url.toString());
}

// ✅ Ejecutar antes de montar React
normalizeMsdynHashToQuery();
