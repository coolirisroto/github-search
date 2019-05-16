import {
    LOADING_REPOSITORIES,
    REPOSOTORIES_FAILED,
    REPOSITORIES_COMPLETED,
    CURRENT_REPOSITORY,
    LOADING_COMMENTS,
    COMMENTS_COMPLETED,
    COMMENTS_FAILED
} from "./types";

const INITIAL_STATE = {
    loadingRepositories: false,
    repositoriesFailed: false,
    loadingComments: false,
    commentsFailed: false,
    repositories: [],
    currentRepository: {},
    comments:[]
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
            case CURRENT_REPOSITORY:
            return {
                ...state, 
                currentRepository: action.payload
            }
            case LOADING_COMMENTS:
            return {...state,
                loadingComments: true
            }
            case COMMENTS_FAILED:
            return {
                ...state,
                loadingComments: false,
                commentsFailed: true
            }            
            case COMMENTS_COMPLETED:
            return {...state,
                loadingComments: false,
                commentsFailed: false,
                comments: action.payload
            }                                    
        default:
            return state;
    }
}