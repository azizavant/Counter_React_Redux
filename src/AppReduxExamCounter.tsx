import React, {useEffect, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './store/store';
import {Settings} from "./Components/Settings";
import {Counter} from "./Components/Counter";
import {incrementAC, resetAC, setValueSettingsAC} from "./store/counter-reducer";
import {Button} from "./Components/Button";


export type CounterType = {
    count: number
    max: number
    min: number
}

export function AppReduxExamCounter() {
    const counterState = useSelector<AppRootStateType, CounterType>(state => state.counter)
    const dispatch = useDispatch();
    console.log(counterState.count);
    let [minValue, setMinValue] = useState(counterState.min)
    let [maxValue, setMaxValue] = useState(counterState.max)
    let [error, setError] = useState('')

    const increment = () => {
        if (counterState.count < counterState.max) {
            dispatch(incrementAC())
        }
    }

    const reset = () => {
        dispatch(resetAC())
    }

    const setValueSettings = (maxValue: number, minValue: number) => {
            dispatch(setValueSettingsAC(maxValue, minValue))
    }
    return (
        <div className="App">
            <div className="Counter">
                <div className='countSet'>
                    <Counter error={error}
                             value={counterState.count}
                             max={counterState.max}
                    />
                    <Settings setError={setError}
                              setMaxValue={setMaxValue}
                              setMinValue={setMinValue}
                              maxValue={maxValue}
                              minValue={minValue}
                    />
                </div>
                <div className='app-buttons'>
                    <Button setValueSettings={setValueSettings}
                            increment={increment}
                            reset={reset}
                            value={counterState.count}
                            maxValue={maxValue}
                            minValue={minValue}
                            max={counterState.max}
                            min={counterState.min}
                            error={error}
                    />
                </div>
            </div>
        </div>
    )
}
