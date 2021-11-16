import React, { Component } from 'react';
class SingleCounter extends Component {
    constructor(props){
        super(props);
        this.state={
            count: 0,
            isActivate: false
        }
    }

    handleChangeCount(event){
        event.preventDefault();
        this.setState({
            count: (event.target.validity.valid) ? event.target.value : this.state.count
        })
    }
    handleIncrease = () => {
        this.setState({
            count: this.state.count+1
        });
    }
    handleDecrease = () => {
        if (this.state.count>0){
            this.setState({
                count: this.state.count-1
            });
        }
    }
    startTimer(){
        this.timerID = setInterval(()=>{
            this.setState({
                isActivate: true
            })
            if (this.state.count >0){
                this.setState({
                    count: this.state.count-1
                })
            }
            else
            {
                clearInterval(this.timerID);
                this.setState({
                    isActivate: false
                })
            } 
        },1000)
    }
    stopTimer(){
        clearInterval(this.timerID);
        this.setState({
            isActivate: false
        })
    }

    render() {
        return (
            <div>
                <br/>
                <input type='text' pattern='[0-9]*' size='15' onChange={this.handleChangeCount.bind(this)} value={this.state.count} name='countInput'/>
                <br/>
                <button onClick={this.handleIncrease} className=''>+</button>
                <button onClick={this.handleDecrease} className=''>-</button>
                <br/>
                <button onClick={this.state.isActivate? this.stopTimer.bind(this):
                    this.startTimer.bind(this)} className=''>
                        {this.state.isActivate ? `Stop` : `Start`}
                </button>
                <button style={{display: this.props.showDelete? '' : 'none'}}
                    onClick={()=>this.props.deleteCounter(this.props.id)}>
                        Delete
                </button>
                <br/>
            </div>
        );
    }
}

export default SingleCounter;