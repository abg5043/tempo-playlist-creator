import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import InstructionsSection from "./Sections/InstructionsSection.js";
import AppSection from "./Sections/AppSection";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
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
                    color: "white",
                }}
                {...rest}
            />
            <Parallax filter image={require("assets/img/pexels-daniel-reche-3601094.jpg").default}>
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
                    <AppSection />
                </div>
            </div>
            <Footer />
        </div>
    );
}
