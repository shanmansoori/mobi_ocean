import { UAParser } from "ua-parser-js";

const refere = process.env.REACT_APP_API_URL;

let parser = new UAParser(window.navigator.userAgent);
let parserResults = parser.getResult();
console.log(parserResults);

export const headers = {
  "Content-Type": "application/json",
  X_client_brow: parserResults.browser.name,
  X_client_brow_ver: parserResults.browser.version,
  X_client_mobi: 0,
  X_client_usod: parserResults.os.name,
  X_client_usod_ver: parserResults.os.version,
  X_client_data_size: `${window.screen.width} * ${window.screen.height}`,
  refere: refere,
};

export const token = localStorage.getItem("Ns_t");
