import 'regenerator-runtime/runtime'

const parkingSpecifications = 'https://opendata.rdw.nl/resource/b3us-f26s.json';
const geoLocations = 'https://opendata.rdw.nl/resource/t5pc-eb34.json';
const row1 = 'chargingpointcapacity';
const row2 = 'areaid'
const cityCode = '363'

const getParkingData = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

const getParkingLocations = async (geoLocations) => {
  const fetchParkingLocations = await getParkingData(geoLocations)
  return fetchParkingLocations;
}

const getParkingSpecifications = async (parkingSpecifications) => {
  const fetchParkingSpecification = await getParkingData(parkingSpecifications)
  return fetchParkingSpecification;
}

const allParkingData = async () => {
  const parkingSpotSpecification = await getParkingSpecifications(parkingSpecifications);
  const parkingLocations = await getParkingLocations(geoLocations);
  const chargingPoints = getChargingPoints(parkingSpotSpecification, row1, row2, cityCode)
  const getParkingAmsterdamLocations = getParkingAmsterdamLocation(parkingLocations, row2, cityCode)
  const filteredLocations = getLocationandArea(getParkingAmsterdamLocations)
  
  const correctLocations = getCorrectLocations(filteredLocations, chargingPoints, row2);

}

const getChargingPoints = (data, row1, row2, city) => {
  return data.filter(data => data[row1] !== '0' && data[row2].startsWith(city))
}

const getParkingAmsterdamLocation  = (data, row, cityCode) => {
  return data.filter(data => data[row].startsWith(cityCode));
}

const getLocationandArea = (data) => {
  return data.map(data => ({areaid: data.areaid, location: data.location}))
}

const getCorrectLocations = (location, chargingpoint, row) => {
  return chargingpoint.map(element => location.includes(element[row]));
}

allParkingData();


// 4. Combine the 2 functions to know where the parking garages with a charging point are


// const fetchSpecifData = () => {
//   fetch(parkingSpecifications)
//     .then(response => response.json())
//     .then(specifData => callFunctions(specifData))  
// }

// const fetchGeoData = () => {
//   fetch(geoLocations)
//     .then(response => response.json())
//     .then(geoData => geoFunctions(geoData))
// }


// const callFunctions = (specifData, geoData) => {
//   const specificRow = getSpecificRow(specifData, row1, row2);
// }

// const geoFunctions = (geoData) => {
//   const geoLocations = getGeoLocations(geoData, row2)
//   const specificLocation = getSpecificLocations(geoLocations);
//   console.log(specificLocation);
// }

// const getSpecificRow = (data, row1, row2) => {
//   return data.filter(data => data[row1] !== '0' && data[row2].startsWith(cityCode));
// }

// const getGeoLocations = (data, row) => {
//   return data.filter(data => data[row].startsWith(cityCode));
// }

// const getSpecificLocations = (data) => {
//   return data.map(data => ({areaid: data.areaid, location: data.location}))
// }

// fetchSpecifData();
// fetchGeoData();