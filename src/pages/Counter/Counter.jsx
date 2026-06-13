import {useSelector, useDispatch } from 'react-redux';
import { add,sub,addBy10 } from './counter.slice';


export default function Counter() {

    const dispatch = useDispatch()
    const count = useSelector((state) => state?.counter?.count)
    

    return <div>
        <h3>Counter Page</h3>
        <div>
            <h4>count: {count} </h4>
            <button onClick={()=> dispatch(add())}>Add </button>
             <button onClick={()=> dispatch(addBy10({input:10}))}>Add By 10 </button>
            <button onClick={()=> dispatch(sub())}  disabled ={count==0}>Sub </button>

        </div>
    </div>
}