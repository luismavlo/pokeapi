import { actions } from "../actions"

const INITIAL_STATE = {
    name: '',
    itemPerPage: 20,
    theme: false
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.setName:
            return{
                ...state,
                name: action.payload    
            }
        
        case actions.setItemPerPage:
            return{
                ...state,
                itemPerPage: action.payload
            }
        
        case actions.setTheme:
            return{
                ...state,
                theme: action.payload
            }

        default:
            return state
    }
}

export default reducer;