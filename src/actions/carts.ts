import Axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes, apiUrl } from "../actions";

export interface Cart {
	id: string;
	name: string;
	status: string;
}

export type Carts = Array<Cart>;

export interface fetchCarts {
	type: ActionTypes.FETCH_CARTS;
	payload: Cart[];
}

export const fetchCartsAction = () => {
	return async (dispatch: Dispatch<fetchCarts>) => {
		const res = await Axios.get(apiUrl);
		dispatch({
			type: ActionTypes.FETCH_CARTS,
			payload: res.data.carts
		});
	};
};
