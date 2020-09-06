import React, { Component } from 'react';

import MapGeo from './MapGeo';
class Pd extends Component {
    //YOUR CODE*

    state = {  
        //YOUR CODE
        counties:[]
        //YOUR CODE
    };
    
    handleOnRowSelected =(countyToUpdate) =>{
        //YOUR CODE
        console.log("click!"+countyToUpdate);
    };

    render() {
        return (           
                <div>     
                    {/* YOUR CODE*/}
                    {/* YOUR CODE*/}
                    {/* YOUR CODE*/}


                    {/* BEGIN INSERT CODE*/}
                    <div>
                        <svg width={900} height= {600}>
                            <MapGeo 
                                width={900}
                                height= {600}
                                counties = {this.state.counties}
                                handled = {this.handleOnRowSelected}
                            />
                        </svg>
                    </div>
                    {/* END INSERT CODE*/}


                    {/* YOUR CODE*/}
                    {/* YOUR CODE*/}
                    {/* YOUR CODE*/}               
                </div>
        );
    }
}


export default Pd;