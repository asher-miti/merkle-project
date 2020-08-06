import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./ClientPicker.module.css";

import { fetchCountries } from "../../api";

const ClientPicker = ({ handleClientChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleClientChange(e.target.value)}>
        <option value="client">Clients</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default ClientPicker;
