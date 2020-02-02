import React, { Component } from 'react';

class QuizQuestionButton extends Component {
    constructor(props) {
        super(props)
    }

    handleClick() {
        this.props.clickHandler(this.props.button_text);
    }
    render() {
        return (            
        <li className="list-item"><button className="btn" onClick= {this.handleClick.bind(this)}>{this.props.button_text}</button></li>
        )
    }
}

export default QuizQuestionButton;