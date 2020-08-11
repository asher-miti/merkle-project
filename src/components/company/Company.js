import React, { useState, useEffect } from "react";
import styles from "./Company.module.css";
import { Cards, Chart, ClientHeader, TableData } from "../index";
import { fetchData } from "../../api";
import Spinner from "../ui/Spinner";
import ClientPicker from "../clientpicker/ClientPicker";

const Company = ({
  isLoading,
  match: {
    params: { id },
  },
}) => {
  const [companyData, setCompanyData] = useState({});

  useEffect(() => {
    fetchCompanyData(id);
  }, [id]);

  const fetchCompanyData = async (id) => {
    const fetchedData = await fetchData(id);

    setCompanyData(fetchedData); // dailyData, id, companyName, logo
  };

  const handleClientChange = (data) => {
    console.log(data);
    if (data) {
      const parsedData = JSON.parse(data);

      fetchCompanyData(parsedData.id);
    }
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <div className={styles.container}>
      <ClientHeader companyData={companyData} />
      <div className={styles.dataContainer}>
        <ClientPicker handleClientChange={handleClientChange} data={companyData} />
        <Cards data={companyData} />
        <Chart dailyData={companyData.data} />
        <TableData data={companyData.data} />
      </div>
    </div>
  );
};

export default Company;
