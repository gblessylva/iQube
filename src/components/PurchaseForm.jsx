import React, {Component} from 'react';

class PurchaseForm extends Component {
    state = {
        step: 1,
        fullName:'',
        email:'', 
        LGA:'',
        Address1:'',
        Address2:'',
        stateOfOrigin:''
    }
    render() {
        return (
            <React.Fragment> 
                <h1>Hello</h1>
            </React.Fragment>
            
        );
    }
}

export default PurchaseForm;