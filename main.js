let myList = document.querySelector('.myList')
let mySelect = document.querySelector('#mySelect')
const form = document.querySelector("form")
let recupPays


fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(newRes => {
    recupPays = newRes;
    functionPays(recupPays);
    function functionPays(data) {
      data.forEach(pays => {


        const myCard = document.createElement("div");
        myCard.className = "col-12 col-lg-3  mx-auto ";
        myCard.style.width = "18rem";
        myCard.innerHTML += `
          <div class="card ">
            <div class="myDivImage"><img src="${pays.flags.png}" class=" myImage" alt="image"></div>
            <div class="card-body">
              <h5 class="card-title mb-3 ">${pays.name.common}</h5>
              <ul class=" bg-transparent">
                <li class="list-group-item  bg-transparent ">
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
        
      
            myList.appendChild(myCard);
          });
    }

    form.addEventListener("input", (e) => {
      const recupValeur = e.target.value;
      myList.innerHTML = "";
      const recupFilter = recupPays.filter(
        (element) =>
          element.region.toLowerCase().includes(recupValeur.toLowerCase())
      );
      // console.log(dataFilter);
      functionPays(recupFilter);
      });
  })
  .catch(error => {
    console.error('Une erreur s\'est produite :', error);
  });
  
  
  

//   container.appendChild(countryCard);
// });
// }



 