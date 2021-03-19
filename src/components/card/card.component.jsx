import React from "react";
import "./card.style.css";

export function Card({ monsterData }) {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${monsterData.id}?set=set2&size=180x180`}
        alt={monsterData.name}
      />
      <h2>{monsterData.name}</h2>
      <p>{monsterData.email}</p>
    </div>
  );
}
