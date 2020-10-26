const url = "https://opendata.rdw.nl/resource/b3us-f26s.json";
const row = "chargingpointcapacity";

const fetchData = () => {
  fetch(url)
    .then(response => response.json())
    .then(allData => callFunctions(allData))  
 }

const callFunctions = (allData) => {
    const specificRow = getSpecificRow(allData, row);
    console.log(specificRow);
}

const getSpecificRow = (data, row) => {
    return data.map(data => data[row]).flat();
}

fetchData();