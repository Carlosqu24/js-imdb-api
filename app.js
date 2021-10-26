
const API_URL = "http://www.omdbapi.com/";
const API_KEY = "d1819171";


const showData = (title, actors, director, genres, producer, runtime, year, score, rating, img) => {
    const $imgPoster = document.querySelector('.poster img');
    const $info = document.querySelector('.info');

    $imgPoster.src = img;

    $info.children[0].innerHTML = `<b>Título:</b> ${title}`;
    $info.children[1].innerHTML = `<b>Actores:</b> ${actors}`;
    $info.children[2].innerHTML = `<b>Director:</b> ${director}`;
    $info.children[3].innerHTML = `<b>Géneros:</b> ${genres}`;
    $info.children[4].innerHTML = `<b>Productora:</b> ${producer}`;
    $info.children[5].innerHTML = `<b>Duración:</b> ${runtime}`;
    $info.children[6].innerHTML = `<b>Año:</b> ${year}`;
    $info.children[7].innerHTML = `<b>Puntaje:</b> ${score}/100`;
    $info.children[8].innerHTML = `<b>Clasificacón:</b> ${rating}`;
}

const getIMDBData = async (title, apiKey) => {
    const options = {
        method: 'GET',
        Headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    };

    const res = await fetch(`${API_URL}?i=${title}&apikey=${apiKey}`, options);
    const json = await res.json();

    console.log(json)

    // console.log(json);


    showData(json.Title, json.Actors, json.Director, json.Genre, json.Production, json.Runtime, json.Year, json.Metascore, json.Rated, json.Poster);
}

getIMDBData("tt3896198", API_KEY);

// console.log($info.children[0].textContent);


// showData();



