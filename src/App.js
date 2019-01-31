import React, {Component} from 'react';
import './App.css';
import {Number, Header} from "./components";

function createArray() {
    let nums = [], numsLen = 5, maxNum = 36, minNum = 5;
    while (nums.length < numsLen) {
        let num = Math.round(Math.random() * (maxNum - minNum)) + minNum;
        if (nums.indexOf(num) === -1) {
            nums.push(num);
        }
    }
    nums.sort(function (a, b) {
        return a - b
    });
    return nums;
}


class App extends Component {

    state = {
        numbers: []
    };

    newNumbers = () => {
        let numbers = createArray();
        this.setState({numbers})
    };

    render() {
        return (
            <div className='App'>
                <Header/>
                <div className='container'>
                    <button onClick={this.newNumbers}>получить числа</button>
                    <div>
                        {this.state.numbers.map(number => {
                            return <Number number={number}/>
                        })}</div>
                </div>
            </div>
        );
    };
}

export default App;
