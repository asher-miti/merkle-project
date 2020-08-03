import React, { useState, useEffect } from "react";
import Header from "./components/ui/Header";
import ClientGrid from "./components/clients/ClientGrid";
import Search from "./components/ui/Search";
import axios from "axios";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://cors-anywhere.herokuapp.com/https://europe-west2-mpx-tools-internal.cloudfunctions.net/frontend-mock-api/clients?name=${query}`
      );

      // console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <ClientGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
