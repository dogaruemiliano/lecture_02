console.log("Hello from src/index.js!");
console.log("lets' do  js day 2!");

document.querySelector('p').style.color = 'red';

// I want to select my players
// Query selector and getElementById only finds the first one
// document object is the same as the DOM(document object model)
const list = document.getElementById('players');
console.log(list);

// console.log(document.querySelector('#players'));


// I want to be able to add a list item called Luke
// list.insertAdjacentHTML('beforeend', "<li>Luke</li>");
// list.insertAdjacentHTML('beforeend', "<li>Juan</li>");


// const liItem = list.querySelector(".red")
// console.log(liItem);

// I want to select all the list items from my ol fifa-wins
// const winners = document.querySelectorAll('#fifa-wins li')
// console.log(winners);

// winners.forEach((element) => {
//   console.log(element.innerText);
// })

// i want to append an li france 2 wins
// const listWinners = document.querySelector('#fifa-wins');

// listWinners.insertAdjacentHTML('beforeend', "<li>France (2 wins)</li>");

// listWinners.style.display = "none";


// const emailInput = document.getElementById("email");
// console.log(emailInput.value);

// emailInput.value = "bob@gmail.com"
// console.log(emailInput.value)


// const home = document.getElementById("home");
// console.log(home.innerText);
// console.log(home.innerHTML);
// console.log(home.attributes.href.value);

// I'm grabbing the user element thanks to the id
// const boris = document.getElementById('user');
// console.log(boris)
// // i want to return the value of the dataset uid
// console.log(boris.dataset.uid);
// // i want the value of the dataset githubnickname
// console.log(boris.dataset.githubNickname);

// // 1.select the element
// const img = document.getElementById('romain')
// // 2.attach an event listener to it
// // img.addEventListener(eventType, callbackfunction)
// img.addEventListener('click', (event) => {
//   // console.log(event); for you as a dev
//   // console.log(event.currentTarget); // for you as a dev
//   event.currentTarget.classList.toggle("img-circle");
// })


const images = document.querySelectorAll('img');

images.forEach((img) => {
  img.addEventListener('click', (event) => {
    // debugger
    // console.log(event.currentTarget);
    event.currentTarget.classList.toggle("img-circle");
  });
});


















