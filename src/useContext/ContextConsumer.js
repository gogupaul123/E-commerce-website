import React from 'react';

//importing the created context from the provider 
import {myContext} from './ContextProvider';
// so that we can use .Consumer to wrap our content around

class ContextConsumer extends React.Component{
    
    render(){
        return(
            //our Consumer already has the value assigned to it in the provider,
            //so we create a function and pass the value as a parameter
            <myContext.Consumer>
                {myValue => (
                    <div>
                        <h1>the value is {myValue}</h1>
                    </div>
                )}
            </myContext.Consumer>
            
        )
    }
}
export default ContextConsumer;