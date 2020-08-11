import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, ClientGrid, Search, Company } from "../src/components/index";

import "./App.css";

const App = () => {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const fetchItems = async () => {
      const { data: fetchedCompanies } = await axios.get(
        `https://europe-west2-mpx-tools-internal.cloudfunctions.net/frontend-mock-api/clients`
      );

      // Home page search query
      const filteredCompanies = fetchedCompanies.filter((fetchedCompany) => {
        return fetchedCompany.name.toLowerCase().startsWith(query.toLowerCase());
      });

      setCompanies(filteredCompanies);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <Router>
      <Switch>
        <Route path="/company/:id" component={Company} />
        <Route path="/">
          <div className="container">
            <Header />
            <Search query={query} setQuery={setQuery} />
            <ClientGrid isLoading={isLoading} items={companies} />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
