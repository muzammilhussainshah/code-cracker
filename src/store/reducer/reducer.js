import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    //  videoDetail: [], 
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // case ActionTypes.TRENDINGMOVIES:
        //     return ({
        //         ...state,
        //         trandingMovies: action.payload
        //     }) 
        default:
            return state;
    }

}