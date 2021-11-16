import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    addCounter,
    deleteCounter,
    selectCounters,
    incrementByID,
    decrementByID,
    changeCountByID,
    changeActivateByID
} from './multipleCounterReduxSlice';

var counterNumber = 1;

export function MultipleCounterRedux() {
    const counters = useSelector(selectCounters);

    const [timerList, setTimerList] = useState([{ counterID: 1, timer: 0 }]); // [ {counterID: 1, timer: 23 },  {} ]
    const dispatch = useDispatch();

    const handleAddCounter = () => {
        let newCounter = {
            id: ++counterNumber,
            counterValue: 0,
            isActivate: false,
        }
        dispatch(addCounter(newCounter));
        setTimerList([...timerList, { counterID: newCounter.id, timer: 0 }]);
    }
    const handleDeletecounter = (id) => {
        let updateCounters = counters.filter(currentCounter => currentCounter.id !== id);
        var interval = timerList.find(item => item.counterID === id);
        if (interval) {
            clearInterval(interval.timer);
            setTimerList(timerList.filter(it => it.counterID !== interval.counterID));
        }
        dispatch(deleteCounter(updateCounters));
    }

    const handleChange = (event, counterId) => {
        event.preventDefault();
        var val = counters.find(it => it.id === counterId)
        let payload = event.target.validity.valid ? {
            id: counterId,
            value: event.target.value
        } : {
            id: counterId,
            value: val.counterValue
        };
        dispatch(changeCountByID(payload));
    }

    const startCountDown = (counterID) => {
        var val = counters.find(item => item.id === counterID);
        if (val.counterValue > 0)
            dispatch(changeActivateByID({
                id: counterID,
                isActivate: !val.isActivate
            }));
    }

    useEffect(() => {
        counters && counters.forEach(it => {      
            if (it.counterValue <= 0 && it.isActivate) {
                dispatch(changeActivateByID({
                    id: it.id,
                    isActivate: false
                }));
            }
            var interval = timerList.find(item => item.counterID === it.id);
            if (it.isActivate) {
                clearInterval(interval.timer);
                interval.timer = setInterval(() => {
                    dispatch(decrementByID(it.id))
                }, 1000)
            }
            else {
                clearInterval(interval.timer);
            }
        })
    }, [counters])

    return (
        <div>
            <button onClick={handleAddCounter}>Add Counter</button>
            <div>
                {
                    (counters || []).map((item) => (
                        <div key={item.id} id={item.id}>
                            <br />
                            <input type='text' pattern='[0-9]*' size='15' value={item.counterValue} name='countInput'
                                onChange={e => handleChange(e, item.id)}
                            />
                            <br />
                            <button className='' onClick={() => dispatch(incrementByID(item.id))}>+</button>
                            <button className='' onClick={() => dispatch(decrementByID(item.id))}>-</button>
                            <br />
                            <button className='' onClick={() => startCountDown(item.id)}>{item.isActivate ? `Stop` : `Start`}</button>
                            <br />
                            <button
                                onClick={() => handleDeletecounter(item.id)}
                            >
                                Delete
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}