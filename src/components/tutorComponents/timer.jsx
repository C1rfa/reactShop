import React from 'react';


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

export default Timer;