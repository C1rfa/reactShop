import React from 'react';


export class Click extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }
    }

    handleClick(isPlus) {
        isPlus ? this.setState({ count: this.state.count + 1 }) : this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div>
                <button onClick={  this.handleClick.bind(this, false) }>-</button>
                { this.state.count }
                <button onClick={ this.handleClick.bind(this, true) }>+</button>
            </div>
        )
    }
}

export default Click;