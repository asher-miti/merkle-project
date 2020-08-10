import React from "react";
import { Link } from "react-router-dom";

import arrow from "../../images/arrow.svg";
import styles from "./ClientHeader.module.css";

const ClientHeader = ({ companyData }) => {
  return (
    <div className={styles.headerContainer}>
      <Link to={`/clients/ClientItem`}>
        <img className={styles.arrow} src={arrow} alt="Go Back" />
      </Link>
      <div className={styles.clientName}>
        <h1>{companyData.name}</h1>
      </div>
      <div>
        <img className={styles.clientLogo} src={companyData.logo} alt="" />
      </div>
    </div>
  );
};

export default ClientHeader;
