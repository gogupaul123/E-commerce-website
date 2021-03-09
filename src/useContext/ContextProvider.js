import React, {useState} from 'react';

//creating a context and assigning it to a variabile
export const myContext = React.createContext();




//WE WILL IMPORT THIS FUNCTION AND USE IT TO WRAP AROUND WHERE 
//WE NEED THE RETURN VALUE(CONTEXT) TO BE USED, ALL OF IT'S CHILDREN
//WILL HAVE ACCES TO IT

export default function ContextProvider(props) {
    const {children} = props;
    
    const [myValue, changeValue] = useState(2);

    function change1(){
        changeValue(prevValue=>prevValue + 1)
    }
    function change2(){
        changeValue(prevValue=>prevValue -1)
    }
    return (
        //THE FUCKING CONTEXT PROVIDER HAS ONLY ONE PROP, AND THAT IS THE VALUE WHICH IT PROVIDES
        //TO WHATEVER ELSE FUNCTION NEEDS IT
        <div>
            <myContext.Provider value = {myValue}>
                <button onClick={change1}>press to add</button>
                {children}
                <button onClick={change2}>press to decrement</button>
                 
            </myContext.Provider>
        </div>
    )
    }
   