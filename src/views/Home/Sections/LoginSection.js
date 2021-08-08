import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';

import loginStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/loginStyle";
import spotifyLogo from 'assets/img/Spotify_Logo_RGB_Green.png';
import {Scopes, SpotifyAuth} from "react-spotify-auth";

const dev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'



const useStyles = makeStyles(loginStyle);

export default function LoginSection() {
  const classes = useStyles();

  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL
  } = process.env

  const handlLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  }

  return (
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
                      'http://localhost:3000/redirect'
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
  );
}
