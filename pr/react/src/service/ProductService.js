import axios from 'axios';
const baseurl='http://localhost:3002';

//class

class ProductService {

    getAllProducts()
    {
       return axios.get(baseurl+'/products');
    }
}

//export
export default new ProductService;