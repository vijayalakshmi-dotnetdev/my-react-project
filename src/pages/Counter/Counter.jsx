import { useSelector, useDispatch } from 'react-redux';
import { calculate, clearResult } from './counter.slice';
import { useState } from 'react';

export default function Counter() {

    const [inputval, setInputval] = useState('')
    const [firstinputval, setFirstInputval] = useState('')
    const [secondinputval, setSecondInputval] = useState('')
    const [operator, setOperator] = useState('')
    const [equaloperator, setEqualOperator] = useState('');
    const dispatch = useDispatch()
    const result = useSelector((state) => state?.counter?.result)

    const handleOperator = (op) => {
        dispatch(clearResult());
        setFirstInputval(inputval);
        setOperator(op);
        setInputval('');
        setSecondInputval('');
        setEqualOperator('');
    }

    const handleEqual = () => {
        setSecondInputval(inputval)
        setEqualOperator('='); 
        dispatch(calculate({
            first: Number(firstinputval),
            second: Number(inputval),
            operator: operator
        }))
        setInputval('')
    }

    return <div>
        <h3>Calculator</h3>
        <div>
            <input id='inputval' name='inputval' value={inputval} onChange={(e) => setInputval(e.target.value)}></input>
            <h5> {firstinputval} {operator} {secondinputval} {equaloperator} {result}</h5>
            <button onClick={() => handleOperator('+')}>+ </button>
            <button style={{ marginLeft: "10px" }} onClick={() => handleOperator('-')} >- </button>
            <button style={{ marginLeft: "10px" }} onClick={() => handleOperator('*')} >* </button>
            <button style={{ marginLeft: "10px" }} onClick={() => handleOperator('/')} >/ </button>
            <button style={{ marginLeft: "10px" }} onClick={handleEqual} >=</button>

        </div>
    </div>
}