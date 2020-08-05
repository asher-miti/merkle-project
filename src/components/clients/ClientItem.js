import React from "react";
import { Link } from "react-router-dom";

const ClientItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.logo} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Client ID: #</strong>
              {item.id}
            </li>
            <Link to="/company">Go to card</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ClientItem;
