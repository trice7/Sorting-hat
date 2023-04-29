import {students} from './data/students.js';
import {card} from './data/card.js';


//Render function that will display cards based on input
const renderPage = function (divId, item){
  const target = document.querySelector(divId)
  target.innerHTML = item;
  
}

//Initializer. This is what will run to display all cards.
const displayCards = function (array){
  let domString = ``;
  //Both of these loops work.

  // array.forEach((item) =>{
  //   domString += card(item);
  // });

  // Fulfilling the alternate loop condition
  for (const i of array){
    domString += card(i);
  }
  return renderPage('#app', domString);
}

//Calling function to render cards. 
displayCards(students);



//Filter function. I am currently unable to do toLowerCase and still get it to work.

const filters = function (event){
  if (event.target.id === 'btn-all'){
    displayCards(students);
  }
  else if (event.target.id === 'btn-gry'){
    const gry = students.filter(item => item.house === "Gryffindor");
    displayCards(gry);
  }
  else if (event.target.id === 'btn-rav'){
    const rav = students.filter(item => item.house === 'Ravenclaw');
    displayCards(rav);
  }
  else if (event.target.id === 'btn-huf'){
    const huf = students.filter(item => item.house === 'Hufflepuff');
    displayCards(huf);
  }
  else if (event.target.id === 'btn-sly'){
    const sly = students.filter(item => item.house === 'Slytherin');
    displayCards(sly);
  }
}



document.querySelector("#btn-filter").addEventListener('click', filters);
