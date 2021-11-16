
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    increment,
    decrement,
    changeActivate,
    changeCount,
    selectCount,
    selectActivate,
} from './singleCounterReduxSlice';

var timer = null;


export default function  SingleCounterRedux(props) {
    const count = useSelector(selectCount);
    const activate=useSelector(selectActivate);
    const dispatch = useDispatch();
    const [countValue, setCountValue] = useState(0);
    
   
    const handleChange = (event) => {
        event.preventDefault();
        dispatch(changeCount(event.target.validity.valid ? event.target.value : count));
    }

    const startCountDown = () =>{
        if (count>0)
         //setActivate(!isActivate);
        dispatch(changeActivate());
    }
    useEffect(()  => {
        if (count <= 0) {
          dispatch(changeActivate(false));
          // setActivate(false);
        }
    }, [count])

    useEffect(() => {
        if (activate){
          clearInterval(timer);
          timer = setInterval(()=>{
            dispatch(decrement())
          }, 1000)
        }
        else {
          clearInterval(timer);
        }
    }, [activate])    

    return (
        <div>
            <input type='text' pattern='[0-9]*' size='15' value={count} name='countInput' onChange={handleChange}
            />
            <br/>
            <button  className='' onClick={()=>dispatch(increment())}>+</button>
            <button  className='' onClick={()=>dispatch(decrement())}>-</button>
            <br/>
            <button className='' onClick={startCountDown}>{activate ? `Stop` : `Start`}</button>
            <br/>
            <button style={{display: props.showDelete?'': 'none'}}
              onClick={()=>props.handleDeletecounter(props.id)}
            >
                Delete
            </button>
        </div>
    );
}