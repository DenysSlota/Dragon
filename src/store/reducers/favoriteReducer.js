import { omit } from 'lodash';
import { ADD_DRAGON_TO_FAVORITE, REMOVE_DRAGON_FROM_FAVORITE } from '../constants/actionTypes';
import { getLocalStorage } from '../../utils/localStorage';

const initialState = getLocalStorage('store');

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DRAGON_TO_FAVORITE:            
            return {
                ...state,
                ...action.payload
            }
        case REMOVE_DRAGON_FROM_FAVORITE:            
            return omit(state, [action.payload])
        default:
            return state;
    }
}

export default favoriteReducer;