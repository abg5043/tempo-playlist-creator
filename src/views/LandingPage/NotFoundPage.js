import React from 'react';
import { Link } from 'react-router-dom';

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
import {Typography} from "@material-ui/core";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const NotFoundPage = (props) => {
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
            <div>
                <p>Page not found. Goto</p>
                <Link to="/landing-page">Home Page</Link>
            </div>


        </div>
    );
};
export default NotFoundPage;