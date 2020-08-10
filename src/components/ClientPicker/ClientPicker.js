import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import { fetchClients } from "../../api";
import styles from "./ClientPicker.module.css";

const ClientPicker = ({ handleClientChange }) => {
  const [fetchedClients, setFetchedClients] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedClients(await fetchClients());
    };

    fetchAPI();
  }, [setFetchedClients]);

  console.log(fetchedClients);

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
