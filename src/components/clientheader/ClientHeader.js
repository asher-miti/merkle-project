import React from "react";
import { fetchClients } from "../../api/index";

const ClientHeader = ({ fetchedData }) => {
  return (
    <div className="header">
      <div className="client-logo">
        <img src={fetchClients.logo} alt="" />
      </div>
      <div className="client-name">
        <h1>{fetchClients.name}</h1>
      </div>
    </div>
  );
};
export default ClientHeader;
