let section = document.querySelector('.section')
let mySelect = document.querySelector('#mySelect')
let langue =  document.querySelector('.langue')



fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(newRes => {
      newRes.forEach(pays => {
      const imagePays = pays.flags.svg;
      const paysPopulation = pays.area;
      const paysCapital = pays.capital;
      const paysRegion = pays.continents;
      const paysNames = pays.name.common

      // console.log(paysNames);

      const selectNames = document.createElement('option');
      selectNames.textContent = paysNames;

      mySelect.addEventListener('input', (e) => {
        document.body.innerHTML = `${e.target.value}`
      }) 


      const elementImage = document.createElement('img');
      elementImage.src = imagePays;
      elementImage.style.width = "30%"
      const myGrandDiv = document.createElement('div');
      const myDiv = document.createElement('div');
      
      const myPara = document.createElement('p');
      myPara.textContent = "Pays : " + paysNames;
      myPara.style.fontSize = "30px"

      const myPara1 = document.createElement('p');
      myPara1.textContent = "Population : " + paysPopulation;  
       myPara1.style.fontSize = "30px"

      const myPara2 = document.createElement('p');
      myPara2.textContent = "Capital : " + paysCapital;
      myPara2.style.fontSize = "30px"

      const myPara3 = document.createElement('p');
      myPara3.textContent = "Region : " + paysRegion;
      myPara3.style.marginBottom = "20px"
      myPara3.style.fontSize = "30px"

      

      // Créez un div pour chaque pays
      const divPays = document.createElement('div');
      divPays.appendChild(elementImage);
      myDiv.appendChild(myPara);
      myDiv.appendChild(myPara1);
      myDiv.appendChild(myPara2);
      myDiv.appendChild(myPara3);
      myGrandDiv.appendChild(myDiv);
      divPays.appendChild(myGrandDiv);


      mySelect.appendChild(selectNames);

      section.appendChild(divPays);
    });
  })
  .catch(error => {
    console.error('Une erreur s\'est produite :', error);
  });
  

 