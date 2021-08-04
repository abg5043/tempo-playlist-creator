import React, {useState} from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import {get} from 'utils/api.js'

// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';

import styles from 'assets/jss/material-kit-react/views/homePageSections/teamStyle.js';

import team1 from 'assets/img/faces/avatar.jpg';
import team2 from 'assets/img/faces/christian.jpg';
import team3 from 'assets/img/faces/kendall.jpg';
import SearchForm from "../../../components/SearchForm";
import Loader from "../../../components/Loader";
import SearchResult from "../../../components/SearchResult";

const useStyles = makeStyles(styles);

export default function AppSection() {
  const [albums, setAlbums] = useState();
  const [artists, setArtists] = useState();
  const [playlist, setPlaylist] = useState();


  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid,
  );

  const handleSearch = (searchTerm) => {
  };

  console.log(initiateGetResult("Billy"))

  const initiateGetResult = async (searchTerm) => {
      try {
        const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
            searchTerm
        )}&type=album,playlist,artist`;

        const result = await get(API_URL);

        console.log(result);
        const { albums, artists, playlists } = result;
        setAlbums(albums);
        setArtists(artists);
        return setPlaylist(playlists);
      } catch (error) {
        console.log('error', error);
      }
  };


  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <SearchForm handleSearch={handleSearch}/>
    </div>
  );
}
