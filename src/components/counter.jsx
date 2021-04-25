import React, { Component } from 'react'
import './counter.css'

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            number : 0
        }
        this.clickHandler = this.clickHandler.bind(this)
        this.redHandler = this.redHandler.bind(this)
    }

    clickHandler() {
        this.setState(prevState => {
            return {
                number : prevState.number + 1
            }
        })
    }

    redHandler() {
        this.setState(prevState => {
            return {
                number : prevState.number - 1
            }
        })
    }

    render() { 
        return ( 
            <div className="counter_body">
                <div className="counter">
                    <div className="c_info">
                        <span className="btn1 btn_decrease" onClick={this.redHandler}>-</span>
                        <span>{this.state.number}</span>
                        <span className="btn1 btn_increase" onClick={this.clickHandler}>+</span> 
                    </div>
                </div>
            </div>
            
         );
    }
}
 
export default Counter;