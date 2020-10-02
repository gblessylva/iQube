import React,  {Component } from 'react'

class Default extends Component {
    defaultStep = () =>{
        this.props.defaultStep()
    }
    render(){
        return(
            <div className="form-container completed-section">
                <h1>Default Purchase Page</h1>
                <div className="form-item-button">
                    <button
                    className="continue-btn"
                    onClick={this.defaultStep}
                    >Start Over</button>
                </div>
            </div>
        )
    }
}
export default Default;
