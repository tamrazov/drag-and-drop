import Axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "../actions";

export const apiUrl = "http://localhost:3004/data";

export interface Column {
	id: string;
	title: string;
}
export type Columns = Array<Column>;

export interface fetchColumns {
	type: ActionTypes.FETCH_COLUMNS;
	payload: Column[];
}

export const fetchColumnsAction = () => {
	return async (dispatch: Dispatch<fetchColumns>) => {
		const res = await Axios.get(apiUrl);
		dispatch({
			type: ActionTypes.FETCH_COLUMNS,
			payload: res.data.columns
		});
	};
};
