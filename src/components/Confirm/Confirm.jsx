import React, {Component} from 'react'

class Confirm extends Component {
  continue = e => {
      e.preventDefault();
      this.props.nextStep()
    }

    render(){
        const { values, handleChange, stepTwo } = this.props;
        return( 
        <div className="form-container">
                <React.Fragment> 
                    <div className="header">
                        <h1>Complete Your Purchase</h1>
                    </div>
                    <div className="form-wrapper">
                        <div className="form-item">
                            <label htmlFor="name-on-card">
                                Name on Card <span>*</span>
                            </label>
                            <input 
                            id="name-on-card"
                            type="text" 
                            placeholder='Opara Linus Ahmed'
                            onChange={ handleChange('nameOnCard')}
                            />
                        </div>
                        <div className="form-item">
                            <div className="form-row">
                                <label htmlFor="card-type">
                                    Card Type <span>*</span>
                                </label>
                                <input 
                                    type="text"
                                    maxLength= {10}
                                    id="card-type" 
                                    placeholder='0909 2090 3562 3452'
                                    onChange={ handleChange('cardType')}
                                    required
                                    defaultValue= {values.cardType}
                                />
                            </div>
                            <div className="form-row">
                            <label htmlFor="card-type">
                                    Expiry Date <span>*</span>
                                </label>
                                <input 
                                    type="text"
                                    maxLength= {2}
                                    id="expiry-day" 
                                    placeholder='27'
                                    onChange={ handleChange('cardType')}
                                    required
                                    defaultValue= {values.cardType}
                                />
                                <input 
                                    type="text"
                                    maxLength= {2}
                                    id="expiry-month" 
                                    placeholder='02'
                                    onChange={ handleChange('cardType')}
                                    required
                                    defaultValue= {values.cardType}
                                />
                                <input 
                                    type="text"
                                    maxLength= {3}
                                    id="cvv" 
                                    placeholder='345'
                                    onChange={ handleChange('cvv')}
                                    required
                                    defaultValue= {values.cvv}
                                />
                            </div>
                            
                        </div>
                        <div className="form-item">
                            <button 
                                className='continue-btn'
                                onClick={this.continue}
                            
                            >Continue</button>
                            <button>Cancel Payment</button>
                        </div>
                    </div>
                    
                </React.Fragment>
            </div>) }
}

export default Confirm;