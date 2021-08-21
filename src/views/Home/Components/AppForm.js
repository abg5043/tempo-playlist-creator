import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components


import styles from 'assets/jss/material-kit-react/views/homePage';
import SearchForm from "../../../components/SearchForm";

// Sections for this page

const useStyles = makeStyles(styles);

export default function AppForm() {

    const classes = useStyles();
    const { genres } = props;

    //IMPLEMENT A SLIDER FROM MATERIAL-UI

    return (
        <div>
            <SearchForm />
        </div>
    );
}
