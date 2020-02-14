import { combineReducers } from "redux";
import { Action, Column, ActionTypes, Cart } from "../actions";

export interface StoreState {
	columns: Column[];
	carts: Cart[];
}

function reducerFetchColumns(state: Column[] = [], action: Action) {
	switch (action.type) {
		case ActionTypes.FETCH_COLUMNS:
			return action.payload;
		default:
			return state;
	}
}

function reducerFetchCarts(state: Cart[] = [], action: Action) {
	switch (action.type) {
		case ActionTypes.FETCH_CARTS:
			return action.payload;
		default:
			return state;
	}
}

export default combineReducers<StoreState>({
	columns: reducerFetchColumns,
	carts: reducerFetchCarts
});
