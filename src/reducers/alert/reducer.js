import {SET_ALERT} from "../../actions";

const initialState = {
    message: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ALERT:
            return {
                message: action.payload
            }
        default:
            return state
    }
}
