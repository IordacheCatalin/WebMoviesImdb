const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "97d858ad24mshb79c5ee6697820dp148437jsn9b8d3620da87",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const btnSub = document.getElementById("btnSubmit");
const input = document.getElementById("inputText");
const form = document.getElementById("myForm");
const btnprint = document.getElementById("print");
const imgBody = document.getElementById("imgPlace");
const imgBody2 = document.getElementById("imgPlace2");

input.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    getData(e);
  }
});

btnprint.addEventListener("click", printScreen);

function printScreen() {
  window.print();
}

btnSub.addEventListener("click", getData);

function getData(e) {
  e.preventDefault();
  // document.getElementById("imgPlace").id = "imgPlaceDisplay";  For the case when you want diferent background
  // document.getElementById("imgPlace2").id = "imgPlaceDisplay2";
  // imgBody = document.getElementById("imgPlaceDisplay");
  // imgBody2 = document.getElementById("imgPlaceDisplay2");
  data =
    "https://online-movie-database.p.rapidapi.com/auto-complete?q=" +
    input.value;
  console.log(data);
  fetch(data, options)
    .then((response) => response.json())
    .then((data) => {
      const movies = data.d;
      console.log(data);

      movies.map((movie) => {
        const title = movie.l;
        const image = movie.i.imageUrl;
        const gender = movie.qid;
        const rank = movie.rank;
        const year = movie.y;
        const actors = movie.s;

        const movieCard = `
        <li id="newMovie">
        <h2>${title}</h2>
        <h4>${actors}</h4>
        <p>Year: ${year} ${" "}  Rank:${rank}</p> 
        
        <button class="deleteBtn" onclick="Delete(this);">Delete</button>
        <h3>${gender}</h3>
        
       
        <img class="movieImage" src="${image}"/>
        </li>`;

        document.querySelector(".movies").innerHTML += movieCard;

        // document.body.classList.add("newBody") adding class to body
      });
    })
    .catch((err) => console.error(err));

  return data;
}

function Delete(event) {
  event.parentNode.parentNode.removeChild(event.parentNode);
}

//Body image change in loop

let images = [
  "./Asset/MovieImage/1.jpg",
  "./Asset/MovieImage/2.jpg",
  "./Asset/MovieImage/3.jpg",
  "./Asset/MovieImage/4.jpg",
  "./Asset/MovieImage/5.jpg",
  "./Asset/MovieImage/6.jpg",
  "./Asset/MovieImage/7.jpg",
  "./Asset/MovieImage/8.jpg",
  "./Asset/MovieImage/9.jpg",
  "./Asset/MovieImage/10.jpg",
];

let index = 0;

function imgChange() {
  imgBody.src = images[index];
  index > 8 ? (index = 0) : index++;
}

setInterval(imgChange, 2000);

//Body image change in loop 2 when media query is active

let images2 = [
  "./Asset/MovieImage/8.jpg",
  "./Asset/MovieImage/6.jpg",
  "./Asset/MovieImage/4.jpg",
  "./Asset/MovieImage/2.jpg",
  "./Asset/MovieImage/1.jpg",
  "./Asset/MovieImage/10.jpg",
  "./Asset/MovieImage/3.jpg",
  "./Asset/MovieImage/9.jpg",
  "./Asset/MovieImage/7.jpg",
  "./Asset/MovieImage/5.jpg",
];

function imgChange2() {
  imgBody2.src = images2[index];
  index > 8 ? (index = 0) : index++;
}

setInterval(imgChange2, 2000);
