import React from 'react';
import './Button.css'

type ButtonPropsType = {
    setValueSettings: (maxValue: number, minValue: number) => void
    increment: () => void
    reset: () => void
    value: number
    maxValue: number
    minValue: number
    max: number
    min: number
    error: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <div className='button'>
            <button style={{width: '220px'}}
                    onClick={() => props.setValueSettings(props.maxValue, props.minValue)}
                    disabled={!!props.error}>SET-VALUE
            </button>
            <button onClick={props.increment}
                    disabled={props.max <= props.value || !!props.error}>INC
            </button>
            <button style={{width: '96px'}}
                    onClick={props.reset}
                    disabled={props.min === props.value || !!props.error}>RESET
            </button>
        </div>
    );
};

