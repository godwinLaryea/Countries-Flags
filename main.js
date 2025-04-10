import {countries} from "./country.js";

const gridContainer = document.getElementById("grid-country-container");
gridContainer.className = "grid-country-container";

const searchInput = document.getElementById("search")

let displayedCountries = countries;


function getCountryData(countryList){

  gridContainer.innerHTML = "";
  
  for(let i = 0; i < countryList.length; i++){

    let countryContainer = document.createElement("div");
    countryContainer.className = "country";
    gridContainer.appendChild(countryContainer);
    
    
    let flagImage = document.createElement("div");
    flagImage.className = "flag";
    countryContainer.appendChild(flagImage);
    
    let image = document.createElement("img");
    image.src = countryList[i].flag;
    flagImage.appendChild(image);
    
    let countryName = document.createElement("p");
    countryName.className = "country-name";
    countryName.textContent = countryList[i].name;
    countryContainer.appendChild(countryName);
};
}


    const searchCountry = (country) => {

        let countryList = [];
    
        for(let i = 0; i < countries.length; i++){

            if(countries[i].name.toLowerCase().includes(country.toLowerCase())){
                countryList.push(countries[i]);   
            };
      };
      getCountryData(countryList);
      return countryList;
  };
  
  searchInput.addEventListener("input", () => {
    searchCountry(searchInput.value)
  });
  
  window.addEventListener("load", () => {
  getCountryData(displayedCountries);
});