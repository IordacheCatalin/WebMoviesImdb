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

form.addEventListener("submit", getSearchResults);

function getSearchResults(event) {
  (event).preventDefault();
  console.log(input.value);
  const link = `https://online-movie-database.p.rapidapi.com/auto-complete?q=${input.value}}`;
  console.log(link);
  return link;
}

  fetch(link, options)
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

        const movieCard = `<li><h2>${title}</h2> <img src="${image}"/></li>`;
        document.querySelector(".movies").innerHTML += movieCard;
      });
    })
    .catch((err) => console.error(err));

