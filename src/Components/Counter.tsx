import React from 'react';
import './Counter.css'

export type CounterPropsType = {
    value: number
    error: string
    max: number
}


export const Counter = (props: CounterPropsType) => {

    return (
        <div>
            <h1 className='count'
                style={{
                    color: props.error || props.value === props.max ? 'red' : "black",
                    backgroundColor: props.error ? 'pink' : "#7de6fc",
                    fontWeight: props.value === props.max ? 'bolder' : 'bold',
                }}>
                {props.error ? props.error : props.value}
            </h1>
        </div>
    );
};





"someData" ? ff : yh;