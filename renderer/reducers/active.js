const defaultState = {}

const activeReducer = (state=defaultState, action) => {
    switch (action.type) {
        case 'SET_ACTIVE':
            return action.payload;
        default:
            return state;
    }
}

export default activeReducer;