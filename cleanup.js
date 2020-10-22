const surveyData = data;
const surveyQuestion = "lievelingskleur";

const getSpecificAnswer = (surveyData, surveyQuestion) => {
  let specificAnswers = [];
  surveyData.map(surveyData => specificAnswers.push(surveyData[surveyQuestion]))
  console.log(specificAnswers);
  removeFaultyAnswers(specificAnswers);
}

const removeFaultyAnswers = (specificAnswers) => {
  const faultyFilter = specificAnswers.filter(answer => {
    return answer !== '' && answer !== '/' && answer !== '0';
  });
  formatAnswers(faultyFilter);
}

const formatAnswers = (correctedAnswers) => {
  let rightAnswers = [];
  let wrongAnswers = [];

  const allWrittenColours = {
    legergroen: '#54552B',
    staal: '#5D6565',
    grijs: '#b8b8b8',
    zwart: '#000000',
    rood: '#FF0101',
    geel: '#F7F700'
  }

  const writtenColours = Object.keys(allWrittenColours)

  correctedAnswers.forEach(answer => {
    answer = answer.split('.').join("");
    answer = answer.split(" ")[0];
    answer = answer.toLowerCase();

    if (writtenColours.includes(answer)) {
    wrongAnswers.push(allWrittenColours[answer]);
    } else {
      if (answer.charAt(0) != '#') {
        answer = '#' + answer;
      }
      if (answer.length > 4 && answer.length < 7) {
        answer = answer.slice(0, 4);
      }
      rightAnswers.push(answer);
    }
  });

  const cleanedData = wrongAnswers.concat(rightAnswers).sort();
  showCircles(cleanedData);
}

const showCircles = (formattedAnswers) => {
  formattedAnswers.forEach(answer => {
    const block = document.createElement('div');
    const favouriteColour = document.createElement('div');
    const colourCode = document.createElement('p');

    block.className = 'circle';
    colourCode.innerText = answer;
    favouriteColour.className = 'favouritecolour'
    favouriteColour.style.backgroundColor = answer;
    if (answer === '#ffffff') {
      favouriteColour.style.border = "3px solid black";
    }

    document.querySelector('.overview').appendChild(block);
    block.appendChild(colourCode);
    block.appendChild(favouriteColour);
  })
}

const cleanData = getSpecificAnswer(surveyData, surveyQuestion);




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