import React, {Component} from 'react';
import PersonalInfo from './Info/PersonalInfo';
import Billing from './Billing/Billing';

class PurchaseForm extends Component {
    state = {
        step: 1,
        fullName:'',
        email:'', 
        LGA:'',
        Address1:'',
        Address2:'',
        stateOfOrigin:'',
        stepTwo: {

        },
        isButtonDisabled: true
    }

    nextStep = () =>{
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }
    prevStep = () =>{
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }
    handleChange = input => e=> {
        this.setState({
            [input] : e.target.value
        })
    }

    render() {
        const {step} = this.state;
        const {fullName, email, Address1, Address2, LGA, stateOfOrigin } = this.state
        const values = {fullName, email, Address1, Address2, LGA, stateOfOrigin } 

        switch (step) {
            case 1:
                return (
                    <PersonalInfo
                        nextStep ={this.nextStep}
                        handleChange = {this.handleChange}
                        values ={values}
                    />
                    
                );
        
             case 2:
                return (
                    <Billing />                   
                    
                );
        
            default:
                return (
                    <React.Fragment> 
                        <h1>Hello 3</h1>
                    </React.Fragment>
                    
                );
        }
        
    }
}

export default PurchaseForm;