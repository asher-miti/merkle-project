import axios from "axios";

const url = "https://europe-west2-mpx-tools-internal.cloudfunctions.net/frontend-mock-api/clients";

export const fetchData = async (id) => {
  try {
    const { data } = await axios.get(`${url}/${id}`);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchClients = async () => {
  try {
    const {
      data: { clients },
    } = await axios.get(url);

    return clients.map((client) => client.name);
  } catch (error) {
    console.log(error);
  }
};
