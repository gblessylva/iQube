import React, {Component} from 'react'

class Billing extends Component {
  continue = e => {
      e.preventDefault();
      this.props.nextStep()
    }

    render(){
        const { values, handleChange} = this.props;
        return( 
        <div className="form-container">
                <React.Fragment> 
                    <div className="header">
                        <h1>Complete Your Purchase</h1>
                        <div className="header">
                        <h1>Complete Your Purchase</h1>
                        <div className="tabs">
                            <div className="tab-item">
                                <h2 >Personal Info</h2>
                            </div>
                            <div className="tab-item">
                                <h2 className="active">Billing</h2>
                                <div className="active-tab"></div>
                            </div>
                            <div className="tab-item">
                                <h2>Confirm Payment</h2>
                            </div>
                        </div>
                    </div>
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
                                <select 
                                    onChange={ handleChange('cardType')}
                                    defaultValue= {values.cardType}
                                >
                                    <option value="master" >Master Card</option>
                                    <option value="Visa">Visa</option>
                                    <option value="verve">Verve</option>
                                </select>
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
                                    onChange={ handleChange('expiry')}
                                    required
                                    defaultValue= {values.expiry.day}
                                />
                                <input 
                                    type="text"
                                    maxLength= {2}
                                    id="expiry-month" 
                                    placeholder='02'
                                    onChange={ handleChange('expiry')}
                                    required
                                    defaultValue= {values.expiry.month}
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

export default Billing;