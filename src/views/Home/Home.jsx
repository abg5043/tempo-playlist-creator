import React, { useState, useEffect } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Parallax from 'components/Parallax/Parallax.js';

import styles from 'assets/jss/material-kit-react/views/homePage';

// Sections for this page
import InstructionsSection from './Sections/InstructionsSection.jsx';
import AppSection from './Sections/AppSection';
import SectionPills from '../Components/Sections/SectionPills';

import 'react-spotify-auth/dist/index.css';
import Cookies from 'js-cookie';
import { SpotifyApiContext } from 'react-spotify-api';
import LoginSection from './Sections/LoginSection';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);
const parallaxImage = require('assets/img/parallaxImage.jpg').default;

export default function Home() {
  const [spotifyAuthToken, setSpotifyAuthToken] = useState();

  useEffect(() => {
    setSpotifyAuthToken(Cookies.get('spotifyAuthToken'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Cookies.get('spotifyAuthToken')]);

  const classes = useStyles();

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        appName="Tempo Playlist Creator"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 225,
          color: 'white',
        }}
      />
      <Parallax filter image={parallaxImage}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Running at Your Tempo.</h1>
              <h4>
                Running cadence is an important stat for any runner. Tempo allows you to create
                endless personalized Spotify playlists at a specific beat per minute.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <InstructionsSection />
          {Cookies.get('spotifyAuthToken') ? (
            <SpotifyApiContext.Provider value={spotifyAuthToken}>
              <AppSection token={spotifyAuthToken} />
            </SpotifyApiContext.Provider>
          ) : (
            <>
              <LoginSection />
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
