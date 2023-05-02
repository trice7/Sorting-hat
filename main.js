import {students} from './data/students.js';
import {card} from './data/card.js';
import {filterButtons} from './data/buttons.js';
import {modalStart} from './data/buttons.js';
import {studentApp} from './data/buttons.js';

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
// displayCards(students);



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


// Function to add a new student to the roster.
const newStudent = function (event){
  event.preventDefault();
  
  // If statement that will check for an image link and display a default image based on gender if no link is passed.
  let image = ''
  if (document.querySelector('#image-field').value === '' && document.querySelector('input[name= gender-radio]:checked').value === 'male'){
    image = 'images/avatar-m.png';
  }
  else if (document.querySelector('#image-field').value === '' && document.querySelector('input[name= gender-radio]:checked').value === 'female'){
    image = 'images/avatar-f.png';
  }
  else {image = document.querySelector('#image-field').value;}
  
  
  //Logic that will randomize the house assigned on input.
  const houseArray = ['Gryffindor', 'Ravenclaw', 'Hufflepuff', 'Syltherin'];
  const randHouse = Math.floor(Math.random() *4);



  let newObj = {
    id: students.length +1,
    name: document.querySelector('#name-field').value,
    house: houseArray[randHouse],
    gender: document.querySelector('input[name= gender-radio]:checked').value,
    avatar: image,
  }

  students.push(newObj);
  displayCards(students);
  document.querySelector('#submit-form').reset();
  
}
console.log(students);





const startApp = function (){
  document.querySelector('#btn-filter').innerHTML = filterButtons;
  document.querySelector('#form-init').innerHTML = modalStart;
  document.querySelector('#new-student').innerHTML = studentApp;
  displayCards(students);
}


startApp();

//Event Listeners
//Code that will listen for button presses on the filter and form and run the appropriate function.
document.querySelector('#submit-form').addEventListener('submit', newStudent);
document.querySelector("#btn-filter").addEventListener('click', filters);
