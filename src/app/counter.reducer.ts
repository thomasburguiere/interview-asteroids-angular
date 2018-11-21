import { ActionTypes, CounterActions } from './counter.action';

const initialCountState: CountState = {
    value: 0
};

export interface CountState {
    value: number;
}

export function countReducer(state: CountState = initialCountState, action: CounterActions): CountState {
    switch (action.type) {
        case ActionTypes.Increment:
            return {...state, value: state.value + 1};

        case ActionTypes.Decrement:
            return {...state, value: state.value - 1};

        case ActionTypes.Reset:
            return {...state, value: 0};

        default:
            return state;
    }
}
