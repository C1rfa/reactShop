import React from 'react';

//Class
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
        );
    }
}

//Func

export const Clicker = props => {
    const [count, setCount] = React.useState(0);

    const increment = e => {
        if (e.target.innerHTML === '-') {
            setCount(count - 1);
        } else {
            setCount(count + 1);
        }   
    };

    return(
        <div>
            <button onClick={ increment }>-</button>
                { count }
            <button onClick={ increment }>+</button>
        </div>
    );
}


export default Click;
