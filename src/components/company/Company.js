import React, { useState, useEffect } from "react";
import styles from "./Company.module.css";
import { Cards, Chart, ClientPicker, ClientHeader, Table } from "../index";
import { fetchData } from "../../api";
import ClientItem from "../clients/ClientItem";
import { Link } from "react-router-dom";
import arrow from "../../images/arrow.svg";

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
      <ClientHeader />
      <Link to={`/clients/ClientItem`}>
        <img className={styles.arrow} src={arrow} alt="Go Back" />
      </Link>
      <Cards data={companyData} />
      {/* <ClientPicker handleClientChange={this.handleClientChange} /> */}
      <Chart dailyData={companyData.data} />
      <Table data={companyData.data} />
    </div>
  );
};

export default Company;
