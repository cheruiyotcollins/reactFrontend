import axios from 'axios';

const CUSTOMER_API_BASE_URL = "http://localhost:9191/customer";

class CustomerService {

    getCustomers(){
        return axios.get(CUSTOMER_API_BASE_URL);
    }

    createCustomer(customer){
        return axios.post(CUSTOMER_API_BASE_URL +'/add', customer);
    }

    getCustomerById(customerId){
        return axios.get(CUSTOMER_API_BASE_URL + '/view/' + customerId);
    }

    updateCustomer(customer, customerId){
        return axios.put(CUSTOMER_API_BASE_URL + '/update/' + customerId, customer);
    }

    deleteCustomer(customerId){
        return axios.delete(CUSTOMER_API_BASE_URL + '/delete/' + customerId);
    }
}

export default new CustomerService()