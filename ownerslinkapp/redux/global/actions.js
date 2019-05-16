import {
    LOADING_REPOSITORIES,
    REPOSITORIES_COMPLETED,
    CURRENT_REPOSITORY,
    LOADING_COMMENTS,
    COMMENTS_COMPLETED
} from "./types";

import httpClient from './../../helpers/httpclient';
import AppSettings from '../../settings/app.settings';
import Moment from 'moment';

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
}

export const selectCurrentRepository = payload => ({
    type: CURRENT_REPOSITORY,
    payload
});


export const getComments = (ownerName, repo) => async dispatch => {
    dispatch({
        type: LOADING_COMMENTS,
        payload: ''
    })
    const response = await httpClient.get(`${AppSettings.GITHUB_API_URL}repos/${ownerName}/${repo}/comments`,{});
    const sortedArray  = response.sort((a,b) => new Date(b.created_at) - new Date(a.created_at) )
    
    dispatch({
        type: COMMENTS_COMPLETED,
        payload: sortedArray
    })
}
