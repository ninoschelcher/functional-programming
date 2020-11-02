# Functional Programming 👓
This repository contains my process of cleaning data with functional patterns and process of finding good research questions from the dataset with a matching concept for The Volkskrant. Full documentation & process can be found [in my wiki](https://github.com/ninoschelcher/functional-programming/wiki)

# The Assignment 📝
During this project we're working together with The Volkskrant, a newspaper based in the Netherlands. We have to come up with a concept related to: **The car in the city**.

Now the goal is to find interesting insights in these (37) datasets about parking and turn these into interesting research questions that we can answer with a datavisualization. The Volkskrant can decide if they think these visualization(s) are enough to write an article about.

Volkskrant, 2020

[Bron foto](https://nl.wikipedia.org/wiki/Bestand:Volkskrant.svg)

# Research Question(s) 🔍
After brainstorming and looking at all the datasets I thought that electric cars was an interesting topic, it's upcoming + a relevent topic since electric cars are 'better' for the environment. So I came up with the following research question:
- Is electric charging in Amsterdam parking spaces an accessible option?

## Other Research Questions
### 1. How many charging points are available per parking garage in Amsterdam?
- **Assumption:** I think that there is a big difference, some garages have a lot while other ones have 1/2 or maybe none. Outside of the centre are probably the ones with more charging points.

- **Dataset:**
   * [Specificatie Parkeergebied](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s) — Information about parking garages with specifications like Capacity, Charging Points and Disabled Access. 
   * [GEO Parkeer Garages](https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34) — Geographical data about the specific parking garages.

- **Variables:**
   * **ChargingPointCapacity** – Amount of charging points in a garage (number)
   * **Location** — Data that consists of Latitude and Longitude (number)
   * **AreaId** — Number to identify specific garage, can be combined to find geo location of garage with charging point (number/text)

### 2. In which part of Amsterdam is it the easiest/hardest to find a charging point for you car?
- **Assumption:** This is a tricky one, I have a mixed feelings about it. It's probably harder to find a parking spot in the centre cause more people are working in the centre of Amsterdam but there are a lot of charging spots. But meanwhile in other districts, for example Nieuw-West there are not a lot of charging spots while there are more people buying an electric car. 
 
- **Dataset:**
    * [Specificatie Parkeergebied](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s) — Information about parking garages with specifications like Capacity, Charging Points and Disabled Access. 
    * [GEO Parkeer Garages](https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34) — Geographical data about the specific parking garages.

- **Variables:**
    * **ChargingPointCapacity** – Amount of charging points in a garage (number)
    * **Location** — Data that consists of Latitude and Longitude (number)
    * **AreaId** — Number to identify specific garage, can be combined to find geo location of garage with charging point (number/text)

### 3. Is a parking garage in Amsterdam that has charging points more expensive than one without charging points?
- **Assumption:** This could be an interesting one, I don't think there is gonna be a big difference. Since there aren't a lot of charging points anyways it wouldn't influence the price.

- **Dataset:**
    * [Specificatie Parkeergebied](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s) — Information about parking garages with specifications like Capacity, Charging Points and Disabled Access. 
    * [Tariefdeel](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFDEEL/534e-5vdg) — Data about the fares of different parking spaces and the dates it started.

- **Variables:**
    * **ChargingPointCapacity** – Amount of charging points in a garage (number)
    * **AreaManagerId** — Identification code for area administrator (number)
    * **FareCalculationDesc** — Describes how much the fare is of a parking spot (number/text)

### 4.  Are parking garages in Amsterdam with charging points convenient for people who charge their car during work times?
- **Assumption:** I think parking garage owners have in mind that they should have their garage open all day long, this makes it easier for people with an electric car to park it there. So I think the garages that are for example open from 06:00-24:00 have charging points available for people to charge their cars during the day.

- **Dataset:**
    * [Specificatie Parkeergebied](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s) — Information about parking garages with specifications like Capacity, Charging Points and Disabled Access. 
   * [Tijdvak](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TIJDVAK/ixf8-gtwq/data) — Information about opening and closing times of a parking garage.

- **Variables:**
    * **ChargingPointCapacity** – Amount of charging points in a garage (number)
    * **AreaId** — Number to identify specific garage, can be combined to find geo location of garage with charging point (number/text)
    * **StartTimeTimeFrame** — Specific time the parking space opens. (number)
    * **EndTimeTimeFrame** — Specific time the parking space closes. (number)

Full documentation about my research questions and explanations are [in my wiki](https://github.com/ninoschelcher/functional-programming/wiki/Brainstorming-&-Research-Questions)

So for my concept I will look at the charging point options all around Amsterdam and compare them to each other and other garages in Amsterdam that don't have charging points available.

# Interesting Functional Pattern 💡 
The most interesting functional pattern is the `formatAnswers()` function. In this function I format all answers into a hex code so it's consistent to use. Some answers needed a # and others were written out like `Blauw` or `Rood`. The functional pattern can be found [here](https://github.com/ninoschelcher/functional-programming/blob/8406b341de0dbf77022d8b12798f4415e8bf4be1/src/surveyexercise/surveyCleanup.js#L17)

# Installation Guide 💻
There are a few steps required to do so you can get the program up and running on your own machine!

### Clone project
- Clone this repo to your local machine using `$ git clone https://github.com/ninoschelcher/functional-programming.git`
- Go to the directory by typing `$ cd functional-programming`

### Install packages
- Install all required packages by using `$ npm install`

### Run project
- type `$ npm run test` to start the program

# Sources & Acknowledgements 🙋
- [Laurens](https://github.com/Razpudding) — For [this](https://github.com/ninoschelcher/functional-programming/blob/5f093897016b1c53d41cc6bf522d4afe2c28a3d6/parkingData.js#L9) function to fetch data. 
- [Max Hauser](https://github.com/max-hauser) — For regular feedback throughout the project.
- [Volkskrant Image](https://nl.wikipedia.org/wiki/De_Volkskrant) — Wikipedia-bijdragers. (2020b, 7 oktober). De Volkskrant. Geraadpleegd op 30 oktober 2020, van https://nl.wikipedia.org/wiki/De_Volkskrant
