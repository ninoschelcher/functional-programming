# functional-programming
This project is part of the CMD Tech-Track. It contains the concept and visualization data story for The Volkskrant.

Research questions can be found [here](https://github.com/ninoschelcher/functional-programming/wiki/Brainstorming-&-Research-Questions)

## The Concept

## Research Questions 
### 1. How many charging points are available per parking garage in Amsterdam?
- **Assumption:** I think that there is a big difference, some garages have a lot while other ones have 1/2 or maybe none. Outside of the centre are probably the ones with more charging points.

- **Dataset:**
   * [Specificatie Parkeergebied](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s) — Information about parking garages with specifications like Capacity, Charging Points and Disabled Access. 
   * [GEO Parkeer Garages](https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34) — Geographical data about the specific parking garages.

- **Variables:**
   * **ChargingPointCapacity** – Amount of charging points in a garage (number)
   * **Location** — Data that consists of Latitude and Longitude (number)
   * **AreaId** — Number to identify specific garage, can be combined to find geo location of garage with charging point (number/text)

### 2. In which district is it the easiest/hardest to find a charging point for you car?
- **Assumption:** This is a tricky one, I have a mixed feelings about it. It's probably harder to find a parking spot in the centre cause more people are working in the centre of Amsterdam but there are a lot of charging spots. But meanwhile in other districts, for example Nieuw-West there are not a lot of charging spots while there are more people buying an electric car. 
 
- **Dataset:**
    * [Specificatie Parkeergebied](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s) — Information about parking garages with specifications like Capacity, Charging Points and Disabled Access. 
    * [GEO Parkeer Garages](https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34) — Geographical data about the specific parking garages.

- **Variables:**
    * **ChargingPointCapacity** – Amount of charging points in a garage (number)
    * **Location** — Data that consists of Latitude and Longitude (number)
    * **AreaId** — Number to identify specific garage, can be combined to find geo location of garage with charging point (number/text)

### 3. Is a parking garage that has charging points more expensive than one without charging points?
- **Assumption:** This could be an interesting one, I don't think there is gonna be a big difference. Since there aren't a lot of charging points anyways it wouldn't influence the price.

- **Dataset:**
    * [Specificatie Parkeergebied](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s) — Information about parking garages with specifications like Capacity, Charging Points and Disabled Access. 
    * [Tariefdeel](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFDEEL/534e-5vdg) — Data about the fares of different parking spaces and the dates it started.

- **Variables:**
    * **ChargingPointCapacity** – Amount of charging points in a garage (number)
    * **AreaManagerId** — Identification code for area administrator (number)
    * **FareCalculationDesc** — Describes how much the fare is of a parking spot (number/text)

### 4. Are parking garages with charging points convenient for people who charge their car during work times?
- **Assumption:** I think parking garage owners have in mind that they should have their garage open all day long, this makes it easier for people with an electric car to park it there. So I think the garages that are for example open from 06:00-24:00 have charging points available for people to charge their cars during the day.

- **Dataset:**
    * [Specificatie Parkeergebied](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s) — Information about parking garages with specifications like Capacity, Charging Points and Disabled Access. 
   * [Tijdvak](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TIJDVAK/ixf8-gtwq/data) — Information about opening and closing times of a parking garage.

- **Variables:**
    * **ChargingPointCapacity** – Amount of charging points in a garage (number)
    * **AreaId** — Number to identify specific garage, can be combined to find geo location of garage with charging point (number/text)
    * **StartTimeTimeFrame** — Specific time the parking space opens. (number)
    * **EndTimeTimeFrame** — Specific time the parking space closes. (number)

### 5. How many electric cars are registered in Amsterdam?
- **Assumption:** I think there is definitely a rise of electric cars in Amsterdam, in the more richer neighbourhoods people have more access to a personal/private charging point for their car. And since it's better for the environment a lot of people probably want to change or are already changed to an electric car.

- **Dataset:**
   * [Elektrische Voertuigen](https://opendata.rdw.nl/Voertuigen/Elektrische-voertuigen/w4rt-e856/data)

- **Variables:**

***
## Sources
