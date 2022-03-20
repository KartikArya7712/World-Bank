import React from "react";
import Axios from 'axios'
import Transaction from "./transaction";
import Navbar from "./Navbar";
import image from './images/background_page.jpg'


export default class Customers extends React.Component{
    constructor(){
        super();
        this.handleClick= this.handleClick.bind(this);
        this.state={
            customers:[],
            toggleModal:false,
            temp:'',
            temp2:'',
        }
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/customers')
            .then(res =>{
                this.setState({
                    customers:res.data
                })
            })
            .catch(err=>console.log(err.message));
    }

    handleClick=(e)=>{
        this.setState({
            toggleModal:!this.state.toggleModal,
            temp:e.target.value,
            temp2:e.target.name,
        })
    }
    closeToggle=()=>{
        this.setState({
            toggleModal:false
        })
    }
    render(){
        return(
            <div>
                <Navbar/>
                <h3 className="text-center text-uppercase font-weight-bold">customers</h3>
                <div className="container shadow px-0 rounded">
                    <table className="table table-secondary table-striped table-bordered border-secondary text-center my-auto">
                        <thead>
                            <tr className="text-uppercase">
                                <th> SR. No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Balance</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.customers.map((data, index)=>{
                                return(
                                    <tr key={index}>
                                        <td> {index+1}</td>
                                        <td className="fst-italic">{data.name}</td>
                                        <td className="fst-italic">{data.email}</td>
                                        <td>{data.balance}</td>
                                        <td >
                                            <button value={data.name} 
                                                name={data._id}
                                                className="btn btn-secondary btn-md text-uppercase fst-italic" 
                                                onClick={this.handleClick}>
                                                     Transfer
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='overflow-hidden'>
                            <img src={image} style={{
                                position: 'absolute',
                                left: '0',
                                top: '0',
                                height: '100vh',
                                width:'100vw',
                                opacity: '0.25',
                                zIndex:'-1'
                                
                            }} alt="helloworld" className='w-100' />
                        </div>
                <div>
                    {this.state.toggleModal ? <Transaction 
                        customerName={this.state.temp} 
                        customerId={this.state.temp2}
                        closeToggle={this.closeToggle}
                        />: null}
                </div>
            </div>
        )
    }
}