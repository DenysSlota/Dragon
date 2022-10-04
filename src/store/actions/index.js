import { ADD_DRAGON_TO_FAVORITE, REMOVE_DRAGON_FROM_FAVORITE } from "../constants/actionTypes"


export const setDragonToFavorite = dragon =>  ({
    type: ADD_DRAGON_TO_FAVORITE,
    payload: dragon
})

export const removeDragonFromFavorite = id =>  ({
    type: REMOVE_DRAGON_FROM_FAVORITE,
    payload: id
})