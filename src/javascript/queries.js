import axios from "axios";

export const getUserId = (token) => {
    fetch('https://api.spotify.com/v1/me', { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => response.json())
        .then((userInfo) => {
            console.log(userInfo.id);
        });
}

export const getGenreSeeds = (setGenres) => {
    fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds', {headers: { Authorization: `Bearer ${token}` }})
        .then (genreResponse => {
            setGenres({
                selectedGenre: genres.selectedGenre,
                listOfGenresFromAPI: formatGenres(genreResponse.data.genres),
            })
    }).then( console.log("GENRES", genres.listOfGenresFromAPI));
}