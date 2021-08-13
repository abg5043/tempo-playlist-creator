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

  const { token } = props;
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid,
  );

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://api.spotify.com/v1/recommendations/available-genre-seeds',
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      console.log(response.data.genres);
    });
    /*        .then (genreResponse => {
          setGenres({
            selectedGenre: genres.selectedGenre,
            listOfGenresFromAPI: genreResponse.data.categories.items
          })
        })
        .then(console.log('token???', token)); */
    /* .then (listItems = genres.listOfGenresFromAPI.map((genre) =>
            // Correct! Key should be specified inside the array.
            <ListItem>
              <Typography className={classes.title}>{genre['name']}</Typography>
            </ListItem>)
        ); */
  }, [token]);

  console.log(genres);

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <List className={classes.list}>
        {genres.listOfGenresFromAPI.map((genre) => (
          <ListItem>
            <Typography className={classes.title}>{genre.name}</Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
