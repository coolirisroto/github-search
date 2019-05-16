import {
    LOADING_REPOSITORIES,
    REPOSITORIES_COMPLETED,
} from "./types";

import httpClient from './../../helpers/httpclient';
import AppSettings from '../../settings/app.settings'

export const searchRepositories = (term) => async dispatch => {
        dispatch({
            type: LOADING_REPOSITORIES,
            payload: ''
        })
        const request = {
            q:term,
            sort:'stars',
            order:'desc'
        }
        const response = await httpClient.get(`${AppSettings.GITHUB_API_URL}search/repositories`, request);
        dispatch({
            type: REPOSITORIES_COMPLETED,
            payload: response.items
        })
}

export const logSearch = (term) => async dispatch => {
    const request = {search: term};
    const response = await httpClient.post(`${AppSettings.LOGS_API_URL}logs`, request);
    console.log(response)
}