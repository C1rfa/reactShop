import React, { useEffect } from 'react';

//class
export class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isStarted: false,
            time: 0,
        }
    }

    componentDidMount() {
        const state = JSON.parse(localStorage.getItem('state'))
        if (state.isStarted) {
            this.setTimer();
        }
        this.setState(state);
    }

    componentDidUpdate() {
        localStorage.setItem('state', JSON.stringify(this.state));
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    handleStartStop = () => {
        !this.state.isStarted ? this.setTimer() : clearInterval(this.timerId);
        this.setState({ isStarted: !this.state.isStarted });
    }

    handleReset = () => {
        clearInterval(this.timerId);
        this.setState({
            isStarted: false,
            time: 0,
        });
    }

    setTimer = () => {
        this.timerId = setInterval( () => this.setState({ time: this.state.time + 1 }), 1000);
    }

    render() {
        return (
            <div>
                <h1>React Timer</h1>
                <h3>{ this.state.time }</h3>
                { this.state.isStarted ? <button onClick={ this.handleStartStop }>stop</button> : <button onClick={ this.handleStartStop }>start</button>}
                <button onClick={ this.handleReset }>reset</button>
            </div>
        )
    }
}


//funct


export const TimerFunc = props => {
    const state = JSON.parse(localStorage.getItem('state'))
    const [isStarted, chnageStarted] = React.useState(state ? state.isStarted : false);
    const [time, changeTime] = React.useState(state ? state.time : 0);
    const timerID = React.useRef(null);

    const handleStartStop = () => {
        chnageStarted(!isStarted);
    }

    const handleReset = () => {
        chnageStarted(false);
        changeTime(0);
    }

    const setTimer = () => {
        timerID.current = setInterval(() => changeTime(prevTime => prevTime + 1), 1000);
    }

    const saveToLocalStorage = () => {
        const state = {
            time: time,
            isStarted: isStarted
        };
        localStorage.setItem('state', JSON.stringify(state));
    }

    useEffect(() => {
        saveToLocalStorage();
    }, [time])


    useEffect(() => {
        saveToLocalStorage();
        isStarted ? setTimer() : clearInterval(timerID.current);
        return () => {
            clearInterval(timerID.current);
        };
    }, [isStarted]);


    return(
        <div>
            <h1>React Timer</h1>
            <h3>{ time }</h3>
            { isStarted ? <button onClick={ handleStartStop }>stop</button> : <button onClick={ handleStartStop }>start</button>}
            <button onClick={ handleReset }>reset</button>
        </div>
    );

};


export default Timer;