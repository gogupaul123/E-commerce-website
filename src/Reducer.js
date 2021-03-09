export const initialState ={
    cos:[],
};

// Selector
export const getCosTotal = (cos) =>
cos?.reduce((amount, item)=>item.price + amount,0 );

const reducer = (state, action) =>{
    console.log(action);
    switch(action.type){
        case "ADAUGA_IN_COS":
            return {
                ...state,
                cos:[...state.cos, action.item]
            };
        case "REMOVE_FROM_BASKET":
            const index = state.cos.findIndex((cosItem)=>cosItem.id === action.id);
            let newCos =[...state.cos];
            if(index>= 0){
                newCos.splice(index, 1);
            }
            else{
                console.warn(`Can't remove product(id:${action.id} as basket!`)
            }
            return{
                ...state,
                cos: newCos
            }
        case "DELETE_ALL":
            console.log('deleted')
            return{cos:[]}   
        default:
            return state;
    }
};

export default reducer;