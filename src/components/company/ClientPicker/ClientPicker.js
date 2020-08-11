import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import { fetchClients } from "../../../api";
import styles from "./ClientPicker.module.css";

const ClientPicker = ({ handleClientChange, data }) => {
  const [fetchedClients, setFetchedClients] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedClients(await fetchClients());
    };

    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect onChange={(e) => handleClientChange(e.target.value)}>
        <option value="">Clients</option>
        {fetchedClients.map((client) => (
          <option key={client.id} value={JSON.stringify(client)}>
            {client.name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default ClientPicker;
