
const initialState = {
    hover: 0
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'HOVER':
            return {...state, hover: 1};
        case 'NOT_HOVER':
            return {...state, hover: 0};
        default:
            return state;
    }
}

export default rootReducer;