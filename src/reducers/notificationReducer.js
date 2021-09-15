const notificationInitialState = {
    message: "Welcome",
}

let timeoutID;
const reducer = (state=notificationInitialState, action) =>{

    switch(action.type){
        case 'SET':{
            return action.data
        }
        case 'CLEAR':{
            return {
                message: '',
            }
        }
        default:{
            return state
        }
    }
}

//action creators
export const notificationSet = (message, timeout)=>{
    return async (dispatch)=>{
        if (timeoutID !== undefined){
            clearTimeout(timeoutID)
        }
        timeoutID = setTimeout(()=>{
            dispatch({ type: "CLEAR" })
        }, timeout)
        dispatch({
            type: "SET",
            data: {message}
        })
    }
}

export const clearNotification = ()=>{
    return {
        type:"CLEAR"
    }
}

export default reducer;
