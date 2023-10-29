const back = document.getElementById("myBack");
const changePage = new URLSearchParams(window.location.search);
const countryId = changePage.get("id");
console.log(changePage);
let recupDetail 
function functionDetailPays(datailPays) {
  datailPays.forEach(paysContries => {
    document.querySelector("img").src = paysContries.flags.png
    document.querySelector(".title").innerHTML = paysContries.name.common
    document.querySelector(".div1").innerHTML += ` <span>${paysContries.population}</span>`
    document.querySelector(".div2").innerHTML += ` <span>${paysContries.region}</span>`
    document.querySelector(".div3").innerHTML += ` <sapn/${paysContries.subregion}</span`
    document.querySelector(".div4").innerHTML += ` <span>${paysContries.capital}</span>`
    document.querySelector(".div5").innerHTML += ` <span>${paysContries.tld}</span>`
    const currenciePays = paysContries.currencies;
    const currencies = Object.values(currenciePays).map(currency => currency.name);
    document.querySelector(".div6").innerHTML += ` ${currencies}`
    const languagePays = paysContries.languages;
    const language = Object.values(languagePays).map(language => language);
    document.querySelector(".div7").innerHTML += ` ${language}`
  })
}  

  fetch(`https://restcountries.com/v3.1/capital/${countryId}`)
  .then(response => response.json())
  .then(newResponse => {
    recupDetail = newResponse;
    functionDetailPays(recupDetail);

    
  })
  
  .catch(error => {
    console.error('Une grosse erreur s\'est produite :', error);
  });

  back.addEventListener("click", () => {
    window.location.href = "index.html";
  });

 
