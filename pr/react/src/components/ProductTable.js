//import
import React from 'react';
import ProductService from '../service/ProductService';

//classw
class ProductTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            earr:[],
            searcherr:[]
        }
    }

    fetchdata=()=>{
        ProductService.getAllProducts()
        .then((result)=>{
            console.log(result.da)
            this.setState({...this.state,earr:result.data,searcherr:result.data})
        })
        .catch(()=>{})
    }

    componentDidMount(){
        this.fetchdata();
    }

    render()
    {
        return(
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.searcherr.map((prd)=>
                    <tr key={prd.pid}>
                        <td>{prd.pid}</td>
                        <td>{prd.pname}</td>
                        <td>{prd.price}</td>
                    </tr>)}
                </tbody>
            </table>

        )
    }
}

export default ProductTable;