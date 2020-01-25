import React, { Component } from 'react';
import Comp from './Comp';
import Chart from './Chart';

class CompAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            e: "",
            chart: false,
        }

        this.indexed = this.indexed.bind(this);

        this.handleChange = (event) => {
            this.setState({
                e: event.target.value
            })
    }
    const hourPrice = localStorage.getItem("hourPrice");
    const comp1 = localStorage.getItem(1) !== null ? localStorage.getItem(1).split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp2 = localStorage.getItem(2) !== null ? localStorage.getItem(2).split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp3 = localStorage.getItem(3) !== null ? localStorage.getItem(3).split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    /*    let comp4 = localStorage.getItem(localStorage.getItem(4));
            let comp5 = localStorage.getItem(localStorage.getItem(5));
        */

    const comp1firstShift = localStorage.getItem(1 + "firstShift") !== null ? localStorage.getItem(1 + "firstShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp1secondShift = localStorage.getItem(1 + "secondShift") !== null ? localStorage.getItem(1 + "secondShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp1thirdShift = localStorage.getItem(1 + "thirdShift") !== null ? localStorage.getItem(1 + "thirdShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;

    const comp2firstShift = localStorage.getItem(2 + "firstShift") !== null ? localStorage.getItem(2 + "firstShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp2secondShift = localStorage.getItem(2 + "secondShift") !== null ? localStorage.getItem(2 + "secondShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp2thirdShift = localStorage.getItem(2 + "thirdShift") !== null ? localStorage.getItem(2 + "thirdShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;

    const comp3firstShift = localStorage.getItem(3 + "firstShift") !== null ? localStorage.getItem(3 + "firstShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp3secondShift = localStorage.getItem(3 + "secondShift") !== null ? localStorage.getItem(3 + "secondShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp3thirdShift = localStorage.getItem(3 + "thirdShift") !== null ? localStorage.getItem(3 + "thirdShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;

    const comp4firstShift = localStorage.getItem(4 + "firstShift") !== null ? localStorage.getItem(4 + "firstShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp4secondShift = localStorage.getItem(4 + "secondShift") !== null ? localStorage.getItem(4 + "secondShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp4thirdShift = localStorage.getItem(4 + "thirdShift") !== null ? localStorage.getItem(4 + "thirdShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;

    const comp5firstShift = localStorage.getItem(5 + "firstShift") !== null ? localStorage.getItem(5 + "firstShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp5secondShift = localStorage.getItem(5 + "secondShift") !== null ? localStorage.getItem(5 + "secondShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp5thirdShift = localStorage.getItem(5 + "thirdShift") !== null ? localStorage.getItem(5 + "thirdShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;

    const comp6firstShift = localStorage.getItem(6 + "firstShift") !== null ? localStorage.getItem(6 + "firstShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp6secondShift = localStorage.getItem(6 + "secondShift") !== null ? localStorage.getItem(6 + "secondShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp6thirdShift = localStorage.getItem(6 + "thirdShift") !== null ? localStorage.getItem(6 + "thirdShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;

    const comp7firstShift = localStorage.getItem(7 + "firstShift") !== null ? localStorage.getItem(7 + "firstShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp7secondShift = localStorage.getItem(7 + "secondShift") !== null ? localStorage.getItem(7 + "secondShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp7thirdShift = localStorage.getItem(7 + "thirdShift") !== null ? localStorage.getItem(7 + "thirdShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;

    const comp8firstShift = localStorage.getItem(8 + "firstShift") !== null ? localStorage.getItem(8 + "firstShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp8secondShift = localStorage.getItem(8 + "secondShift") !== null ? localStorage.getItem(8 + "secondShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp8thirdShift = localStorage.getItem(8 + "thirdShift") !== null ? localStorage.getItem(8 + "thirdShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;

    const comp9firstShift = localStorage.getItem(9 + "firstShift") !== null ? localStorage.getItem(9 + "firstShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp9secondShift = localStorage.getItem(9 + "secondShift") !== null ? localStorage.getItem(9 + "secondShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp9thirdShift = localStorage.getItem(9 + "thirdShift") !== null ? localStorage.getItem(9 + "thirdShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;

    const comp10firstShift = localStorage.getItem(10 + "firstShift") !== null ? localStorage.getItem(10 + "firstShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp10secondShift = localStorage.getItem(10 + "secondShift") !== null ? localStorage.getItem(10 + "secondShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    const comp10thirdShift = localStorage.getItem(10 + "thirdShift") !== null ? localStorage.getItem(10 + "thirdShift").split(',').reduce((total, num) => Number(total) + Number(num)) : 0;
    
    
        this.shiftReport1 = () => {
            let millis = Number(comp1firstShift) + Number(comp2firstShift) + Number(comp3firstShift) + Number(comp4firstShift) + Number(comp5firstShift) + Number(comp6firstShift) + Number(comp7firstShift) + Number(comp8firstShift) + Number(comp9firstShift) + Number(comp10firstShift);
            let x = millis / 3600000 * Number(hourPrice);
            let y = x.toFixed(2);
            console.log(y + "$")
            return y + "$";
        }
        this.shiftReport2 = () => {
            let millis = Number(comp1secondShift) + Number(comp2secondShift) + Number(comp3secondShift) + Number(comp4secondShift) + Number(comp5secondShift) + Number(comp6secondShift) + Number(comp7secondShift) + Number(comp8secondShift) + Number(comp9secondShift) + Number(comp10secondShift);
            let x = millis / 3600000 * Number(hourPrice);
            let y = x.toFixed(2);
            console.log(y + "$")
            return y + "$";
        }
        this.shiftReport3 = () => {
            let millis = Number(comp1thirdShift) + Number(comp2thirdShift) + Number(comp3thirdShift) + Number(comp4thirdShift) + Number(comp5thirdShift) + Number(comp6thirdShift) + Number(comp7thirdShift) + Number(comp8thirdShift) + Number(comp9thirdShift) + Number(comp10thirdShift);
            let x = millis / 3600000 * Number(hourPrice);
            let y = x.toFixed(2);
            console.log(y + "$")
            return y + "$";
        }
        this.dailyReport = () => {
            let millis = Number(comp1) + Number(comp2) + Number(comp3)/* + Number(comp4) + Number(comp5)*/;
            let x = millis / 3600000 * Number(hourPrice);
            let y = x.toFixed(2);
            console.log(y + "$")
            return y + "$";
        }
        this.toggle = () => {
            this.setState({
                chart: !this.state.chart
            })
        }
    }

    hourPrice = () => {
            localStorage.setItem("hourPrice", this.state.e);
    }

    firstShiftStart = () => {
        var e = document.getElementById("firstShiftStart");
		var selectedItem = e.options[e.selectedIndex].value;
        localStorage.setItem("firstShiftStart", selectedItem);
        alert("First shift start succesfully entered!");
    }
    firstShiftEnd = () => {
        var e = document.getElementById("firstShiftEnd");
		var selectedItem = e.options[e.selectedIndex].value;
        localStorage.setItem("firstShiftEnd", selectedItem);
        alert("First shift end succesfully entered!");
    }

    secondShiftStart = () => {
        var e = document.getElementById("secondShiftStart");
		var selectedItem = e.options[e.selectedIndex].value;
        localStorage.setItem("secondShiftStart", selectedItem);
        alert("Second shift start succesfully entered!");
    }
    secondShiftEnd = () => {
        var e = document.getElementById("secondShiftEnd");
		var selectedItem = e.options[e.selectedIndex].value;
        localStorage.setItem("secondShiftEnd", selectedItem);
        alert("Second shift end succesfully entered!");
    }

    thirdShiftStart = () => {
        var e = document.getElementById("thirdShiftStart");
		var selectedItem = e.options[e.selectedIndex].value;
        localStorage.setItem("thirdShiftStart", selectedItem);
        alert("Third shift start succesfully entered!");
    }
    thirdShiftEnd = () => {
        var e = document.getElementById("thirdShiftEnd");
		var selectedItem = e.options[e.selectedIndex].value;
        localStorage.setItem("thirdShiftEnd", selectedItem);
        alert("Third shift end succesfully entered!");
    }

    indexed(i) {
        return i
    }
    render() {
        return (
            <div className="components">
                <Comp className="comp" nmb={this.indexed(1)} />
                <Comp className="comp" nmb={this.indexed(2)} />
                <Comp className="comp" nmb={this.indexed(3)} />
                <Comp className="comp" nmb={this.indexed(4)} />
                <Comp className="comp" nmb={this.indexed(5)} />
                <Comp className="comp" nmb={this.indexed(6)} />
                <Comp className="comp" nmb={this.indexed(7)} />
                <Comp className="comp" nmb={this.indexed(8)} />
                <Comp className="comp" nmb={this.indexed(9)} />
                <Comp className="comp" nmb={this.indexed(10)} />
               {/* <Comp className="comp" nmb={this.indexed(4)} />
                <Comp className="comp" nmb={this.indexed(5)} />
                <Comp className="comp" nmb={this.indexed(6)} />
                <Comp className="comp" nmb={this.indexed(7)} />
                <Comp className="comp" nmb={this.indexed(8)} />
                <Comp className="comp" nmb={this.indexed(9)} />
                <Comp className="comp" nmb={this.indexed(10)} />
                <Comp className="comp" nmb={this.indexed(11)} />
                <Comp className="comp" nmb={this.indexed(12)} />
                <Comp className="comp" nmb={this.indexed(13)} />
                <Comp className="comp" nmb={this.indexed(14)} />
                <Comp className="comp" nmb={this.indexed(15)} />
                <Comp className="comp" nmb={this.indexed(16)} />
                <Comp className="comp" nmb={this.indexed(17)} />
                <Comp className="comp" nmb={this.indexed(18)} />
                <Comp className="comp" nmb={this.indexed(19)} />
        <Comp className="comp" nmb={this.indexed(20)} /> */}

                <div id="adminDash">
                    <h2>Admin Dashboard</h2>
                <button onClick={this.toggle}>See Chart</button>
                {this.state.chart && (
                    <Chart />
                )}
                    
                <div id="reports">
                    <h2>Reports</h2>
                    <h4>Daily report</h4>
                {/*     <button onClick={this.dailyReport}>click</button> */}
                    {this.dailyReport()}
                    <h5>Shifts reports</h5>
                 {/*   <button onClick={this.shiftReport1}>Shift 1</button> */}
                    <h6>First shift: {this.shiftReport1()}</h6>
                 {/*   <button onClick={this.shiftReport2}>Shift 2</button> */}
                    <h6>Second shift: {this.shiftReport2()}</h6>
                    <button onClick={this.shiftReport3}>Shift3</button> 
                    <h6>Third shift: {this.shiftReport3()}</h6>
                </div>

                <h2>Techical adjustments</h2>
                <input type="number" placeholder="Enter hour price and press Enter" value={this.state.e} onChange={this.handleChange.bind(this)} onKeyDown={this.hourPrice} />
                <div id="firstShift">
                <select id="firstShiftStart">
                    <option value="None">Select first shift start</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                </select>
                <button id="btnFirstShiftStart" onClick={this.firstShiftStart}>Select</button>
                </div>
               
               <div>
                <select id="firstShiftEnd">
                    <option value="None">Select first shift end</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                </select>
                <button id="btnFirstShiftEnd" onClick={this.firstShiftEnd}>Select</button>
                </div>

                <div id="secondShift">
                <select id="secondShiftStart">
                    <option value="None">Select second shift start</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                </select>
                <button id="btnSecondShiftStart" onClick={this.secondShiftStart}>Select</button>
                </div>
               
               <div>
                <select id="secondShiftEnd">
                    <option value="None">Select second shift end</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                </select>
                <button id="btnSecondShiftEnd" onClick={this.secondShiftEnd}>Select</button>
                </div>

                <div id="thirdShift">
                <select id="thirdShiftStart">
                    <option value="None">Select third shift start</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                </select>
                <button id="btnThirdShiftStart" onClick={this.thirdShiftStart}>Select</button>
                </div>
               
               <div>
                <select id="thirdShiftEnd">
                    <option value="None">Select third shift end</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                </select>
                <button id="btnThirdShiftEnd" onClick={this.thirdShiftEnd}>Select</button>
                </div>

                </div>
            </div>
        );
    }
}

export default CompAll;