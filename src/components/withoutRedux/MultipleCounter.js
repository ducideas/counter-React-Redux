import React, { Component } from 'react';
import SingleCounter from './SingleCounter';

var counterNumber =1;
class MultipleCounter extends Component {
    constructor(props){
        super(props);
        this.state={
            counters: [
                {
                    id: 1,
                    counterValue: 0
                }
            ]
        }
    }
    addCounter = () => {
        let newCounter = {
            id: ++counterNumber,
            counterValue: 0
        };
        this.setState({
            counters: this.state.counters.concat(newCounter)
        });
    }
    deleteCounter = (id) => {
        let updateCounters = this.state.counters.filter(counter => counter.id!==id);
        this.setState({
            counters: updateCounters
        });
    }
    render() {
        let {counters} = this.state;
        return (
            <div>
                <button onClick={() => this.addCounter()} className=''>Add Counter</button>
                <div>
                    {
                        (counters || []).map((item)=>(
                            <SingleCounter key={item.id} id={item.id} deleteCounter={this.deleteCounter} showDelete={true}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default MultipleCounter;