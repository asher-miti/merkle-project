import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./ClientPicker.module.css";

import { fetchClients } from "../../api";

const ClientPicker = ({ handleClientChange }) => {
  const [fetchedClients, setFetchedClients] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedClients(await fetchedClients());
    };

    fetchAPI();
  }, [setFetchedClients]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleClientChange(e.target.value)}>
        <option value="client">Clients</option>
        {fetchedClients.map((client, i) => (
          <option key={i} value={client}>
            {client}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default ClientPicker;
