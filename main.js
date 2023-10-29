let myList = document.querySelector('.myList')
let mySelect = document.querySelector('#mySelect')
const form = document.querySelector("form")
const myDark = document.querySelector(".myDark")
myDark.addEventListener('click', () => {
    let body = document.body;
    let mybodis = body
    if (body.classList.contains("myBody")) {
      body.classList.add("myBodyDark");
      body.classList.remove("myBody");
    } else {
      body.classList.add("myBody");
      body.classList.remove("myBodyDark");
    }
})
let recupPays
function functionPays(dataPays) {
  myList.innerHTML = ""
  dataPays.forEach(pays => {
    const myCard = document.createElement("div");
    myCard.className = "col-12 col-lg-3  ";
    myCard.style.width = "20rem";
    myCard.innerHTML += `
      <div class="card ">
        <div class="myDivImage"><img src="${pays.flags.png}" class=" myImage" alt="image"></div>
        <div class="card-body myUl">
          <h5 class="card-title mb-3 ">${pays.name.common}</h5>
          <ul class= "">
            <li class="list-group-item ">
            <span class="fw-bold">Population</span> : ${pays.population}
            </li>
            <li class="list-group-item  bg-transparent">
            <span class="fw-bold">Region</span> : ${pays.region}
            </li>
            <li class="list-group-item  bg-transparent">
            <span class="fw-bold">Capital</span> : ${pays.capital}
            </li>
          </ul>
        </div>
      </div>
    `;
  
    myCard.addEventListener("click", () => {
      window.location.href = `detail.html?id=${pays.capital}`;
    });
  
        myList.appendChild(myCard);
      });
}

fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(newRes => {
    recupPays = newRes;
    functionPays(recupPays);

    
    form.addEventListener("input", (e) => {
      let recupValeur = e.target.value;
      myList.innerHTML = "";
      let recupFilter = recupPays.filter((element) =>
      element.name.common.toLowerCase().includes(recupValeur.toLowerCase()) 
      )
      functionPays(recupFilter);
      });
  })
  .catch(error => {
    console.error('Une erreur s\'est produite :', error);
  });

  mySelect.addEventListener('change', function(){
    fetch(`https://restcountries.com/v3.1/region/${mySelect.value}`)
   
    .then(pays => pays.json())
    .then(region => {
      recupPays = region
    functionPays(recupPays);
        console.log(mySelect.value);
     
   })

   form.addEventListener("input", (e) => {
    let recupValeur = e.target.value;
    
    let recupFilter = recupPays.filter((element) =>
    element.name.common.toLowerCase().includes(recupValeur.toLowerCase()) 
    )
    functionPays(recupFilter);
    });
  })

  
  
