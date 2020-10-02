import React, {Component} from 'react'

class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
      }  
    
    render(){
        const { handleChange } = this.props;
        return( 
        <div className="confirm-container">
                <React.Fragment> 
                    <div className="header">
                        <h1>Complete Your Purchase</h1>
                    </div>
                    <div className="confirm-card">
                        <div className="confirm-header">
                            <div className="col-1">
                                Item
                            </div>
                            <div className="col-2">
                                N Price
                            </div>
                        </div>
                        <div className="confirm-purchase-details">
                        <div className="col-1">
                                <p>Datascience and Usability</p>
                            </div>
                            <div className="col-2">
                               <p>50, 000</p>
                            </div>
                            <div className="col-1">
                                <p>Shipping</p>
                            </div>
                            <div className="col-2">
                               <p>0.00</p>
                            </div>
                        
                        </div>
                    </div>
                    
                    <div className="form-item">
                            <button 
                                className='continue-btn'
                                onClick={this.continue}
                            
                            >Pay</button>
                        </div>
                    
                </React.Fragment>
            </div>) }
}

export default Confirm;