import {CounterType} from "../AppReduxExamCounter";

export type IncrementActionType = {
    type: 'INCREMENT'
}

export type ResetActionType = {
    type: 'RESET'
}

export type SetMaxValueSettingsActionType = {
    type: 'SET-VALUE-SETTINGS'
    maxValue: number
    minValue: number
}

export type ActionsType = IncrementActionType
    | ResetActionType
    | SetMaxValueSettingsActionType

export const initialState = {
    count: 0,
    max: 10,
    min: 0
}

export const counterReducer = (state: CounterType = initialState, action: ActionsType): CounterType => {
    switch (action.type) {
        case 'INCREMENT': {
            return {
                ...state,
                count: state.count + 1
            };
        }
        case 'RESET': {
            return {
                ...state,
                count: state.min
            };
        }
        case 'SET-VALUE-SETTINGS': {
            return {
                ...state,
                count: action.minValue,
                max: action.maxValue,
                min: action.minValue
            };
        }
        default:
            return state
    }
}

export const incrementAC = () => {
    return {type: 'INCREMENT'}
}
export const resetAC = () => {
    return {type: 'RESET'}
}
export const setValueSettingsAC = (maxValue: number, minValue: number) => {
    return {type: 'SET-VALUE-SETTINGS', maxValue, minValue: minValue}
}