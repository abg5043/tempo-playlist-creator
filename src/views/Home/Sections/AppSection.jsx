import React, {useEffect, useState} from 'react';
import {Form} from 'react-bootstrap';

// nodejs library that concatenates classes

// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';

// core components
//Sections for this page

import styles from 'assets/jss/material-kit-react/views/homePageSections/appStyle';
import Button from "../../../components/CustomButtons/Button";
import {useQuery} from "react-query";


const useStyles = makeStyles(styles);

export default function AppSection(props) {
    const [genres, setGenres] = useState();
    const [userId, setUserId] = useState();

    const {token} = props;

    const classes = useStyles();

    const formatGenres = (genreArray) => {
        const tempArray = [];
        genreArray.forEach(
            (genre) => {
                if(genre == 'r-n-b') {
                    tempArray.push("R&B");
                } else if (genre.indexOf('-', 2) != -1) {
                    let tempStrArr = genre.split('-');
                    tempStrArr[0] = tempStrArr[0].charAt(0).toUpperCase() + tempStrArr[0].slice(1);
                    tempArray.push(tempStrArr.join(" "));
                } else {
                    tempArray.push(genre.charAt(0).toUpperCase() + genre.slice(1));
                }
            }
        )
        return tempArray;
    }

    useEffect(() => {
        if (token && !userId && !genres) {
            fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds', {headers: {Authorization: `Bearer ${token}`}})
                .then((response) => response.json())
                .then (genreResponse => {
                    setGenres(formatGenres(genreResponse.genres));
            })

            fetch('https://api.spotify.com/v1/me', { headers: { Authorization: `Bearer ${token}` } })
                .then((response) => response.json())
                .then((userInfo) => {
                    setUserId(userInfo.id);
                });
        }
    }, [token]);

/*    const {isLoading: genresLoading, error: genresError, data: genresData} = useQuery("genreSeeds", () =>
        fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds', {headers: {Authorization: `Bearer ${token}`}})
            .then((response) => response.json())
    );

    const {isLoading: userIdLoading, error: userIdError, data: userIdData} = useQuery("userId", () =>
        fetch('https://api.spotify.com/v1/me', {headers: {Authorization: `Bearer ${token}`}})
            .then((response) => response.json())
    );*/

    const createPlaylist = (userInfo) => {
        fetch(`https://api.spotify.com/v1/users/${userInfo.id}/playlists`, {
            method: 'POST',
            body: JSON.stringify({
                name: 'Test Playlist',
                description: 'Super cool playlist if this works.',
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${token}`
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    const testSubmit = (event) => {
        console.log(genres)
    }


    return (
        <div className={classes.section}>
            <h2 className={classes.title}>Choose Your Options</h2>
            <Form onSubmit={testSubmit}>
                <input value={bob} />
                <Button type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
}
