import React, { Component } from 'react'
import CustomerService from '../services/CustomerService'

class ViewCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            customer: {}
        }
    }

    componentDidMount(){
        CustomerService.getCustomerById(this.state.id).then( res => {
            this.setState({customer: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Customer Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Customer Id: </label>
                            <div> { this.state.customer.customerId }</div>
                        </div>
                        <div className = "row">
                            <label> Customer Name: </label>
                            <div> { this.state.customer.customerName }</div>
                        </div>
                        <div className = "row">
                            <label> Customer Email: </label>
                            <div> { this.state.customer.email }</div>
                        </div>
                        <div className = "row">
                            <label> Customer MobileNo: </label>
                            <div> { this.state.customer.mobileNo }</div>
                        </div>
                        <div className = "row">
                            <label> Customer Status: </label>
                            <div> { this.state.customer.status }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCustomerComponent