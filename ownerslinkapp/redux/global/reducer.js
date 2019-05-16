import {
    LOADING_REPOSITORIES,
    REPOSOTORIES_FAILED,
    REPOSITORIES_COMPLETED
} from "./types";

const INITIAL_STATE = {
    loadingRepositories: false,
    repositoriesFailed: false,
    repositories: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOADING_REPOSITORIES:
            return {...state,
                loadingRepositories: true
            }
        case REPOSOTORIES_FAILED:
            return {
                ...state,
                loadingRepositories: false,
                repositoriesFailed: true
            }
        case REPOSITORIES_COMPLETED:
            return {
                ...state, 
                loadingRepositories: false,
                repositoriesFailed: false,
                repositories: action.payload
            }
        default:
            return state;
    }
}