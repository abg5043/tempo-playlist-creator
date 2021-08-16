import React, { useEffect, useState } from 'react';
import axios from 'axios';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Typography } from '@material-ui/core';

// @material-ui/icons

// core components

import styles from 'assets/jss/material-kit-react/views/homePageSections/appStyle';

const useStyles = makeStyles(styles);

export default function AppSection(props) {
  const [genres, setGenres] = useState({ selectedGenre: '', listOfGenresFromAPI: [] });
  const [userInfo, setUserInfo] = useState();
  const { token } = props;

  const classes = useStyles();

  const formatGenres = (genreArray) => {
    const tempArray = [];
    genreArray.forEach(
        (genre) => {
          tempArray.push(genre);
        }
    )
    console.log("GenreArray", tempArray)
    return tempArray;
  }

  useEffect(() => {

    if (token) {
      axios({
        method: 'GET',
        url: 'https://api.spotify.com/v1/recommendations/available-genre-seeds',
        headers: { Authorization: `Bearer ${token}` },
      }).then (genreResponse => {
        setGenres({
          selectedGenre: genres.selectedGenre,
          listOfGenresFromAPI: formatGenres(genreResponse.data.genres),
        })
      }).then( console.log("GENRES", genres.listOfGenresFromAPI));
      /* .then (listItems = genres.listOfGenresFromAPI.map((genre) =>
              // Correct! Key should be specified inside the array.
              <ListItem>
                <Typography className={classes.title}>{genre['name']}</Typography>
              </ListItem>)
          ); */

      fetch('https://api.spotify.com/v1/me', { headers: { Authorization: `Bearer ${token}` } })
          .then((response) => response.json())
          .then((userInfo) => {
            console.log(userInfo.id);
          });
    }




  }, [token]);

  const createPlaylist = (userInfo) => {
    fetch(`https://api.spotify.com/v1/users/${userInfo.id}/playlists`, {
      method: 'POST',
      body: JSON.stringify({
        name: 'Test Playlist',
        description: 'Super cool playlist if this works.',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ${token}`
      },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
  }
  console.log("Genres Done", genres);

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <List>
        {genres.listOfGenresFromAPI.map((genre) => (
          <ListItem>
            {genre}
          </ListItem>
        ))}

      </List>
    </div>
  );
}
