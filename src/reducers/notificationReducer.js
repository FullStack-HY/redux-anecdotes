const notificationInitialState = "Welcome"

const reducer = (state=notificationInitialState, action) =>{

    switch(action.type){
        case 'SET':{
            return action.data
        }
        case 'CLEAR':{
            return ""
        }
        default:{
            return state
        }
    }
}

//action creators
export const notificationSet = (message, timeout)=>{
    // return {
    //     type:"SET",
    //     data: message
    // }
    return async (dispatch)=>{
        dispatch({
            type: "SET",
            data: message
        })
        setTimeout(()=>{
            dispatch({ type: "CLEAR" })
        }, timeout)
    }
}

export const clearNotification = ()=>{
    return {
        type:"CLEAR"
    }
}

export default reducer;
