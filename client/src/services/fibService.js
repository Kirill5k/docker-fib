import axios from "axios";

class FibService {
  getValues() {
    return axios.get("/api/values/current")
      .then(response => response.data)
      .then(({values}) => values);
  }

  getIndexes() {
    return axios.get("/api/values")
      .then(response => response.data)
      .then(({values}) => values);
  }

  calculateValue(index) {
    return axios.post("/api/values", { index })
      .then(() => new Promise(resolve => setTimeout(resolve, 250)));
  }
}

export default new FibService();
