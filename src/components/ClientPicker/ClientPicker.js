import React, { useState, useEffect } from "react";
import { Select, MenuItem, NativeSelect, FormControl, InputLabel } from "@material-ui/core";

import { fetchClients } from "../../api";
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

  //   return (
  //     <FormControl variant="filled" className={styles.formControl}>
  //       <InputLabel id="demo-simple-select-label">Clients</InputLabel>

  //       <Select
  //         labelId="demo-simple-select-label"
  //         id="demo-simple-select"
  //         value={data.name || "company"}
  //         onChange={handleClientChange}
  //       >
  //         {fetchedClients.map((client, i) => (
  //           <MenuItem key={i} value={client}>
  //             {client.name}
  //           </MenuItem>
  //         ))}
  //       </Select>
  //     </FormControl>
  //   );

  //   return (
  //     <FormControl className={styles.formControl}>
  //       <InputLabel id="demo-simple-select-label">Clients</InputLabel>
  //       <NativeSelect
  //         label="Clients"
  //         defaultValue={null}
  //         x={console.log(JSON.stringify(data))}
  //         value={null && JSON.stringify(data)}
  //         value={null}
  //         onChange={(e) => handleClientChange(JSON.parse(e.target.value))}
  //       >
  //         {fetchedClients.map((client, i) => (
  //           <option key={i} value={JSON.stringify(client)}>
  //             {client.name}
  //           </option>
  //         ))}
  //       </NativeSelect>
  //     </FormControl>
  //   );
};

export default ClientPicker;
