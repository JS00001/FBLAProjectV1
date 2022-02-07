export default function add(type, value) {
    return {
        type: 'ADD_FILTER',
        payload: {type, value},
    }
}

export function active(location) {
    return {
        type: 'SET_ACTIVE',
        payload: location,
    }
}