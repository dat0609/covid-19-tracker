import { Container, Typography } from "@material-ui/core";
import { sortBy } from "lodash";
import moment from "moment";
import { useEffect, useState } from "react";
import countryApi from "./api/countryApi";
import LineChartSkeleton from "./components/Charts/LineChart/LineChartSkeleton";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await countryApi.getAll();
      const countryList = response.data;

      setCountries(sortBy(countryList, "Country"));

      setSelectedCountryId("vn");
    })();
  }, []);

  const handleOnChange = (e) => {
    setSelectedCountryId(e.target.value);
  };

  useEffect(() => {
    if (selectedCountryId) {
      (async () => {
        const { Slug } = countries.find(
          (country) => country.ISO2.toLowerCase() === selectedCountryId
        );
        countryApi.getReportByCountry(Slug).then((response) => {
          if (response) setReports(response.data);
        });

        setLoading(false);
      })();
    }
  }, [countries, selectedCountryId]);

  return (
    <Container style={{ marginTop: "20px" }}>
      <Typography variant="h3" component="h3" style={{ color: "red" }}>
        COVID-19 Tracker
      </Typography>
      <Typography>{moment().format("LLL")}</Typography>

      <CountrySelector
        countries={countries}
        onChange={handleOnChange}
        value={selectedCountryId}
      />

      <Highlight report={reports} />

      {loading ? (
        <LineChartSkeleton />
      ) : (
        <Summary report={reports} selectedCountryId={selectedCountryId} />
      )}
    </Container>
  );
}

export default App;
