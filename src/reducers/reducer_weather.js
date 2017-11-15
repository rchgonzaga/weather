import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {

    switch (action.type) {
        case FETCH_WEATHER:
            // doing a concat in the arrey, we're no mutating our data
            // state.concat([action.payload.data])
            return  [action.payload.data, ...state]
    }

    return state
}