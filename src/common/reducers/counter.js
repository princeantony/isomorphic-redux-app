import { SET_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';

export default function counter(state = 0, action) {
    switch (action.type) {
        case SET_COUNTER:
            return action.payload, 1;
        case INCREMENT_COUNTER:
            if (state === 7) {
                throw new Error('Bad Error')
            }
            return state + 1;
        case DECREMENT_COUNTER:
            return state - 1;
        default:
            return state;
    }
}