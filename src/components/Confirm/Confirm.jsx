import React, {Component} from 'react'

class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
      }  
    
    render(){
        const { handleChange } = this.props;
        return( 
        <div className="form-container">
                <React.Fragment> 
                <div className="header">
                        <h1>Complete Your Purchase</h1>
                        <div className="tabs">
                            <div className="tab-item">
                                <h2 >Personal Info</h2>
                            </div>
                            <div className="tab-item">
                                <h2>Billing</h2>
                            </div>
                            <div className="tab-item">
                                <h2 className="active">Confirm Payment</h2>
                                <div className="active-tab"></div>
                            </div>
                        </div>
                </div>
                <div className="confirm-header">
                            <div className="col-1">
                                Item
                            </div>
                            <div className="col-2">
                                N Price
                            </div>
                        </div>
                    <div className="confirm-card">
                        <div className="confirm-purchase-details">
                        <div className="col-1">
                                <p>Datascience and Usability</p>
                            </div>
                            <div className="col-2">
                               <p>50,000</p>
                            </div>
                        </div>
                        <div className="confirm-purchase-details">
                            <div className="col-1">
                                <p>Shipping</p>
                            </div>
                            <div className="col-2">
                               <p>0.00</p>
                            </div>
                        </div>
                        <div className="total">
                            <div className="col-1">
                                <p>Total</p>
                            </div>
                            <div className="col-2">
                               <p>50,000.00</p>
                            </div>
                    </div>
                    </div>
                    
                    <div className="form-item-button">
                            <button 
                                className='continue-btn'
                                onClick={this.continue}
                            
                            >Pay</button>
                        </div>
                    
                </React.Fragment>
            </div>) }
}

export default Confirm;