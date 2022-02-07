import Data from '../data/data';

const defaultState = {
    Distance: 0,
    Rating: 0,
    Price: 0,
    Popularity: 0,
    Category: 0,
    Open: 0,
    Data,
}

const sortReducer = (state=defaultState , action) => {
    switch (action.type) {
        case 'ADD_FILTER':
            return {
                ...state,
                [action.payload.type]: action.payload.value
            };
        default:
            return state;
    }
}

export default sortReducer;