import React from 'react';
import ContextProvider from './ContextProvider';
import FunctionConsumer from './FunctionConsumer';
import ContextConsumer from './ContextConsumer';

function App2() {
    return (
        <div>
            
            <ContextProvider>
                {/*<FunctionConsumer></FunctionConsumer>*/}
                <ContextConsumer/>
            </ContextProvider>
        </div>
    )
}

export default App2
