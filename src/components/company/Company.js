import React, { useState, useEffect } from "react";
import styles from "./Company.module.css";
import { Cards, Chart, ClientPicker } from "..";
import { fetchData } from "../../api";

const Company = ({
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

  return (
    <div className={styles.container}>
      {/* <Cards data={companyData} /> */}
      {/* <ClientPicker handleClientChange={this.handleClientChange} /> */}
      <Chart dailyData={companyData.data} />
    </div>
  );
};

export default Company;
