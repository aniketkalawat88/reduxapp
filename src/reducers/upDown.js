const initaialState = 0;

const changeTheNumber = (state = initaialState, action) => {
    switch(action.type){
        case "INCREMENT" : return state + action.payloadAnku ;
        case "DECREMENT" : return state -1;
        default: return state;
    }
}

export default changeTheNumber;