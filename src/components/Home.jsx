import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import image from './images/background_page.jpg'

export default class Home extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <section className='container'>
                    <div className='row' style={{marginTop:'20vh'}}>
                        <div className='col-md-6  col-10 my-auto mx-md-none mx-auto'style={{marginTop:'4vh'}}>
                            <h1 className='text-capitalize'>
                            </h1>
                            <p className='text-dark fs-2'>
                            Taking Banking Technology to the Common 
                            </p>
                            <p className='text-center text-dark fs-2'>Man</p>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <Link to='/customers' className='btn btn-success btn-lg text-uppercase shadow' >Customers</Link>
                                <Link to='/transactions' className='btn btn-success btn-lg text-uppercase shadow'>Transactions</Link>
                            </div>
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
                    </div>
                </section>
            </div>
        )
    }
}