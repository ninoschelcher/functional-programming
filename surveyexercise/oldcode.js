
fetch('survey_data.json')
  .then(response => {
    return response.json();
  })
  .then(surveyData => {
    console.log(typeof surveyData)
    surveyData.forEach(element => {
        if (element.lievelingskleur == "" || element.lievelingskleur == 0 || element.lievelingskleur == "/") {
            delete element.lievelingskleur;
        }
        console.log(element.lievelingskleur)});
  });


  const surveyData = 'survey_data.json'
  let favouriteColour = [];

  const fetchSurveyData = () => {
    fetch(surveyData)
    .then(response => response.json())
    .then(allData => getAllEntries(allData))
  }

  const getAllEntries = (allData) => {
      const favouriteColourEntries = allData.map(entry => entry.lievelingskleur);
      favouriteColour.push(favouriteColourEntries);
      console.log(favouriteColour);
  }

  const filterFaultyEntries = (allEntries) => {
      const favouriteColourFaulty = allEntries.filter(entry => entry.includes("" || "0" || "/"))
     favouriteColour.push(favouriteColourFaulty);
     console.log(favouriteColourFaulty);
  }

    if(answer.charAt(0) != '#') {
      let hash = '#';
      answer = hash + answer;
    }
    answer = answer.replace('Incorrect Value');
    answer = answer.toLowerCase();
    correctedAnswers.push(answer);
    console.log(correctedAnswers);
  

  fetchSurveyData();

  surveyData.map(entry => specificAnswers.push(entry[surveyQuestion]));
  removeFaultyAnswers(specificAnswers);