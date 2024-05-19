export const incNumber = ( num ) => { 
    return {
        type : "INCREMENT",
        payloadAnku: num,
    }
}

export const decNumber = () => { 
    return {
        type : "DECREMENT"
    }
}