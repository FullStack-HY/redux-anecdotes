
const initialState = ""

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'CHANGE':{
            return action.data
        }
        default:{
            return state
        }
    }
}

export default reducer