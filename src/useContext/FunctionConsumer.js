import React, {useContext} from 'react';
import {myContext} from './ContextProvider';

//IF WE USE CONTEXT IN A FUNCTIONAL COMPONENT WE NEED TO IMPORT useContext FROM REACT
// AND THE CREATED CONTEXT FROM THE FILE THAT CONTAINS THE VALUE
//ALSO THIS FUNCTION NEEDS TO BE INSIDE THE WRAP OF THE PROVIDER
function FunctionConsumer() {

    //the imported context that holds the value
    const value = useContext(myContext);
    //in order to get the value from the provider you need to assign it to a variabile and
    //use the useContext hook

    return (
        <div>
            <h1>The value is {value}</h1>
        </div>
    )
}

export default FunctionConsumer
