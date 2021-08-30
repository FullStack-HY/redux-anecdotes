const notificationInitialState = "Welcome"

const reducer = (state=notificationInitialState, action) =>{

    switch(action.type){
        case 'SET':{
            return action.data
        }
        case 'REMOVE':{
            return ""
        }
        default:{
            return state
        }
    }
}

//action creators
export const notificationSet = (message)=>{
    return {
        type:"SET",
        data: message
    }
}

export const notificationRemove = ()=>{
    return {
        type:"REMOVE"
    }
}

export default reducer;
