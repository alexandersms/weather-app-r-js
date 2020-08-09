import {types} from "../../actions/types";
import weatherReducer from "./reducer";

describe('Posts Reducer', () => {

    it('Should return default state', () => {
        const newState = weatherReducer(undefined, {})
        expect(newState).toEqual([]);
    });

    it('Should return new state if receiving type', () => {
        const weather = [{ title: 'Test 1' }, { title: 'Test 2' }, { title: 'Test 3' }];
        const newState = weatherReducer(undefined, {
            type: types.GET_WEATHER,
            payload: weather
        });
        expect(newState).toEqual(weather)
    });

});