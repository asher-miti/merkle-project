import React, { useState, useEffect } from "react";
import Header from "./components/ui/Header";
import ClientGrid from "./components/clients/ClientGrid";
import Search from "./components/ui/Search";
import Company from "./components/company/Company";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const { data: fetchedCompanies } = await axios.get(
        `https://europe-west2-mpx-tools-internal.cloudfunctions.net/frontend-mock-api/clients`
      );

      const filteredCompanies = fetchedCompanies.filter((fetchedCompany) => {
        return fetchedCompany.name.toLowerCase().startsWith(query.toLowerCase());
      });

      console.log("test", filteredCompanies);
      setCompanies(filteredCompanies);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/company/:id" component={Company} />
        <Route path="/">
          <div className="container">
            <Search query={query} setQuery={setQuery} />
            <ClientGrid isLoading={isLoading} items={companies} />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
