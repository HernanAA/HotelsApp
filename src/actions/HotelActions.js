import { Actions } from 'react-native-router-flux';
import api from './../helpers/api'
import { genericListFetch } from './UtilActions'

import {
    HOTEL_LIST_FETCH,
    HOTEL_LIST_FETCH_SUCCESS,
    HOTEL_LIST_FETCH_FAIL,
    HOTELS_FILTER_CHANGED,
    HOTEL_FETCH,
    HOTEL_FETCH_SUCCESS,
    HOTEL_FETCH_FAIL,
    HOTEL_SELECT
} from './types';

export const hotelListFetch = () => {
    return (dispatch) => {
        return dispatch(
            genericListFetch(
                HOTEL_LIST_FETCH,
                api.getHotelListlUrl(),
                loadHotelListSuccess,
                loadHotelListFail,
                ' Los hoteles.'
            ))
    }
};

const loadHotelListSuccess = (dispatch, jsonResponse) => {
    dispatch({
        type: HOTEL_LIST_FETCH_SUCCESS,
        payload:  {list: jsonResponse.hotels }
    });
};

const loadHotelListFail = (dispatch, error) => {
    dispatch({
        type: HOTEL_LIST_FETCH_FAIL,
        payload: { list: [], ...error }
    });
};

export const hotelFetch = (id) => {
    return (dispatch) => {
        return dispatch(
            genericListFetch(
                HOTEL_FETCH,
                api.getHotelListlUrl() + id,
                loadHotelSuccess,
                loadHotelFail,
                ' El hotel.'
            ))
    }
};

const loadHotelSuccess = (dispatch, rjson) => {
    dispatch({
        type: HOTEL_FETCH_SUCCESS,
        payload:  {selectedHotel: rjson.hotel }
    });
};

const loadHotelFail = (dispatch, error) => {
    dispatch({
        type: HOTEL_FETCH_FAIL,
        payload: { selectedHotel: {}, ...error }
    });
};

export const filterChanged = ({ text }) => {
    return (dispatch, getState) => {
        dispatch({ type: HOTEL_LIST_FETCH });

        const newData = getState().hotels.list.filter((item) => {
            const itemData = item.name.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })

        dispatch({ type: HOTELS_FILTER_CHANGED, payload: { filterText: text, filterdList: newData } });
    }
}

export const hotelSelect = (selectedHotel) => {
    return ({
        type: HOTEL_SELECT,
        payload: { selectedHotel }
    });
}