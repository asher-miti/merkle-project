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
              <strong>Client ID: #{item.id}</strong>
            </li>
            <button className="card-link">
              <Link to={`/company/${item.id}`}>See Data</Link>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ClientItem;
