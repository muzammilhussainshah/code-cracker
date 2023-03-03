import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
     currentUser: {}, 
     codeWithHints: [], 
     selectedLanguage:'en'
    //  videoDetail: [], 
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.CURRENTUSER:
            return ({
                ...state,
                currentUser: action.payload
            }) 
        case ActionTypes.SELECTEDLANGUAGE:
            return ({
                ...state,
                selectedLanguage: action.payload
            }) 
        case ActionTypes.CODEWITHHINTS:
            return ({
                ...state,
                codeWithHints: action.payload
            }) 
        default:
            return state;
    }

}