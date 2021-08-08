import React, {useState, useEffect} from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Parallax from 'components/Parallax/Parallax.js';

import styles from 'assets/jss/material-kit-react/views/landingPage.js';

// Sections for this page
import InstructionsSection from './Sections/InstructionsSection.js';
import AppSection from './Sections/AppSection';
import SectionPills from "../Components/Sections/SectionPills";

import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css'
import Cookies from 'js-cookie'
import { SpotifyApiContext, User, UserTop } from 'react-spotify-api'
import LoginSection from "./Sections/LoginSection";
import {Grid} from "@material-ui/core";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";



const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Home(props) {
    const [spotifyAuthToken, setSpotifyAuthToken] = useState()

    useEffect(() => {
        setSpotifyAuthToken(Cookies.get('spotifyAuthToken'))
        console.log(Scopes.all)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        console.log("Inside useEffect")
    }, [Cookies.get('spotifyAuthToken')])

    console.log("token?", spotifyAuthToken)

  const classes = useStyles();
  const { ...rest } = props;
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
        {...rest}
      />
      <Parallax filter image={require('assets/img/pexels-daniel-reche-3601094.jpg').default}>
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
                    <SectionPills />
                </SpotifyApiContext.Provider>
            ) : (
                <div className={classes.section}>
                    <h2 className={classes.title}>Let's get running!
                    </h2>
                    <div>
                        <Grid align="center">
                            <GridItem xs={8}  sm={8} md={6} >
                                <Card plain>
                                    <h4 className={classes.cardTitle}>
                                        Login to Spotify to get started
                                        <br />
                                    </h4>
                                    <CardBody>
                                        <p className={classes.description}>
                                            In order to link your built playlist to your account, you need to
                                            log in. Don't worry, we don't keep any of your data. Period.
                                        </p>
                                    </CardBody>
                                    <CardFooter className={classes.justifyCenter}>
                                        <SpotifyAuth
                                            redirectUri={
                                                'http://localhost:3000/home'
                                            }
                                            clientID='19e2d890bf8b4e5395b8c6053049d850'
                                            scopes={[
                                                Scopes.userReadPrivate,
                                                Scopes.userReadEmail,
                                                'user-top-read'
                                            ]}
                                        />
                                    </CardFooter>
                                </Card>
                            </GridItem>
                        </Grid>
                    </div>
                </div>
            )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
