import { useState } from "react"
import React from 'react'
import classes from './Counter.module.scss'



export const Counter = () => {
    const [count, setCount] = useState(0);


    const increment = () => {
        setCount(prev => prev + 1)
    }

    console.log('classes:', classes);

    return (
        <div>
            {count}
            <button className={classes.btn} onClick={increment}>increment</button>
        </div>
    )
}