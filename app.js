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



input.addEventListener("keydown", function(e) {
  if(e.code === "Enter"){
    getData(e);
  }});


btnprint.addEventListener("click", printScreen);

function printScreen() {
  window.print();
}

btnSub.addEventListener("click", getData)
 
 function getData(e) {
  e.preventDefault();
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
        
       
        <img src="${image}"/>
        </li>`;
        document.querySelector(".movies").innerHTML += movieCard;
      });
    })
    .catch((err) => console.error(err));

  return data;
};

function Delete(event) {
  event.parentNode.parentNode.removeChild(event.parentNode);
}


