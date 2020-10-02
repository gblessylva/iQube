import React, {Component} from 'react';

import './info.css'


class PersonalInfo extends Component {
  continue = e => {
      e.preventDefault();
      this.props.nextStep()
    }
    cancel = () =>{
        this.props.cancel()
    }

    render(){
        const { values, handleChange } = this.props;
        return( 
        <div className="form-container">
                <React.Fragment> 
                    <div className="header">
                        <h1>Complete Your Purchase</h1>
                        <div className="tabs">
                            <div className="tab-item">
                                <h2 className="active">Personal Info</h2>
                                <div className="active-tab"></div>
                            </div>
                            <div className="tab-item">
                                <h2>Billing</h2>
                            </div>
                            <div className="tab-item">
                                <h2>Confirm Payment</h2>
                            </div>
                        </div>
                    </div>
                    <div className="form-wrapper">
                        <div className="form-item">
                            <label htmlFor="fullname">
                                Name
                            </label>
                            <input 
                            id="fullname"
                            type="text" 
                            placeholder='Enter your full name'
                            onChange={ handleChange('fullName')}
                            />
                        </div>
                        <div className="form-item">
                            <label htmlFor="email">
                                Email <span>*</span>
                            </label>
                            <input 
                                type="email"
                                id="email" 
                                placeholder='email@user.com'
                                onChange={ handleChange('email')}
                                required
                                defaultValue= {values.email}
                            />
                        </div>
                        
                        <div className="form-item">
                            <label htmlFor="address-1">
                                Address 1 
                            </label>
                            <input 
                                type="text"
                                id="address-1" 
                                placeholder='The address of the user goes here'
                                onChange={ handleChange('Address1')}
                                defaultValue= {values.Address1}
                            />
                        </div>
                        <div className="form-item">
                            <label htmlFor="address-2">
                                Address 2 
                            </label>
                            <input 
                                type="text"
                                id="address-2" 
                                placeholder='And Here'
                                onChange={ handleChange('Address2')}
                                defaultValue= {values.Address2}
                            />
                        </div>
                        <div className="form-item iteml">
                            <div className="form-column">
                            <label htmlFor="lga">
                                Local Government 
                            </label>
                            <input 
                                type="text"
                                id="lga" 
                                placeholder='Surulere'
                                onChange={ handleChange('LGA')}
                                defaultValue= {values.LGA}
                            />
                            </div>
                            <div className="form-column">
                                <label htmlFor="soo">State</label>
                                <select
                                 onChange={handleChange('stateOfOrigin')} 
                                 name="stateOfOrigin"
                                 defaultValue="Lagos"
                                 
                                id="soo">
                                    <option value="Lagos" >Lagos</option>
                                    <option value="Rivers">Rivers State</option>
                                </select>
                            </div>
                            
                        </div>
                        <div className="form-item-button">
                            <button 
                                className='continue-btn'
                                onClick={this.continue}
                            
                            >Next</button>
                            <button 
                                className='cancel-btn'
                                onClick={this.cancel}
                            
                            >Cancel Payment</button>
                        </div>
                    </div>
                    
                </React.Fragment>
            </div>) }
}

export default PersonalInfo