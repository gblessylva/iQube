import React, {Component} from 'react'

class Billing extends Component {
  continue = e => {
      e.preventDefault();
      this.props.nextStep()
    }

    render(){
        const { values, handleChange } = this.props;
        return( 
        <div className="form-container">
                <React.Fragment> 
                    <div className="header">
                        <h1>Complete Your Purchase</h1>
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
                            <button 
                                className='continue-btn'
                                onClick={this.continue}
                            
                            >Continue</button>
                        </div>
                    </div>
                    
                </React.Fragment>
            </div>) }
}

export default Billing;