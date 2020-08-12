import { combineReducers } from 'redux';

// Reducer
import alert from "./alert/reducer"
import weather from "./weather/reducer"
import forecast from "./forecast/reducer"

export default combineReducers({
    alert,
    weather,
    forecast
});