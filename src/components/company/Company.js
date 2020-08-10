import React, { useState, useEffect } from "react";
import styles from "./Company.module.css";
import { Cards, Chart, ClientHeader, TableData } from "../index";
import { fetchData } from "../../api";
import Spinner from "../ui/Spinner";
import ClientPicker from "../clientpicker/ClientPicker";

const Company = ({
  state = {
    client: "",
  },
  isLoading,
  match: {
    params: { id },
  },
}) => {
  const [companyData, setCompanyData] = useState({});

  useEffect(() => {
    const fetchCompanyData = async () => {
      const fetchedData = await fetchData(id);

      setCompanyData(fetchedData); // dailyData, id, companyName, logo
    };

    fetchCompanyData();
  }, [id]);

  // handleClientChange = async (client) => {
  //   console.log(client);
  // };

  return isLoading ? (
    <Spinner />
  ) : (
    <div className={styles.container}>
      <ClientHeader companyData={companyData} />
      <div className={styles.dataContainer}>
        {/* <ClientPicker handleClientChange={this.handleClientChange} /> */}
        <Cards data={companyData} />
        <Chart dailyData={companyData.data} />
        <TableData data={companyData.data} />
      </div>
    </div>
  );
};

export default Company;
