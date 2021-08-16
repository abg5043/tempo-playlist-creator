import React from 'react';
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

// @material-ui/icons

// core components
import GridItem from 'components/Grid/GridItem';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';

import { Scopes, SpotifyAuth } from 'react-spotify-auth';
import loginStyle from '../../../assets/jss/material-kit-react/views/homePageSections/loginStyle';

const useStyles = makeStyles(loginStyle);

export default function LoginSection() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <h2 className={classes.subTitle}>
        Login to get started!
      </h2>
      <div>
        <Grid align="center">
          <GridItem xs={8} sm={8} md={6}>
            <Card plain>
              <CardBody>
                <SpotifyAuth
                  redirectUri="http://localhost:3000/home"
                  clientID="19e2d890bf8b4e5395b8c6053049d850"
                  scopes={[
                    Scopes.userReadPrivate,
                    Scopes.userReadEmail,
                    Scopes.playlistModifyPrivate,
                    Scopes.playlistModifyPublic,
                    'user-top-read',
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </div>
    </div>
  );
}
