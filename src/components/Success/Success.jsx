import React, {Component } from 'react';
import tick from './../../tick.svg'

class Success extends Component {
    cancel = () =>{
        this.props.cancel()
    }
    render(){
        return(
            <div className="form-container completed-section">
                <React.Fragment>
                <div className="confirm-card">
                    <div className="tick">
                        <img src={tick}/>
                    </div>
                    <div className="confirm-card-details">
                    <h2>Purchase Completed</h2>
                    <p>Please check your email to see details concerning this transaction</p>
                    <button 
                        onClick={this.cancel}
                    >Return Home</button>
                    </div>
                
                </div>
                </React.Fragment>
            </div>
           
        )

    }
}
export default Success