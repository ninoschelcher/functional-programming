// fetch('survey_data.json')
//   .then(response => {
//     return response.json();
//   })
//   .then(surveyData => {
//     console.log(typeof surveyData)
//     surveyData.forEach(element => {
//         if (element.lievelingskleur == "" || element.lievelingskleur == 0 || element.lievelingskleur == "/") {
//             delete element.lievelingskleur;
//         }
//         console.log(element.lievelingskleur)});
//   });


window.addEventListener("load", () => {
  const surveyData = 'survey_data.json'

  const fetchSurveyData = () => {
    fetch(surveyData)
    .then(response => response.json())
    .then(allData => getAllEntries(allData))
  }

  const getAllEntries = (allData) => {
      allData.forEach(entry => favouriteColour.push(entry.lievelingskleur));
      filterFaultyEntries(favouriteColour);
  }

  const filterFaultyEntries = (allEntries) => {
      const favouriteColourFaulty = allEntries.filter(entry => entry.includes("" || "0" || "/"))
    //  favouriteColour.push(favouriteColourFaulty);
     console.log(favouriteColourFaulty);
  }

  let favouriteColour = [];
//   console.log(favouriteColour);
  fetchSurveyData();

});


