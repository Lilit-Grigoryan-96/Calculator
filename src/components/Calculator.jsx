import React,{useState} from 'react'
import classes from './calculator.module.css'

const Calculator = () =>{
    const [value, setValue] = useState('');
    function handleChange(e) {
        setValue(value + e.target.name)
    }
    function clear() {
        setValue('');
    }
    function calculate() {
        setValue(eval(value))
    }
    return (
        <div className={classes.colculator_container}>
            <form className={classes.colculator_form}>
                <input type="text" value={value} onChange={event => {setValue(event.target.value)}}/>
            </form>
            <div className={classes.colculator}>
                <button onClick={handleChange} name="7">7</button>
                <button onClick={handleChange} name="8">8</button>
                <button onClick={handleChange} name="9">9</button>
                <button onClick={handleChange} name="/" className={classes.operator}>/</button>
                <button onClick={handleChange} name="4">4</button>
                <button onClick={handleChange} name="5">5</button>
                <button onClick={handleChange} name="6">6</button>
                <button onClick={handleChange} name="*" className={classes.operator}>x</button>
                <button onClick={handleChange} name="1">1</button>
                <button onClick={handleChange} name="2">2</button>
                <button onClick={handleChange} name="3">3</button>
                <button onClick={handleChange} name="+" className={classes.operator}>+</button>
                <button onClick={handleChange} name=".">.</button>
                <button onClick={handleChange} name="0">0</button>
                <button onClick={calculate}>=</button>
                <button onClick={handleChange} name="-" className={classes.operator}>-</button>
                <button onClick={clear} className={classes.clear_btn}>Clear</button>
            </div>
        </div>
    )
};

export default Calculator;