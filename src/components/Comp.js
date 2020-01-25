import React, { Component } from 'react';

class Comp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            on: false,
            main: false,
            open: false,
            start: false,
            end: false,
            timePast: "",
            input: false,
            inputValue: "",
            inputStartMillisec: "",
            inputStart: "",
            inputEnd: "",
            value: "",
            openStart: "",
            openEnd: "",
            hasPassed: false,
            openComponent: false,
            compDidMount: false,
            startMilis: ""
        }

        this.handleChange = this.handleChange.bind(this);

        const hourPrice = localStorage.getItem("hourPrice");

        const firstShiftStart = localStorage.getItem("firstShiftStart");
        const firstShiftEnd = localStorage.getItem("firstShiftEnd");
        const secondShiftStart = localStorage.getItem("secondShiftStart");
        const secondShiftEnd = localStorage.getItem("secondShiftEnd");
        const thirdShiftStart = localStorage.getItem("thirdShiftStart");
        const thirdShiftEnd = localStorage.getItem("thirdShiftEnd");


        this.msToTime = (duration) => {
            var milliseconds = parseInt((duration % 1000) / 100),
            seconds = parseInt((duration / 1000) % 60),
            minutes = parseInt((duration / (1000 * 60)) % 60),
            hours = parseInt((duration / (1000 * 60 * 60)) % 24);
    
            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;
    
            return hours + ":" + minutes + ":" + seconds;
        };
        this.openPrice = (millisecondsPlayed) => {
            let millsToMin = millisecondsPlayed / 1000 / 60;
            let minutePrice = Number(hourPrice) / 60;

            return (millsToMin * minutePrice).toFixed(2) + "$";
        }

        this.openPriceTimer = (millisecondsPlayed) => {
            let millsToMin = millisecondsPlayed / 1000 / 60;
            let minutePrice = Number(hourPrice) / 60;

            return (millsToMin * minutePrice).toFixed(2) + "$";
        }

        this.normalPrice = (money) => {
            let hourTime = money / Number(hourPrice); //1
            let paidToMillisec = hourTime * 60 * 60 * 1000; //millisec of paid time

            return paidToMillisec + this.state.inputStartMillisec;
        }

        this.normalPriceLS = (money) => {
            let hourTime = money / Number(hourPrice); //1
            let paidToMillisec = hourTime * 60 * 60 * 1000; //millisec of paid time
            let timeEnd = paidToMillisec + Number(localStorage.getItem(this.props.nmb + "normalStart"))
           console.log(this.msToTime(timeEnd))
            return timeEnd;
            
        }
        this.over = () => {
            let a = localStorage.getItem(this.props.nmb + "normalStart");
            let b = this.normalPrice(localStorage.getItem(this.props.nmb + "timePrice"));
            return this.msToTime(a + b);
        }

        this.toggle = () => {
            this.setState({
                on: !this.state.on
            })
        }
        this.toggleOpen = () => {
            this.setState({
                on:!this.state.on,
                open: !this.state.open,
                main: !this.state.main
            })
        }
        this.toggleStart = () => {
            this.setState({
                open: !this.state.open,
                start: !this.state.start,
                openStart: Date.now(),
            })
            localStorage.setItem(this.props.nmb + "started", Date.now());
            localStorage.setItem(this.props.nmb + "normalEnd", 24.00);
        }
        this.toggleEnd = () => {
            let nmbSuper = [localStorage.getItem(this.props.nmb)]; // get all values from LS
            this.setState({
                start: !this.state.start,
                end: !this.state.end,
                openEnd: Date.now(),
                timePast: "",
            })
            if (this.state.hasPassed !== false) {
                this.setState({
                    hasPassed: !this.state.hasPassed
                })
            } 
            localStorage.setItem(this.props.nmb, Date.now() - this.state.openStart); // set new value to LS
            let nmb = [localStorage.getItem(this.props.nmb)]; // get new value from LS
            let nmbConcat = nmb.concat(nmbSuper); // concat all values with new value 
            localStorage.setItem(this.props.nmb, nmbConcat); // set all values to LS
            localStorage.removeItem(this.props.nmb + "started");
            localStorage.removeItem(this.props.nmb + "normalEnd");

            let normalEnd = new Date().getHours();

            if(Number(normalEnd) >= firstShiftStart && Number(normalEnd) < firstShiftEnd) {
                localStorage.setItem(this.props.nmb + "firstShift", Date.now() - this.state.openStart); // set new value to LS
                let nmb = [localStorage.getItem(this.props.nmb + "firstShift")]; // get new value from LS
                let nmbConcat = nmb.concat(nmbSuper); // concat all values with new value 
                localStorage.setItem(this.props.nmb + "firstShift", nmbConcat);
            }
            if(Number(normalEnd) >= secondShiftStart && Number (normalEnd) < secondShiftEnd) {
                localStorage.setItem(this.props.nmb + "secondShift", Date.now() - this.state.openStart); // set new value to LS
                let nmb = [localStorage.getItem(this.props.nmb + "secondShift")]; // get new value from LS
                let nmbConcat = nmb.concat(nmbSuper); // concat all values with new value 
                localStorage.setItem(this.props.nmb + "secondShift", nmbConcat);
            }
            if(Number(normalEnd) >= thirdShiftStart && Number(normalEnd) < thirdShiftEnd) {
                localStorage.setItem(this.props.nmb + "thirdShift", Date.now() - this.state.openStart); // set new value to LS
                let nmb = [localStorage.getItem(this.props.nmb + "thirdShift")]; // get new value from LS
                let nmbConcat = nmb.concat(nmbSuper); // concat all values with new value 
                localStorage.setItem(this.props.nmb + "thirdShift", nmbConcat);
            }

        }
        this.toggleClose = () => {
                this.setState({
                    end: !this.state.end,
                    main: !this.state.main,
                    timePast: "",
                })
        }
        this.inputPay = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.setState({
                input: !this.state.input,
                main: !this.state.main,
                on: !this.state.on,
                inputStartMillisec: Date.now(),
                inputStart: this.msToTime(Date.now()),
                value: this.props.value
            })
            let nmbSuper = [localStorage.getItem(this.props.nmb)]; // get everything in LS for this component as array (for concat)

            localStorage.setItem(this.props.nmb, (this.normalPrice(this.state.inputValue) - this.state.inputStartMillisec).toFixed(0)); // push to LS
            
            let nmb = [localStorage.getItem(this.props.nmb)]; // get just pushed to LS (this erase by default LS existed values) example: 3600000 from LS
            let nmbConcat = nmb.concat(nmbSuper); // concat pushed and existing values => 3600000 concat [if something has in LS]
            localStorage.setItem(this.props.nmb, nmbConcat); // set concated array to LS (all values)

            localStorage.setItem(this.props.nmb + "normal", (this.normalPrice(this.state.inputValue) - this.state.inputStartMillisec).toFixed(0));
           
            localStorage.setItem(this.props.nmb + "normalStart", Date.now());
            localStorage.setItem(this.props.nmb + "timePrice", (this.state.inputValue)); //10

                let end = this.normalPriceLS(localStorage.getItem(this.props.nmb + "timePrice"));

                let normalEnd = new Date(end).getHours();
                let normalEndMinutes = new Date(end).getMinutes();
                
                localStorage.setItem(this.props.nmb + "normalEnd", normalEnd + '.' + normalEndMinutes)
                
                if(Number(normalEnd) >= firstShiftStart && Number(normalEnd) < firstShiftEnd) {
                        let getEverything = [localStorage.getItem(this.props.nmb + "firstShift")].filter(n => n !== null);
                        localStorage.setItem(this.props.nmb + "firstShift", (this.normalPrice(this.state.inputValue) - this.state.inputStartMillisec).toFixed(0));
                        let getJustPushedToLS = [localStorage.getItem(this.props.nmb + "firstShift")];
                        let concatedValues = getJustPushedToLS.concat(getEverything).filter(n => n !== null);
                        localStorage.setItem(this.props.nmb + "firstShift", concatedValues); 
                }
                if(Number(normalEnd) >= secondShiftStart && Number (normalEnd) < secondShiftEnd) {
                    let getEverything = [localStorage.getItem(this.props.nmb + "secondShift")];
                    localStorage.setItem(this.props.nmb + "secondShift", (this.normalPrice(this.state.inputValue) - this.state.inputStartMillisec).toFixed(0));
                    let getJustPushedToLS = [localStorage.getItem(this.props.nmb + "secondShift")];
                    let concatedValues = getJustPushedToLS.concat(getEverything);
                    localStorage.setItem(this.props.nmb + "secondShift", concatedValues); 
                }
                if(Number(normalEnd) >= thirdShiftStart && Number(normalEnd) < thirdShiftEnd) {
                    
                    let getEverything = [localStorage.getItem(this.props.nmb + "thirdShift")];
                    localStorage.setItem(this.props.nmb + "thirdShift", (this.normalPrice(this.state.inputValue) - this.state.inputStartMillisec).toFixed(0));
                    let getJustPushedToLS = [localStorage.getItem(this.props.nmb + "thirdShift")];
                    let concatedValues = getJustPushedToLS.concat(getEverything);
                    localStorage.setItem(this.props.nmb + "thirdShift", concatedValues); 
                    
                }     
        }
    }
        this.toggleCloseInput = () => {
            this.setState({
                input: !this.state.input,
                main: !this.state.main,
                inputEnd: "" 
            })
            localStorage.removeItem(this.props.nmb + "normal");

            localStorage.removeItem(this.props.nmb + "normalStart");
            localStorage.removeItem(this.props.nmb + "normalEnd");
            localStorage.removeItem(this.props.nmb + "timePrice");
        }
        this.hasPassed = () => {
            this.setState({
                hasPassed: !this.state.hasPassed
            })
        }
    }
    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        })
    }
    componentDidMount() {
        this.setState({
            openStart: localStorage.getItem(this.props.nmb + "started"),
        })
        if(localStorage.getItem(this.props.nmb + "started") !== null) {
            this.setState({
                main: !this.state.main,
                start: !this.state.start
            })
        }
        if(localStorage.getItem(this.props.nmb + "normal") !== null) {
                this.setState({
                    main: !this.state.main,
                    input: !this.state.input,
                    compDidMount: !this.state.compDidMount,
                })
        }
    }
    render() {
        const styles = { border: "1px solid black", marginBottom: "40px"};
        return (
            <div style={styles}>
               {!this.state.main && localStorage.getItem(this.props.nmb + "started") === null && (
                    <button onClick={this.toggle}>{`${this.props.nmb}`}</button>
               )}
                {this.state.on && (
                    <div>
                        <input type="number" placeholder="payment" onChange={this.handleChange} onKeyDown={this.inputPay.bind(this)}/>
                        <button onClick={this.toggleOpen.bind(this)}>Open</button>
                    </div>
                )}
                {this.state.open && (
                    <div>
                    <button onClick={this.toggleStart.bind(this)}>Start</button>
                    </div>
                )}
                {this.state.start && (
                    <div>
                        <h1>Component {this.props.nmb}</h1>
                        <h2>Time started: {this.msToTime(this.state.openStart)}</h2>
                        <button onClick={this.hasPassed.bind(this)}>Time/price untill now</button>
                            {this.state.hasPassed && (
                                <div>
                                    <h2>Time past: {this.msToTime(Date.now() - this.state.openStart)}</h2>
                                    <h2>Price: {this.openPriceTimer(Date.now() - this.state.openStart)}</h2>
                                </div>
                            )}
                        <button onClick={this.toggleEnd.bind(this)}>End</button>
                    </div>
                )}
                {this.state.end && (
                    <div>
                        <h1>Component {this.props.nmb}</h1>
                        <h2>Started: {this.msToTime(this.state.openStart)}</h2>
                        <h2>Finished: {this.msToTime(this.state.openEnd)}</h2>
                        <h2>Time played: {this.msToTime(this.state.openEnd - this.state.openStart)}</h2>
                        <h2>Price: {this.openPrice(this.state.openEnd - this.state.openStart)}</h2>
                        <button onClick={this.toggleClose.bind(this)}>Close</button>
                </div>
                )}
                {this.state.input && (
                    <div>
                        <h1>Component {this.props.nmb}</h1>
                        <h2>Time Start: {localStorage.getItem(this.props.nmb + "normal") !== null && this.state.compDidMount === true  ? this.msToTime(localStorage.getItem(this.props.nmb + "normalStart")) : this.state.inputStart}</h2>
                        <h2>Time End: {localStorage.getItem(this.props.nmb + "normal") !== null && this.state.compDidMount === true ? this.msToTime(this.normalPriceLS(localStorage.getItem(this.props.nmb + "timePrice"))) : this.msToTime(this.normalPrice(this.state.inputValue))}</h2>
                        <h2>Price: {localStorage.getItem(this.props.nmb + "normal") !== null && this.state.compDidMount === true ? localStorage.getItem(this.props.nmb + "timePrice") : this.state.inputValue}</h2>
                        <button onClick={this.toggleCloseInput.bind(this)}>Close</button>
                    </div>
                )}
            </div>
        );
    }
}

export default Comp;

/* Get all items from local storage - keys and values 
    console.log(Object.entries(localStorage));

    Get all keys from local storage
    const allKeys = () => {
            for ( var i = 0, len = localStorage.length; i < len; ++i ) {
                console.log( localStorage.getItem( localStorage.key( i ) ) );
              }
            }
    return allKeys();
*/
/*  Stopwatch/timer -> working too slow on live mode!

        this.timePast = () => {
            let d = Date.now();
            let n = 1;

            let start = this.state.openStart;

            setInterval(() => {
                this.setState({
                    timePast: d + (n++ * 10000) - start
                })
            }, 10000);
        } 
        OR
        setInterval(() => {
            return Date.now() + (n++ * 1000) - this.state.openStart
        }, 1000);
*/

