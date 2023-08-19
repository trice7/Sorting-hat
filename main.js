import {students} from './data/students.js';
import {card} from './data/card.js';
import {filterButtons} from './data/buttons.js';
import {modalStart} from './data/buttons.js';
import {studentApp} from './data/buttons.js';
import {landing} from './data/buttons.js';
import {deathEaters} from './data/students.js';
import { badCard } from './data/card.js';

//Render function that will display cards based on input
const renderPage = function (divId, item){
  const target = document.querySelector(divId)
  target.innerHTML = item;
  
}

//Initializer. This is what will run to display all cards.
const displayCards = function (array){
  let domString = ``;

  for (const i of array){
    domString += card(i);
  }
  return renderPage('#app', domString);
}

const displayExpelled = function (array){
  let domString = ``;

  for (const i of array){
    domString += badCard(i);
  }
  
  return renderPage('#wanted-board', domString);
}


//Filter function.

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
  const houseArray = ['Gryffindor', 'Ravenclaw', 'Hufflepuff', 'Slytherin'];
  const randHouse = Math.floor(Math.random() *4);
  
  let houseBadge = ''
  if (houseArray[randHouse] === 'Gryffindor'){
    houseBadge = 'images/grybadge.png'
  }
  else if(houseArray[randHouse] === 'Slytherin'){
    houseBadge = 'images/slybadge.png'
  }
  else if (houseArray[randHouse] === 'Hufflepuff'){
    houseBadge = 'images/hufbadge.png'
  }
  else if (houseArray[randHouse] === 'Ravenclaw'){
    houseBadge = 'images/ravbadge.png'
  };
  
  
  let newObj = {
    id: students.length +1,
    name: document.querySelector('#name-field').value,
    house: houseArray[randHouse],
    gender: document.querySelector('input[name= gender-radio]:checked').value,
    avatar: image,
    badge: houseBadge,
  }

  
  
  
  students.push(newObj);
  displayCards(students);
  document.querySelector('#submit-form').reset();
  
}

//Function to expel student and convert them to a Death Eater
const expel = function (e){

  //On clicking the "expel" button the ID is targeted and student is added to the deathEaters array.
  if (e.target.id.includes('expel')){
    const [, id] = e.target.id.split('--');
    const index = students.findIndex(e => e.id === Number(id));
    const badStudent = students.splice(index, 1);
    deathEaters.push(...badStudent);
    
  }

  //This loop converts the house to Death Eater.
  for (let item of deathEaters){
    item.house = 'Death Eater';
  }
  displayCards(students);
  displayExpelled(deathEaters);
}

const startup = function (e){
  renderPage('#landing', landing);
  renderPage('#new-student', studentApp);
  document.querySelector('#init-btn').addEventListener('click', startApp);
}



const startApp = function (){
  renderPage('#landing', "");
  renderPage('#btn-filter', filterButtons);
  renderPage('#form-init', modalStart);
  renderPage('#display-wanted', '<h2 id="de-banner">WANTED</h2>')
  renderPage('#expelled', "<div id='wanted-board'></div>")
  displayCards(students);
  displayExpelled(deathEaters);
  document.querySelector("#btn-filter").addEventListener('click', filters);
  document.querySelector('#submit-form').addEventListener('submit', newStudent);
  document.querySelector('#app').addEventListener('click', expel);
}


startup();

console.log(students);
