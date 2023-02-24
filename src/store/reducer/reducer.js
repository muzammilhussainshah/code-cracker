import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
     currentUser: {}, 
    //  videoDetail: [], 
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.CURRENTUSER:
            return ({
                ...state,
                currentUser: action.payload
            }) 
        default:
            return state;
    }

}