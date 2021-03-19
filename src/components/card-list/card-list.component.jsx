import React from "react";
import "./cardlist.styles.css";
import { Card } from "../card/card.component";

export function CardList({ monsterProp }) {
  return (
    <div className="card-list">
      {monsterProp.map((monsterPara) => (
        <Card monsterData={monsterPara} key={monsterPara.id} />
      ))}
    </div>
  );
}
