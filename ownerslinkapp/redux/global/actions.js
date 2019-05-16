import {
    LOADING_REPOSITORIES,
    REPOSITORIES_COMPLETED,
} from "./types";

import httpClient from './../../helpers/httpclient';

export const searchRepositories = (term) => async dispatch => {
        dispatch({
            type: LOADING_REPOSITORIES,
            payload: ''
        })
        const response = await httpClient.get(`https://api.github.com/search/repositories?q=${term}&sort=stars&order=desc`, {});
        console.log(response);
        dispatch({
            type: REPOSITORIES_COMPLETED,
            payload: response.items
        })
}