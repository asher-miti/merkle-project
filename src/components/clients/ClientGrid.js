import React from "react";

import ClientItem from "./ClientItem";
import Spinner from "../UI/Spinner";

const ClientGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <ClientItem key={item.id} item={item}></ClientItem>
      ))}
    </section>
  );
};

export default ClientGrid;
