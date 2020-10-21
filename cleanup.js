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


//   const surveyData = 'survey_data.json'
//   let favouriteColour = [];

//   const fetchSurveyData = () => {
//     fetch(surveyData)
//     .then(response => response.json())
//     .then(allData => getAllEntries(allData))
//   }

//   const getAllEntries = (allData) => {
//       const favouriteColourEntries = allData.map(entry => entry.lievelingskleur);
//       favouriteColour.push(favouriteColourEntries);
//       console.log(favouriteColour);
//   }

//   // const filterFaultyEntries = (allEntries) => {
//   //     const favouriteColourFaulty = allEntries.filter(entry => entry.includes("" || "0" || "/"))
//   //   //  favouriteColour.push(favouriteColourFaulty);
//   //    console.log(favouriteColourFaulty);
//   // }

    // if(answer.charAt(0) != '#') {
    //   let hash = '#';
    //   answer = hash + answer;
    // }
    // answer = answer.replace('Incorrect Value');
    // answer = answer.toLowerCase();
    // correctedAnswers.push(answer);
    // console.log(correctedAnswers);
  // });

//   fetchSurveyData();

  // surveyData.map(entry => specificAnswers.push(entry[surveyQuestion]));
  // removeFaultyAnswers(specificAnswers);



const surveyData = data;
let surveyQuestion = "lievelingskleur";

const getSpecificAnswer = (surveyData, surveyQuestion) => {
  let specificAnswers = [];
  surveyData.map(surveyData => specificAnswers.push(surveyData[surveyQuestion]))
  removeFaultyAnswers(specificAnswers);
}

const removeFaultyAnswers = (specificAnswers) => {
  const faultyFilter = specificAnswers.filter(answer => {
    return answer !== '' && answer !== '/' && answer !== '0';
  });
  formatAnswers(faultyFilter);
}

const formatAnswers = (correctedAnswers) => {
  let formattedAnswers = [];

  correctedAnswers.forEach(answer => {
    answer = answer.toLowerCase();
    answer.charAt(0) != '#' ? answer = '#' + answer : delete answer;
    formattedAnswers.push(answer);
  });

showCircles(formattedAnswers);
}

const showCircles = (formattedAnswers) => {
  console.log(formattedAnswers);
  formattedAnswers.forEach(answer => {
    const block = document.createElement('div');
    const favouriteColour = document.createElement('div');
    const colourCode = document.createElement('p');

    block.className = 'circle';
    colourCode.innerText = answer;
    favouriteColour.className = 'favouritecolour'
    favouriteColour.style.backgroundColor = answer;
    document.querySelector('.overview').appendChild(block);
    block.appendChild(colourCode);
    block.appendChild(favouriteColour);
  })
}
let cleanData = getSpecificAnswer(surveyData, surveyQuestion);





// Functie om RGB om te zetten naar HEX
// Function om de kleuren die niet HEX of RGB zijn eruit halen