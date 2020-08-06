import React from "react";
import styles from "./Company.module.css";
import { Cards, Chart, ClientPicker } from "../components";
import { fetchData } from "../api";

class Company extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleClientChange = async (country) => {
    // fetch the data
    // set the state
  };

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <ClientPicker handleClientChange={this.handleClientChange} />
        <Chart />
      </div>
    );
  }
}

export default Company;
