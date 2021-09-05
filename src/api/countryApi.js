import axiosClient from "./axiosClient";

const countryApi = {
  getAll() {
    const url = "https://api.covid19api.com/countries";

    return axiosClient.get(url);
  },

  getReportByCountry(country) {
    const url = `https://api.covid19api.com/dayone/country/${country}`;

    return axiosClient.get(url);
  },
};

export default countryApi;
