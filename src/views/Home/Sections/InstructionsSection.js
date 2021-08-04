import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Chat from '@material-ui/icons/Chat';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import InfoArea from 'components/InfoArea/InfoArea.js';

import styles from "assets/jss/material-kit-react/views/homePageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function InstructionsSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Instructions</h2>
          <h5 className={classes.description}>
            Our app is simple to use. Just follow these three steps, then repeat as many times as you like!
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Step 1: Select your cadence"
              description="Using the steps per minute slider, choose a target steps per minute."
              icon={DirectionsRunIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Step 2: Choose a style of music"
              description="Choose a style of music by inputting one genre, artist, and/or track. We'll recommend something
              similar! Feel free to also explore our optional parameters like energy level or danceability to
              really narrow things down."
              icon={MusicNoteIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Step 3: Add songs to your playlist"
              description="Add any tracks that interest you to your playlist."
              icon={PlaylistAddIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
