import { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton'

const Counter = () => {

    const [count, setCount] = useState(0)

    const incrementCounterParentFunction = (by) => {
        setCount(count + by)
    }

    const decrementCounterParentFunction = (by) => {
        setCount(count - by)
    }    
    
    const resetCounter = () => {
        setCount(0)
    }    

    return (
        <>
            <CounterButton by={1} 
                incrementMethod={incrementCounterParentFunction} 
                decrementMethod={decrementCounterParentFunction}
            />
            
            <CounterButton by={2} 
                incrementMethod={incrementCounterParentFunction} 
                decrementMethod={decrementCounterParentFunction}
            />
            
            <CounterButton by={5} 
                incrementMethod={incrementCounterParentFunction} 
                decrementMethod={decrementCounterParentFunction}
            />

            <div>
                <span className="count">{count}</span>
            </div>

            <button className="resetButton" onClick={resetCounter}>Reset</button>
        </>
    )
}

export default Counter;