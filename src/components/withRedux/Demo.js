
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  incrementByID,
  decrementByID,
  selectCounter,
  selectCounters,
} from './multipleCounterReduxSlice';

var counterNumber = 1;

export default function Demo(props) {
    const count = useSelector(selectCounter);
    const counters = useSelector(selectCounters);
    const dispatch = useDispatch();
    
   
    return (
        <div>
            <br/>
            <input type='text' pattern='[0-9]*' size='15' value={count} name='countInput'
            />
            <br/>
            <button  className='' onClick={()=>dispatch(incrementByID())}>+</button>
            <button  className=''>-</button>
            <br/>
        </div>
    );
}