import {countries} from "./country.js";

const gridContainer = document.getElementById("grid-country-container");
gridContainer.className = "grid-country-container";

function getCountryData(){

for(let i = 0; i < countries.length; i++){
    let countryContainer = document.createElement("div");
    countryContainer.className = "country";
    gridContainer.appendChild(countryContainer);
    
    
    let flagImage = document.createElement("div");
    flagImage.className = "flag";
    countryContainer.appendChild(flagImage);
    
    let image = document.createElement("img");
    image.src = countries[i].flag;
    flagImage.appendChild(image);
    
    let countryName = document.createElement("p");
    countryName.className = "country-name";
    countryName.textContent = countries[i].name;
    countryContainer.appendChild(countryName);
};
}
getCountryData();

    const searchCountry = (country) => {

        let countryList = [];
    
        for(let i = 0; i < countries.length; i++){

            if(countries[i].name.includes(country)){
                countryList.push(countries[i].name);
                
            }else{
                `Country not found`
            }
        }
        return countryList;
    };
    
    console.log((searchCountry('gent')));
// });









// let countryContainer = document.createElement("div");
// countryContainer.className = "country";
// gridContainer.appendChild(countryContainer);

// let flagImage = document.createElement("div");
// flagImage.className = "flag";
// countryContainer.appendChild(flagImage);

// let image = document.createElement("img");
// image.src = countries[0].flag;
// flagImage.appendChild(image);

// let countryName = document.createElement("p");
// countryName.className = "country-name";

// countryName.textContent = countries[0].name;
// countryContainer.appendChild(countryName);
