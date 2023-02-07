const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "97d858ad24mshb79c5ee6697820dp148437jsn9b8d3620da87",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const search = "comedy";
const webLink =
  "https://online-movie-database.p.rapidapi.com/auto-complete?q=" + search;

fetch(webLink, options)
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
