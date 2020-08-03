import React from "react";

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
            {/* <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ClientItem;
