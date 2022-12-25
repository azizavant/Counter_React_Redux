import React, {ChangeEvent} from 'react';
import './Settings.css'


export type SettingsPropsType = {
    setError: (value: string) => void
    setMaxValue: (value: number) => void
    setMinValue: (value: number) => void
    maxValue: number
    minValue: number
}

export const Settings = (props: SettingsPropsType) => {

    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(+e.currentTarget.value)
        if (+e.currentTarget.value <= props.minValue) {
            props.setError('invalid value!')
        } else {
            props.setError('')
        }
    }
    const onChangeHandlerMin = (e: ChangeEvent<HTMLInputElement>) => {
        let inputMinValue = +e.currentTarget.value
        props.setMinValue(inputMinValue)
        if (props.maxValue <= inputMinValue || inputMinValue < 0) {
            props.setError('invalid value!')
        } else {
            props.setError('')
        }
    }
    return (
        <div className='settings'>
            <div className='minInput'>
                <span style={{fontWeight: 'bold'}}>min value:</span>
                <input style={{
                    backgroundColor: props.minValue < 0 || props.minValue >= props.maxValue ? '#f88095' : "white",
                }}
                       value={props.minValue}
                       type={"number"}
                       onChange={onChangeHandlerMin}
                />
            </div>
            <div className='maxInput'>
                <span style={{fontWeight: 'bold'}}>max value:</span>
                <input style={{
                    backgroundColor: props.maxValue < 0 || props.minValue >= props.maxValue ? '#f88095' : "white",
                }}
                       value={props.maxValue}
                       type={"number"}
                       onChange={onChangeHandlerMax}
                />
            </div>
        </div>
    );
};
