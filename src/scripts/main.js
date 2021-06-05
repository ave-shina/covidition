import "../scripts/components/header-container";
import "../scripts/components/navbar-container";
import "./components/indonesia-report";
import "./components/global-report";
import "../scripts/components/footer-container";

const main = () => {
  const IndonesiaUrl = "https://covid19.mathdro.id/api/countries/Indonesia/";
  const GlobalUrl = "https://covid19.mathdro.id/api";

  const getData = () => {
    fetch(IndonesiaUrl)
      .then((response) => response.json())
      .then((results) => {
        const coronaReportElement = document.querySelector("indonesia-report");
        coronaReportElement.indonesiaItem = results;
      })
      .catch(() => showMessage());

    fetch(IndonesiaUrl)
      .then((response) => response.json())
      .then((results) => {
        const coronaReportElement = document.querySelector("navbar-container");
        coronaReportElement.indonesiaItem = results;
      })
      .catch(() => showMessage());
    fetch(GlobalUrl)
      .then((response) => response.json())
      .then((results) => {
        const coronaReportElement = document.querySelector("global-report");
        coronaReportElement.globalItem = results;
      })
      .catch(() => showMessage());
  };

  const showMessage = (message = "Periksa Koneksi anda kembali") => {
    alert(message);
  };

  getData();
};

export default main;
