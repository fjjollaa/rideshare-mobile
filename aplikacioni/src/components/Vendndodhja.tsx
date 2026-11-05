"use client";

import { useState } from "react";

export default function Vendndodhja() {
  const [status, setStatus] = useState("Vendndodhja nuk është kërkuar ende.");
  const [manualLocation, setManualLocation] = useState("");

  function perdorVendndodhjen() {
    if (!navigator.geolocation) {
      setStatus("Kjo pajisje nuk mbështet vendndodhjen. Shkruaj vendtakimin manualisht.");
      return;
    }

    setStatus("Po kërkohet vendndodhja…");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const latitude = coords.latitude.toFixed(3);
        const longitude = coords.longitude.toFixed(3);
        setStatus(`Pika e nisjes u mor: ${latitude}, ${longitude}`);
      },
      () => {
        setStatus("Vendndodhja nuk u pranua. Mund të vazhdosh me vendtakimin manual.");
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 },
    );
  }

  return (
    <section className="location-box" aria-live="polite">
      <h2>Pika e nisjes</h2>
      <button type="button" className="action" onClick={perdorVendndodhjen}>
        Përdor vendndodhjen time
      </button>
      <p>{status}</p>
      <label htmlFor="vendtakimi-manual">Shkruaj vendtakimin</label>
      <input
        id="vendtakimi-manual"
        value={manualLocation}
        onChange={(event) => setManualLocation(event.target.value)}
        placeholder="P.sh. Stacioni kryesor"
      />
    </section>
  );
}
