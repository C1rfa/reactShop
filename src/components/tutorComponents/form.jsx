import React from 'react';


export class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            isAgreeWithTerms: false,
        }
    }


    inputHandler = e => {
        const type = e.target.type;

        switch(type) {
            case 'checkbox':
                this.setState({ [e.target.name]: e.target.checked });
                break;
            case 'email':
                this.setState({ [e.target.name]: e.target.value });
                break;
            default:
                break;
        }
    }

    submit = () => {
        const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!regEx.test(this.state.email)) {
            alert('Wrong Email');
        } else if (!this.state.isAgreeWithTerms) {
            alert('You didnt agree');
        }
    }

    render() {
        const {email, isAgreeWithTerms} = this.state;

        return (
            <div className="">
                <input type="email" name="email" placeholder="email" value={email} onChange={ this.inputHandler }/>
                <label htmlFor="">
                    <input type="checkbox" name="isAgreeWithTerms" onChange={ this.inputHandler } checked={isAgreeWithTerms}/>
                    I Agree with Terms and Conditions
                </label>
                <button onClick={ this.submit }>Send</button>
            </div>
        )
    }
}